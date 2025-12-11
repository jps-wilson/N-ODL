# NOODL - Responsive Restaurant Website

## Project Overview

NŌODL is a responsive website for a Neo-Tokyo inspired ramen restaurant. The site features a modern design with a vibrant color palette, smooth animations, and full responsiveness across mobile, tablet, and desktop devices.

## Features Implemented

### Core Requirements

- **Single Navigation Element**: One

  element that adapts across all devices

- **Mobile Navigation Pattern**: Slide-in hamburger menu from the right
- **Three Media Queries**:

  - Mobile: 320px (4-column grid, 16px gutters)
  - Tablet: 768px (12-column grid, 16px gutters)
  - Desktop: 1280px (12-column grid, 20px gutters)

- **Responsive JavaScript Plugin**: Slick Slider with 3 breakpoints

  - Mobile: 1 slide visible
  - Tablet: 2 slides visible
  - Desktop: 4 slides visible

### Design Elements

- **Color Palette**:

  - Black: #000000
  - Dark Gray: #1a1a1a
  - Light Gray: #f5f5f5
  - Pink: #ff005c
  - White: #ffffff

- **Typography**:

  - Headers: Sora Extra Bold
  - Body: Inter Regular

### Responsive Sections

1.  **Hero Section**: Full-width banner with CTA button
2.  **Signature Bowls**: Grid layout showcasing 6 menu items
3.  **Behind the Scenes**: Image slider/carousel
4.  **Contact Section**: Contact information with map visualization
5.  **Footer**: Newsletter signup and copyright

## File Structure

```noodl-website/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All CSS styles with media queries
├── js/
│   └── script.js           # JavaScript for navigation & slider
├── images/                 # Image assets folder (empty - add your images here)
└── README.md              # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styles, Flexbox, CSS Grid, animations
- **JavaScript (ES6)**: DOM manipulation, event handling
- **jQuery**: Required for Slick Slider
- **Slick Slider**: Responsive carousel plugin
- **Google Fonts**: Sora and Inter font families

## External Dependencies

All dependencies are loaded via CDN (no installation required):

- jQuery 3.6.0
- Slick Slider 1.8.1 (CSS & JS)
- Google Fonts (Sora & Inter)

## Responsive Breakpoints

### Mobile (320px - 767px)

- 4-column grid system
- 16px gutters
- Hamburger navigation (slide-in from right)
- Single column layout for most content
- Slider shows 1 slide at a time

### Tablet (768px - 1279px)

- 12-column grid system
- 16px gutters
- Hamburger navigation maintained
- Two-column layout for bowl cards
- Slider shows 2 slides at a time

### Desktop (1280px+)

- 12-column grid system
- 20px gutters
- Horizontal navigation menu
- Three-column layout for bowl cards
- Slider shows 4 slides at a time

## Key JavaScript Features

1.  **Mobile Navigation Toggle**: Hamburger menu with smooth animation
2.  **Smooth Scrolling**: Anchor links scroll smoothly to sections
3.  **Slick Slider**: Auto-playing responsive carousel
4.  **Scroll Animations**: Fade-in effects for bowl cards
5.  **Active Link Highlighting**: Navigation updates based on scroll position
6.  **Form Validation**: Newsletter email validation

## Browser Compatibility

Tested and compatible with:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## How to Run

1.  Extract the ZIP file
2.  Open index.html in a web browser
3.  No server or build process required - all dependencies load from CDN

**Note**: For best results, view on an actual device or use browser developer tools to test responsive breakpoints.

## Design Decisions

### Color Psychology

- **Pink (#ff005c)**: Vibrant and energetic, reflects Neo-Tokyo aesthetic
- **Dark backgrounds**: Creates contrast and modern feel
- **Light gray**: Reduces eye strain while maintaining readability

### Layout Strategy

- **Mobile-first approach**: Styles built for small screens first
- **Progressive enhancement**: Features added as screen size increases
- **Grid-based layouts**: Ensures consistent spacing and alignment

### Navigation Pattern

- **Slide-in menu**: Common mobile pattern, saves screen space
- **Persistent navigation**: Sticky nav allows easy access to all sections
- **Desktop horizontal nav**: Takes advantage of wider screens

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios
- Responsive touch targets (min 44x44px)

## Future Enhancements

- Add actual restaurant images
- Implement online ordering system
- Add Google Maps integration
- Create menu filtering by dietary restrictions
- Add customer reviews section
- Implement reservation system

## Credits

- **Design Inspiration**: Neo-Tokyo aesthetic and modern Japanese cuisine
- **Icons & Graphics**: Custom SVG logo
- **Plugin**: Slick Slider by Ken Wheeler
- **Fonts**: Google Fonts (Sora & Inter)

## License

This project is created for educational purposes as part of a web development course.

**Last Updated**: December 11, 2025
