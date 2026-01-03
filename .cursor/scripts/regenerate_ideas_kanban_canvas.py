#!/usr/bin/env python3
"""
Canvas Generation Script for Ideas Kanban
Generates an Obsidian canvas that visualizes all items from the Ideas Kanban board.
"""

import json
import re
import os
import hashlib
from pathlib import Path
from typing import Dict, List, Set, Tuple, Optional
from collections import defaultdict

# Canvas configuration
CANVAS_FILE = "Ideas Kanban Canvas.canvas"
WORKSPACE_ROOT = Path(__file__).parent.parent.parent
KANBAN_FILE = WORKSPACE_ROOT / "⬛ Ideas Kanban.md"

# Layout configuration
HORIZONTAL_SPACING = 600  # Space between nodes in same layer (increased from 500)
VERTICAL_SPACING = 800  # Space between layers (increased from 600)

# Type-based colors
TYPE_COLORS = {
    "initiative": "4",  # Purple/Blue
    "business_outcome": "3",  # Yellow/Orange
    "product_outcome": "2",  # Green
    "opportunity": "1",  # Blue
    "solution": "5",  # Gray
    "experiment": "5",  # Gray (using 5 since 6 may not be available)
    "research": "1",  # Light Blue
    "insight": "2",  # Light Green
    "inbox_item": "5",  # Gray
    "other": "1"  # Default Blue
}

# Hierarchy-based sizing (layer -> (width, height))
LAYER_SIZES = {
    0: (500, 500),  # Initiatives (largest)
    1: (450, 450),  # Business Outcomes
    2: (450, 450),  # Product Outcomes
    3: (400, 400),  # Opportunities
    4: (400, 400),  # Solutions
    5: (350, 350),  # Experiments
    6: (350, 350)   # Supporting (smallest)
}

# Type display names for labels
TYPE_DISPLAY_NAMES = {
    "initiative": "Initiative",
    "business_outcome": "Business Outcome",
    "product_outcome": "Product Outcome",
    "opportunity": "Opportunity",
    "solution": "Solution",
    "experiment": "Experiment",
    "research": "Research",
    "insight": "Insight",
    "inbox_item": "Inbox Item",
    "other": "Other"
}

# Document type hierarchy (from top to bottom)
HIERARCHY_LAYERS = [
    ("initiatives", ["02-initiatives/"]),
    ("business_outcomes", ["04-opportunities/01-business-outcomes/"]),
    ("product_outcomes", ["04-opportunities/02-product-outcomes/"]),
    ("opportunities", ["04-opportunities/03-opportunities/"]),
    ("solutions", ["04-opportunities/04-solutions/"]),
    ("experiments", ["04-opportunities/05-experiments/"]),
    ("supporting", ["03-discovery/", "00-inbox/", "05-research/"])
]


def parse_kanban_board(kanban_path: Path) -> Dict[str, List[str]]:
    """Parse the kanban board and extract file paths from each column."""
    items_by_column = defaultdict(list)
    
    if not kanban_path.exists():
        print(f"Warning: Kanban file not found: {kanban_path}")
        return items_by_column
    
    content = kanban_path.read_text(encoding='utf-8')
    
    # Extract items from markdown links: [[path|display]] or [[path]]
    link_pattern = r'\[\[([^\]]+)\]\]'
    current_column = None
    
    for line in content.split('\n'):
        # Detect column headers
        if line.startswith('## '):
            # Extract column name (remove emojis and special chars)
            current_column = line.replace('## ', '').strip()
            # Clean up column name
            current_column = re.sub(r'[🔴💡🎯🧪📋✅📥🔍]', '', current_column).strip()
        elif current_column and line.strip().startswith('- ['):
            # Extract file path from [[path|display]] or [[path]]
            matches = re.findall(link_pattern, line)
            for match in matches:
                # Handle [[path|display]] format - take the path part
                file_path = match.split('|')[0].strip()
                if file_path and not file_path.startswith('*'):  # Skip placeholders
                    items_by_column[current_column].append(file_path)
    
    return items_by_column


def get_document_type(file_path: str) -> str:
    """Determine document type based on file path."""
    path_lower = file_path.lower()
    
    if '02-initiatives' in path_lower:
        return 'initiative'
    elif '01-business-outcomes' in path_lower:
        return 'business_outcome'
    elif '02-product-outcomes' in path_lower:
        return 'product_outcome'
    elif '03-opportunities' in path_lower:
        return 'opportunity'
    elif '04-solutions' in path_lower:
        return 'solution'
    elif '05-experiments' in path_lower:
        return 'experiment'
    elif '03-discovery/research' in path_lower:
        return 'research'
    elif '03-discovery/insights' in path_lower:
        return 'insight'
    elif '00-inbox' in path_lower:
        return 'inbox_item'
    elif '05-research' in path_lower:
        return 'research'
    else:
        return 'other'


def get_hierarchy_layer(doc_type: str) -> int:
    """Get the hierarchy layer number for a document type."""
    layer_map = {
        'initiative': 0,
        'business_outcome': 1,
        'product_outcome': 2,
        'opportunity': 3,
        'solution': 4,
        'experiment': 5,
        'research': 6,
        'insight': 6,
        'inbox_item': 6,
        'other': 6
    }
    return layer_map.get(doc_type, 6)


def extract_links_from_document(file_path: Path) -> List[str]:
    """Extract all internal markdown links from a document."""
    if not file_path.exists():
        return []
    
    try:
        content = file_path.read_text(encoding='utf-8')
        links = []
        
        # Match both [text](path) and [[path|text]] or [[path]]
        patterns = [
            r'\[([^\]]+)\]\(([^)]+)\)',  # [text](path)
            r'\[\[([^\]]+)\]\]',  # [[path|text]] or [[path]]
        ]
        
        for pattern in patterns:
            matches = re.findall(pattern, content)
            for match in matches:
                if isinstance(match, tuple):
                    # [text](path) format
                    link_path = match[1]
                else:
                    # [[path|text]] or [[path]] format
                    link_path = match.split('|')[0].strip()
                
                # Clean up the path
                link_path = link_path.strip()
                if link_path and not link_path.startswith('http'):
                    # Remove .md extension if present
                    if link_path.endswith('.md'):
                        link_path = link_path[:-3]
                    links.append(link_path)
        
        return links
    except Exception as e:
        print(f"Warning: Could not read {file_path}: {e}")
        return []


def resolve_path(relative_path: str, base_path: Path) -> Optional[Path]:
    """Resolve a relative path to an absolute path."""
    # Remove .md extension if present
    if relative_path.endswith('.md'):
        relative_path = relative_path[:-3]
    
    # Try relative to base path first
    resolved = (base_path.parent / relative_path).resolve()
    if resolved.exists():
        return resolved
    
    # Try relative to workspace root
    resolved = (WORKSPACE_ROOT / relative_path).resolve()
    if resolved.exists():
        return resolved
    
    # Try with .md extension
    for base in [base_path.parent, WORKSPACE_ROOT]:
        resolved = (base / f"{relative_path}.md").resolve()
        if resolved.exists():
            return resolved
    
    return None


def get_document_status(file_path: Path) -> str:
    """Extract status from document metadata."""
    if not file_path.exists():
        return "default"
    
    try:
        content = file_path.read_text(encoding='utf-8')
        # Look for **Status:** in frontmatter or body
        status_match = re.search(r'\*\*Status:\*\*\s*(\w+)', content)
        if status_match:
            return status_match.group(1)
        
        # Check for status in frontmatter
        if content.startswith('---'):
            frontmatter_match = re.search(r'status:\s*(\w+)', content, re.IGNORECASE)
            if frontmatter_match:
                return frontmatter_match.group(1)
    except Exception:
        pass
    
    return "default"


def extract_document_title(file_path: Path) -> str:
    """Extract clean document title from markdown file."""
    if not file_path.exists():
        # Fallback to filename
        return file_path.stem.replace('-', ' ').replace('_', ' ').title()
    
    try:
        content = file_path.read_text(encoding='utf-8')
        
        # Look for first # Title line
        for line in content.split('\n'):
            line = line.strip()
            if line.startswith('# '):
                # Extract title (remove # and clean)
                title = line[2:].strip()
                # Remove emojis and special formatting
                title = re.sub(r'[🔴💡🎯🧪📋✅📥🔍]', '', title).strip()
                # Remove markdown formatting
                title = re.sub(r'\*\*([^*]+)\*\*', r'\1', title)  # Bold
                title = re.sub(r'\*([^*]+)\*', r'\1', title)  # Italic
                # Clean up extra spaces
                title = ' '.join(title.split())
                if title:
                    return title
        
        # If no # title found, try to extract from filename
        return file_path.stem.replace('-', ' ').replace('_', ' ').title()
    except Exception as e:
        print(f"Warning: Could not extract title from {file_path}: {e}")
        # Fallback to filename
        return file_path.stem.replace('-', ' ').replace('_', ' ').title()


def format_node_title(doc_type: str, title: str) -> str:
    """Format node title with type prefix."""
    type_display = TYPE_DISPLAY_NAMES.get(doc_type, "Other")
    
    # Format: [TYPE] Title
    formatted = f"[{type_display}] {title}"
    
    # Truncate to max 50 characters (including prefix)
    if len(formatted) > 50:
        # Calculate available space for title (after prefix)
        prefix_len = len(f"[{type_display}] ")
        max_title_len = 50 - prefix_len
        if max_title_len > 0:
            title_truncated = title[:max_title_len - 3] + "..."
            formatted = f"[{type_display}] {title_truncated}"
        else:
            # If prefix is too long, just use prefix
            formatted = f"[{type_display}]"
    
    return formatted


def get_type_color(doc_type: str) -> str:
    """Get color based on document type."""
    return TYPE_COLORS.get(doc_type, TYPE_COLORS['other'])


def get_node_size(layer: int) -> Tuple[int, int]:
    """Get node size based on hierarchy layer."""
    return LAYER_SIZES.get(layer, (400, 400))


def generate_node_id(file_path: str) -> str:
    """Generate a unique node ID from file path."""
    return hashlib.md5(file_path.encode()).hexdigest()[:16]


def generate_edge_id(from_node: str, to_node: str) -> str:
    """Generate a unique edge ID."""
    combined = f"{from_node}-{to_node}"
    return hashlib.md5(combined.encode()).hexdigest()[:16]


def build_relationship_graph(items: List[str]) -> Tuple[Dict[str, Dict], Dict[str, Set[str]]]:
    """Build a graph of document relationships."""
    nodes = {}
    edges = defaultdict(set)
    
    # First pass: create nodes for all items
    for item_path in items:
        full_path = resolve_path(item_path, WORKSPACE_ROOT)
        if not full_path:
            continue
        
        doc_type = get_document_type(item_path)
        status = get_document_status(full_path)
        node_id = generate_node_id(item_path)
        
        # Extract document title
        title = extract_document_title(full_path)
        formatted_title = format_node_title(doc_type, title)
        
        # Get relative path from workspace root
        try:
            rel_path = full_path.relative_to(WORKSPACE_ROOT)
            rel_path_str = str(rel_path).replace('\\', '/')
        except ValueError:
            rel_path_str = item_path
        
        nodes[node_id] = {
            'id': node_id,
            'file': rel_path_str,
            'type': doc_type,
            'status': status,
            'layer': get_hierarchy_layer(doc_type),
            'title': title,
            'formatted_title': formatted_title
        }
    
    # Second pass: extract links and create edges
    for item_path in items:
        full_path = resolve_path(item_path, WORKSPACE_ROOT)
        if not full_path:
            continue
        
        from_node_id = generate_node_id(item_path)
        if from_node_id not in nodes:
            continue
        
        # Extract links from document
        links = extract_links_from_document(full_path)
        
        for link in links:
            # Try to resolve the link
            linked_path = resolve_path(link, full_path)
            if linked_path:
                try:
                    linked_rel_path = linked_path.relative_to(WORKSPACE_ROOT)
                    linked_rel_path_str = str(linked_rel_path).replace('\\', '/')
                    to_node_id = generate_node_id(linked_rel_path_str)
                    
                    # Only create edge if target node exists
                    if to_node_id in nodes:
                        edges[from_node_id].add(to_node_id)
                except ValueError:
                    # Link points outside workspace, skip
                    pass
    
    return nodes, edges


def group_nodes_by_type(nodes: List[str], node_data: Dict[str, Dict]) -> Dict[str, List[str]]:
    """Group nodes by type within a list."""
    groups = defaultdict(list)
    for node_id in nodes:
        doc_type = node_data[node_id]['type']
        groups[doc_type].append(node_id)
    return groups


def calculate_positions(nodes: Dict[str, Dict]) -> Dict[str, Tuple[float, float]]:
    """Calculate x,y positions for all nodes based on hierarchy with grouping by type."""
    # Group nodes by layer
    nodes_by_layer = defaultdict(list)
    for node_id, node_data in nodes.items():
        layer = node_data['layer']
        nodes_by_layer[layer].append(node_id)
    
    positions = {}
    
    # Type order for consistent sorting within layers
    type_order = ['initiative', 'business_outcome', 'product_outcome', 'opportunity', 
                  'solution', 'experiment', 'research', 'insight', 'inbox_item', 'other']
    
    # Calculate positions for each layer
    for layer in sorted(nodes_by_layer.keys()):
        layer_nodes = nodes_by_layer[layer]
        
        # Group nodes by type within this layer
        type_groups = group_nodes_by_type(layer_nodes, nodes)
        
        # Sort groups by type order, then sort nodes within each group
        sorted_groups = []
        for doc_type in type_order:
            if doc_type in type_groups:
                # Sort nodes within group (by title for consistency)
                sorted_nodes = sorted(type_groups[doc_type], 
                                    key=lambda nid: nodes[nid].get('title', '').lower())
                sorted_groups.append((doc_type, sorted_nodes))
        
        # Calculate total width needed for this layer (accounting for variable node sizes)
        total_width = 0
        node_widths = []
        for doc_type, group_nodes in sorted_groups:
            for node_id in group_nodes:
                width, _ = get_node_size(layer)
                node_widths.append((node_id, width))
                total_width += width + HORIZONTAL_SPACING
        
        # Remove last spacing
        if total_width > 0:
            total_width -= HORIZONTAL_SPACING
        
        # Calculate starting x position (center-aligned)
        start_x = -total_width / 2
        
        # Position nodes
        current_x = start_x
        y = layer * VERTICAL_SPACING
        
        for node_id, width in node_widths:
            # Center the node at current_x
            x = current_x + width / 2
            positions[node_id] = (x, y)
            current_x += width + HORIZONTAL_SPACING
    
    return positions


def generate_canvas_json(nodes: Dict[str, Dict], edges: Dict[str, Set[str]], positions: Dict[str, Tuple[float, float]]) -> dict:
    """Generate the Obsidian canvas JSON structure."""
    canvas_nodes = []
    canvas_edges = []
    
    # Create canvas nodes
    for node_id, node_data in nodes.items():
        if node_id not in positions:
            continue
        
        x, y = positions[node_id]
        doc_type = node_data['type']
        
        # Use type-based color instead of status-based
        color = get_type_color(doc_type)
        
        # Get node size based on hierarchy layer
        layer = node_data['layer']
        width, height = get_node_size(layer)
        
        # Create file node
        canvas_node = {
            "id": node_id,
            "x": x,
            "y": y,
            "width": width,
            "height": height,
            "type": "file",
            "file": node_data['file'],
            "color": color
        }
        canvas_nodes.append(canvas_node)
    
    # Create canvas edges
    for from_node_id, to_nodes in edges.items():
        if from_node_id not in positions:
            continue
        
        for to_node_id in to_nodes:
            if to_node_id not in positions:
                continue
            
            # Determine connection sides based on hierarchy
            from_layer = nodes[from_node_id]['layer']
            to_layer = nodes[to_node_id]['layer']
            
            if from_layer < to_layer:
                # From higher to lower layer
                from_side = "bottom"
                to_side = "top"
            elif from_layer > to_layer:
                # From lower to higher layer
                from_side = "top"
                to_side = "bottom"
            else:
                # Same layer - use horizontal connection
                from_side = "right"
                to_side = "left"
            
            edge_id = generate_edge_id(from_node_id, to_node_id)
            canvas_edge = {
                "id": edge_id,
                "fromNode": from_node_id,
                "fromSide": from_side,
                "toNode": to_node_id,
                "toSide": to_side
            }
            canvas_edges.append(canvas_edge)
    
    return {
        "nodes": canvas_nodes,
        "edges": canvas_edges
    }


def regenerate_canvas():
    """Main function to regenerate the Ideas Kanban canvas."""
    print("Regenerating Ideas Kanban Canvas...")
    
    # Parse kanban board
    print("  Parsing kanban board...")
    items_by_column = parse_kanban_board(KANBAN_FILE)
    
    # Collect all unique items
    all_items = set()
    for column_items in items_by_column.values():
        all_items.update(column_items)
    
    print(f"  Found {len(all_items)} items in kanban board")
    
    # Build relationship graph
    print("  Building relationship graph...")
    nodes, edges = build_relationship_graph(list(all_items))
    print(f"  Created {len(nodes)} nodes and {sum(len(v) for v in edges.values())} edges")
    
    # Calculate positions
    print("  Calculating positions...")
    positions = calculate_positions(nodes)
    
    # Generate canvas JSON
    print("  Generating canvas JSON...")
    canvas_json = generate_canvas_json(nodes, edges, positions)
    
    # Write canvas file
    canvas_path = WORKSPACE_ROOT / CANVAS_FILE
    print(f"  Writing canvas to {canvas_path}...")
    with open(canvas_path, 'w', encoding='utf-8') as f:
        json.dump(canvas_json, f, indent=2, ensure_ascii=False)
    
    print(f"✓ Canvas regenerated successfully: {len(canvas_json['nodes'])} nodes, {len(canvas_json['edges'])} edges")
    return True


if __name__ == "__main__":
    try:
        regenerate_canvas()
    except Exception as e:
        print(f"Error regenerating canvas: {e}")
        import traceback
        traceback.print_exc()
        exit(1)

