# Cross-Reference Prompt

## Use Case

Use this prompt when creating cross-references and links between related documents.

## Context

This prompt guides the creation of bidirectional links between related documents to maintain traceability and discoverability.

## Prompt Text

Create cross-references between related documents following these rules:

### 1. Identify Related Documents

For each document, identify:
- **Source documents**: Documents that this document is derived from
- **Derived documents**: Documents that are derived from this one
- **Related insights**: Insight documents that relate
- **Related research**: Research documents that relate
- **Related opportunities**: Opportunities that relate
- **Related outcomes**: Outcomes that relate
- **Related solutions**: Solutions that relate

### 2. Create Bidirectional Links

For each relationship:
- **Link from source**: Add link in source document to derived document
- **Link from derived**: Add link in derived document back to source
- **Use relative paths**: Use relative markdown links
- **Descriptive link text**: Use clear, descriptive link text

### 3. Update Document Sections

Add or update sections:
- **"Related Documents"** section: List all related documents
- **"Source Research"** section: If applicable, link to source research
- **"Related Insights"** section: If applicable, link to related insights
- **"Related Opportunities"** section: If applicable, link to related opportunities

### 4. Maintain Traceability

Ensure:
- **Inbox items**: Processed inbox items link to all created documents
- **Created documents**: All created documents link back to source inbox items
- **Research chain**: Research → Insights → Opportunities → Solutions chain is linked
- **Outcome chain**: Business Outcomes → Product Outcomes → Opportunities chain is linked

### 5. Update Index Files

If applicable:
- **Update index files**: Add links to new documents in relevant index files
- **Maintain organization**: Keep index files organized and up-to-date

## Parameters

- `document_path`: Path to the document to create cross-references for
- `related_documents`: List of related documents to link to
- `link_type`: Type of relationship (source, derived, related, etc.)

## Expected Output

Updated documents with:
- Bidirectional links between related documents
- Updated "Related Documents" sections
- Proper relative paths
- Maintained traceability chains

## Related Commands

- `synthesize-content` - Uses this prompt to create cross-references
- `process-inbox-todo` - Uses this prompt when creating document links
- All document generation commands - Use this prompt to maintain links

## Related Methodology

- [Research Template](../../templates/research-template.md) - Research document structure
- [Discovery Process](../../methodology/discovery-process.md) - Product discovery methodology

