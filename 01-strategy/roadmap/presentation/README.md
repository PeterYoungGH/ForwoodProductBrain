# Roadmap Presentation Site

A polished, interactive presentation site that transforms markdown roadmap documents into a click-through presentation with dark gradient design, smooth animations, and bottom-centered navigation.

## Features

- **Dynamic Slide Generation**: Automatically generates slides from roadmap markdown files
- **Dark Gradient Design**: Professional teal-to-black gradient backgrounds
- **Smooth Animations**: Framer Motion powered transitions and entrance animations
- **Bottom Navigation**: Centered navigation bar with progress dots
- **Keyboard Navigation**: Arrow keys, space bar, and touch gestures
- **Responsive Design**: Adapts to mobile, tablet, and desktop screens
- **Accessibility**: ARIA labels, keyboard navigation, reduced motion support
- **Data Validation**: Zod schemas ensure data integrity

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd 01-strategy/roadmap/presentation
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000/presentation](http://localhost:3000/presentation) to view the presentation.

### Build

```bash
npm run build
npm start
```

### Validation

Validate roadmap markdown files before building:

```bash
npm run validate
```

## Project Structure

```
presentation/
├── app/
│   ├── presentation/
│   │   └── page.tsx          # Main presentation route
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Global styles
├── components/
│   └── presentation/
│       ├── RoadmapPresentation.tsx  # Main container
│       ├── NavigationControls.tsx  # Bottom nav
│       ├── SlideProgress.tsx        # Progress dots
│       └── slides/                  # Slide components
├── lib/
│   ├── roadmap-parser.ts      # Markdown parsing
│   ├── roadmap-data.ts        # TypeScript interfaces
│   ├── validation.ts          # Zod schemas
│   ├── slide-registry.ts      # Slide generation
│   └── icon-mapping.ts        # Icon configuration
├── icons/                     # Icon components
└── scripts/
    └── validate-roadmap.ts    # Build-time validation
```

## Data Sources

The presentation reads from these markdown files (relative to the presentation directory):

- `../01-strategic-roadmap.md` - Strategic themes and vision
- `../02-portfolio-roadmap.md` - Portfolio initiatives
- `../03-delivery-roadmap.md` - Delivery releases
- `../roadmap-hierarchy.md` - Theme-to-initiative mapping

## Configuration

Customize the presentation via `presentation.config.ts`:

- Icon mappings
- Slide ordering
- Color overrides
- Animation preferences
- Feature flags

## Slide Types

1. **Title Slide** - Welcome screen with Forwood One branding
2. **Strategic Vision** - Mission and vision statements
3. **Themes Overview** - Grid of all strategic themes
4. **Theme Detail** - Individual theme deep-dive (one per theme)
5. **Strategic Pillars** - Core principles grid
6. **Portfolio Overview** - Timeline view of initiatives
7. **Portfolio Initiatives** - Detailed initiative cards
8. **Launch Moments** - Major launch events timeline
9. **Delivery Roadmap** - Release pipeline status
10. **Summary** - Final call to action

## Customization

### Adding New Icons

1. Create icon component in `icons/`
2. Add to `icon-mapping.ts`
3. Update `presentation.config.ts` if needed

### Modifying Slide Order

Edit `lib/slide-registry.ts` or use `presentation.config.ts` to customize slide sequence.

### Styling

- Colors: `lib/constants.ts` and `tailwind.config.ts`
- Typography: `app/globals.css` (semantic classes)
- Animations: `lib/constants.ts` (animation presets)

## Troubleshooting

### Markdown Parsing Errors

Run validation to check for issues:

```bash
npm run validate
```

### Build Errors

Ensure all dependencies are installed:

```bash
npm install
```

### Missing Data

Check that roadmap markdown files exist and contain required sections. The parser is flexible but requires certain heading structures.

## License

Internal use only.


