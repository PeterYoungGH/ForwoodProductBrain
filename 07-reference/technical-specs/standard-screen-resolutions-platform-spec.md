# Standard Screen Resolutions for Multi-Platform Application

**Last Updated:** 2025-12-08  
**Purpose:** Technical specification for standard screen resolutions and breakpoints for Forwood One platform

## Overview

This document defines the standard screen resolutions and breakpoints for a platform that supports:
- **Web Application** (responsive, accessible via browser on all devices)
- **Native Mobile App** (iOS and Android)
- **Tablet Support** (both web and native)

The web application is fully responsive and usable on mobile phones in browsers, with some functions disabled on mobile resolutions where they don't provide value to mobile users.

## Developer Guidance: Target Resolutions

### Quick Reference: Primary Targets

**Web Application (Responsive)**
- **Primary Target**: 1920×1080 (desktop), 375×667 (mobile)
- **Minimum Supported**: 320px width (mobile), 1366px width (desktop)
- **Critical Breakpoints**: 375px, 768px, 1024px, 1440px, 1920px

**Native Mobile Apps**
- **iOS Primary**: iPhone 12/13/14 (1170×2532) - design for this, test on SE for minimum
- **Android Primary**: 360×640 (hdpi) - design for this, test down to 320×480 (mdpi)

**Tablet**
- **Primary Target**: iPad (1024×768 landscape, 768×1024 portrait)
- **Minimum**: 768px width for web, iPad (10.2") for native

### Development Priority Order

1. **Desktop Web (1920×1080)** - Start here for full feature set
2. **Mobile Web (375×667)** - Core mobile experience
3. **Tablet Web (1024×768)** - Full feature set, touch optimized
4. **Native Mobile** - iOS and Android primary resolutions
5. **Edge Cases** - Small mobile (320px), large desktop (4K)

### Development Workflow

**For Web Development:**
1. **Design & Build**: Start with desktop (1920×1080) for full features
2. **Responsive Testing**: Test at breakpoints: 1920px → 1440px → 1024px → 768px → 375px → 320px
3. **Feature Gating**: Disable advanced features below 768px (see Mobile Browser Limitations)
4. **Touch Optimization**: Ensure 48×48px minimum touch targets below 768px

**For Native App Development:**
1. **Design**: Use design system units (pt for iOS, dp for Android)
2. **Test**: Primary device first, then minimum supported device
3. **Orientation**: Support both portrait and landscape (portrait primary for mobile)
4. **Safe Areas**: Always account for notches, status bars, home indicators

### Testing Checklist (Minimum Viable)

**Before PR:**
- [ ] Desktop: 1920×1080 (Chrome)
- [ ] Mobile: 375×667 (Chrome DevTools mobile emulation)
- [ ] Tablet: 1024×768 (Chrome DevTools tablet emulation)

**Before Release:**
- [ ] All breakpoints tested (320px, 375px, 768px, 1024px, 1440px, 1920px)
- [ ] Native apps tested on physical devices (iOS and Android primary targets)
- [ ] Orientation changes tested (portrait ↔ landscape)

### Common Pitfalls to Avoid

1. **Don't hardcode pixel values** - Use relative units (rem, em, %) and breakpoints
2. **Don't assume desktop-only features** - Check if feature should be disabled on mobile
3. **Don't forget touch targets** - Minimum 44×44px (iOS) or 48×48px (web/Android)
4. **Don't ignore safe areas** - Account for notches and system UI on native apps
5. **Don't test only one orientation** - Always test both portrait and landscape

### Breakpoint Quick Reference

```css
/* Use these exact breakpoints for consistency */
$mobile-small: 320px;    /* Minimum mobile */
$mobile-medium: 375px;   /* Standard mobile */
$mobile-large: 767px;    /* Large mobile max */
$tablet: 768px;          /* Tablet start */
$desktop-small: 1024px;  /* Desktop start */
$desktop-medium: 1440px; /* Standard desktop */
$desktop-large: 1920px;   /* Full HD desktop */
```

## Resolution Categories

### 1. Mobile Phone Resolutions

#### iOS Native App Resolutions
| Device | Resolution | PPI | Aspect Ratio | Status |
|--------|-----------|-----|--------------|--------|
| iPhone SE (3rd gen) | 750 × 1334 | 326 | 16:9 | Current |
| iPhone 12/13/14 | 1170 × 2532 | 460 | 19.5:9 | Current |
| iPhone 12/13/14 Pro Max | 1284 × 2778 | 458 | 19.5:9 | Current |
| iPhone 15/15 Pro | 1179 × 2556 | 460 | 19.5:9 | Current |
| iPhone 15 Pro Max | 1290 × 2796 | 460 | 19.5:9 | Current |

#### Android Native App Resolutions
| Category | Resolution | DPI | Aspect Ratio | Notes |
|----------|-----------|-----|--------------|-------|
| Small | 320 × 480 | mdpi | 3:2 | Legacy support |
| Normal | 360 × 640 | hdpi | 16:9 | Most common |
| Large | 480 × 800 | xhdpi | 5:3 | Common |
| XL | 720 × 1280 | xxhdpi | 16:9 | High-end |
| XXL | 1080 × 1920 | xxxhdpi | 16:9 | Flagship |
| XXL+ | 1440 × 2560 | xxxhdpi | 16:9 | Premium |

#### Mobile Browser (Responsive Web) Breakpoints
| Breakpoint | Width Range | Use Case |
|------------|-------------|----------|
| Mobile Small | 320px - 374px | Small phones (iPhone SE, older Android) |
| Mobile Medium | 375px - 424px | Standard phones (iPhone 12/13/14) |
| Mobile Large | 425px - 767px | Large phones (iPhone Pro Max, large Android) |

**Mobile Browser Considerations:**
- Touch-optimized UI elements (minimum 44×44px touch targets)
- Simplified navigation (hamburger menu, bottom navigation)
- Disabled features on mobile: Advanced reporting, bulk operations, complex data exports
- Enabled features: Core workflows, form submissions, basic viewing, notifications

### 2. Tablet Resolutions

#### iPad Native App Resolutions
| Device | Resolution | PPI | Aspect Ratio | Orientation |
|--------|-----------|-----|--------------|-------------|
| iPad (10.2") | 1620 × 2160 | 264 | 4:3 | Portrait/Landscape |
| iPad Air (10.9") | 1640 × 2360 | 264 | 4:3 | Portrait/Landscape |
| iPad Pro (11") | 1668 × 2388 | 264 | 4:3 | Portrait/Landscape |
| iPad Pro (12.9") | 2048 × 2732 | 264 | 4:3 | Portrait/Landscape |

#### Android Tablet Native App Resolutions
| Category | Resolution | DPI | Aspect Ratio | Notes |
|----------|-----------|-----|--------------|-------|
| 7" Tablet | 600 × 960 | mdpi | 16:10 | Small tablets |
| 10" Tablet | 800 × 1280 | mdpi | 16:10 | Standard tablets |
| 10" Tablet HD | 1200 × 1920 | xhdpi | 16:10 | High-res tablets |

#### Tablet Browser (Responsive Web) Breakpoints
| Breakpoint | Width Range | Use Case |
|------------|-------------|----------|
| Tablet Portrait | 768px - 1023px | iPad portrait, small tablets |
| Tablet Landscape | 1024px - 1439px | iPad landscape, Android tablets |

**Tablet Browser Considerations:**
- Full feature set available (no disabled features)
- Optimized for both portrait and landscape orientations
- Touch and pointer input support
- Multi-column layouts enabled

### 3. Desktop/Web Resolutions

#### Desktop Browser Breakpoints
| Breakpoint | Width Range | Use Case |
|------------|-------------|----------|
| Desktop Small | 1440px - 1919px | Laptops, small monitors |
| Desktop Medium | 1920px - 2559px | Standard monitors (1080p, 1440p) |
| Desktop Large | 2560px - 3839px | Large monitors (4K) |
| Desktop XL | 3840px+ | Ultra-wide, 4K+ displays |

#### Common Desktop Resolutions
| Resolution | Aspect Ratio | Market Share | Notes |
|-----------|--------------|--------------|-------|
| 1920 × 1080 | 16:9 | ~35% | Most common (Full HD) |
| 1366 × 768 | 16:9 | ~15% | Laptop standard |
| 1536 × 864 | 16:9 | ~10% | Laptop HD |
| 2560 × 1440 | 16:9 | ~8% | QHD monitors |
| 3840 × 2160 | 16:9 | ~5% | 4K monitors |
| 1440 × 900 | 16:10 | ~4% | MacBook Air |
| 2560 × 1600 | 16:10 | ~3% | MacBook Pro |

**Desktop Browser Considerations:**
- Full feature set available
- Mouse and keyboard optimized
- Multi-window support
- Advanced interactions (drag-drop, keyboard shortcuts)

## Responsive Design Breakpoints (CSS/Media Queries)

### Mobile-First Approach

```css
/* Mobile Small (default) */
/* Base styles for 320px+ */

/* Mobile Medium */
@media (min-width: 375px) { }

/* Mobile Large */
@media (min-width: 425px) { }

/* Tablet Portrait */
@media (min-width: 768px) { }

/* Tablet Landscape / Desktop Small */
@media (min-width: 1024px) { }

/* Desktop Medium */
@media (min-width: 1440px) { }

/* Desktop Large */
@media (min-width: 1920px) { }

/* Desktop XL */
@media (min-width: 2560px) { }
```

### Desktop-First Approach (Alternative)

```css
/* Desktop (default) */
/* Base styles for 1920px+ */

/* Desktop Small */
@media (max-width: 1919px) { }

/* Tablet Landscape */
@media (max-width: 1439px) { }

/* Tablet Portrait */
@media (max-width: 1023px) { }

/* Mobile Large */
@media (max-width: 767px) { }

/* Mobile Medium */
@media (max-width: 424px) { }

/* Mobile Small */
@media (max-width: 374px) { }
```

## Platform-Specific Considerations

### Native Mobile Apps

#### iOS
- **Design Units**: Use points (pt) not pixels
- **Safe Areas**: Account for notch, status bar, home indicator
- **Orientation**: Support portrait (primary) and landscape (secondary)
- **Minimum iOS Version**: iOS 14+ (consider iOS 15+ for new features)

#### Android
- **Design Units**: Use density-independent pixels (dp/dip)
- **Material Design**: Follow Material Design 3 guidelines
- **Orientation**: Support both orientations
- **Minimum Android Version**: Android 8.0 (API 26+) or Android 10+ (API 29+)

### Responsive Web Application

#### Mobile Browser Limitations
**Functions Disabled on Mobile (< 768px):**
- Advanced reporting and analytics dashboards
- Bulk data operations (import/export, bulk edits)
- Complex data visualization (multi-chart dashboards)
- Advanced filtering and search (replaced with simplified versions)
- Multi-column data tables (replaced with card views)
- Keyboard shortcuts
- Drag-and-drop operations
- Print functionality (replaced with share/export)

**Functions Enabled on Mobile:**
- Core workflows and forms
- Basic viewing and navigation
- Notifications and alerts
- Simple search and filtering
- Single-item operations
- Photo/video capture and upload
- Location services
- Offline mode (where applicable)

#### Tablet Browser
- **Full Feature Set**: All desktop features available
- **Touch Optimization**: Larger touch targets, gesture support
- **Orientation Support**: Optimize layouts for both orientations

#### Desktop Browser
- **Full Feature Set**: All features available
- **Keyboard Navigation**: Full keyboard shortcut support
- **Mouse Interactions**: Hover states, right-click menus, drag-drop
- **Multi-Window**: Support for popups, modals, side panels

## Testing Requirements

### Device Testing Matrix

#### Mobile Phones
- [ ] iPhone SE (small screen)
- [ ] iPhone 12/13/14 (standard)
- [ ] iPhone 15 Pro Max (large screen)
- [ ] Android small (320×480)
- [ ] Android normal (360×640)
- [ ] Android large (1080×1920)

#### Tablets
- [ ] iPad (10.2")
- [ ] iPad Pro (12.9")
- [ ] Android 7" tablet
- [ ] Android 10" tablet

#### Desktop
- [ ] 1366×768 (laptop)
- [ ] 1920×1080 (standard monitor)
- [ ] 2560×1440 (QHD)
- [ ] 3840×2160 (4K)

### Browser Testing

#### Mobile Browsers
- [ ] Safari iOS (latest 2 versions)
- [ ] Chrome Android (latest 2 versions)
- [ ] Samsung Internet
- [ ] Firefox Mobile

#### Desktop Browsers
- [ ] Chrome (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Edge (latest 2 versions)

## Design System Considerations

### Typography Scale
- **Mobile**: Base 16px, scale 1.125 (minor third)
- **Tablet**: Base 18px, scale 1.2 (major third)
- **Desktop**: Base 20px, scale 1.25 (major third)

### Spacing System
- **Mobile**: 4px base unit (4, 8, 12, 16, 24, 32px)
- **Tablet/Desktop**: 8px base unit (8, 16, 24, 32, 48, 64px)

### Touch Targets
- **Minimum Size**: 44×44px (iOS), 48×48dp (Android)
- **Recommended**: 48×48px for web mobile
- **Spacing**: Minimum 8px between touch targets

### Grid System
- **Mobile**: 4-column grid (320-767px)
- **Tablet**: 8-column grid (768-1023px)
- **Desktop**: 12-column grid (1024px+)

## Performance Considerations

### Image Optimization
- **Mobile**: Serve smaller images (1x, 2x for retina)
- **Tablet**: Serve medium images (2x for retina)
- **Desktop**: Serve full-resolution images (1x, 2x for retina)

### Asset Delivery
- **Mobile**: Lazy load below-the-fold content
- **Tablet/Desktop**: Progressive loading, prioritize above-the-fold

## Accessibility Requirements

### Screen Reader Support
- Test with VoiceOver (iOS), TalkBack (Android)
- Test with NVDA, JAWS, VoiceOver (desktop)

### Keyboard Navigation
- Full keyboard navigation on desktop
- Mobile: Support external keyboards where applicable

### Color Contrast
- WCAG AA minimum (4.5:1 for normal text)
- WCAG AAA preferred (7:1 for normal text)

## Notes

- All resolutions should be tested in both portrait and landscape orientations where applicable
- Consider foldable devices (Samsung Galaxy Fold, Microsoft Surface Duo) for future support
- Monitor market share data quarterly to adjust priority devices
- Maintain backward compatibility for at least 2 major OS versions
- Document any device-specific workarounds or limitations

## Related Documents

- [Inbox Item: Standard Screen Resolutions Platform Spec](../../00-inbox/raw/2025-12-08-standard-screen-resolutions-platform-spec-[INBOX].md)



