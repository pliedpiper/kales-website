# Kace Barthlome Portfolio Website - Implementation Plan

## Project Overview
A modern minimalist portfolio website for Kace Barthlome, a licensed cosmetologist and barber in Colorado. The site will showcase their haircut work, provide information about services, and offer contact methods. Deployed on Netlify.

---

## Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Next.js | Excellent image optimization, SEO capabilities, React ecosystem |
| Deployment | Netlify | User requirement, easy deploys, free tier works well |
| Styling | Tailwind CSS | Rapid development, utility-first, pairs well with minimalist design |
| Animations | Framer Motion | Subtle fade-ins on scroll, lightweight |
| Lightbox | yet-another-react-lightbox | Modern, accessible, customizable |
| CMS | None (static) | Images hardcoded, developer handles updates |

---

## Design Specifications

### Color Palette
- **Background**: Clean white (#FFFFFF) / Off-white (#FAFAFA)
- **Primary text**: Charcoal (#1A1A1A)
- **Secondary text**: Gray (#6B7280)
- **Accent**: Purple tones (to be refined with frontend-design skill)
- **Subtle borders**: Light gray (#E5E7EB)

### Typography
- **Font family**: Sans-serif only (likely Inter or DM Sans)
- **Headings**: Bold weight, larger sizes
- **Body**: Regular weight, readable sizes
- **All text**: Clean, modern, no serifs

### Visual Style
- Modern minimalist aesthetic
- Generous whitespace
- Let photography be the hero
- Purple accent color for interactive elements (links, buttons, hover states)

---

## Site Architecture

### Single Page Layout (scroll order)
```
1. Hero Section
2. Gallery Section
3. About Section
4. Services Section
5. Contact Section
6. Footer
```

### Navigation
- Sticky header that remains visible on scroll
- Links to each section via anchor scrolling
- Clean, minimal design

---

## Section Specifications

### 1. Hero Section
- **Content**: Name "Kace Barthlome" + tagline + scroll CTA
- **Style**: Clean text focus, centered, full viewport height
- **Tagline suggestion**: "Licensed Stylist & Barber" or similar
- **CTA**: Subtle scroll indicator or "View My Work" button

### 2. Gallery Section
- **Layout**: Responsive grid (masonry-style or uniform based on final design)
- **Images**: 7 portfolio images from `/pictures/` folder
- **Interaction**: Click opens lightbox modal with navigation between images
- **Loading**: Lazy load for performance
- **Descriptions**: Style name only displayed in lightbox

#### Image Catalog & Descriptions
| Filename | Style Description |
|----------|-------------------|
| 0ACF3036-D45C-423B-9560-83271E42FE20.png | Textured Fringe with Mid Fade |
| 8E9D2047-9F71-480A-9C57-F1A83F981435.png | Classic Side Part with High Fade |
| 926CD6F2-18E3-440A-9EED-81456E80EC44.png | Short Textured Crop with Taper |
| A3965A3E-5CDE-4897-B25F-C71877897D95.png | *TBD - image too large to preview* |
| AB1521B6-5DBC-47FE-B9CE-C03AE5B8CD9F.png | Teal Color with Design Shave |
| B129B2DA-EE69-4569-816F-7A1945C1A88A.png | Curly Textured Top with Low Fade |
| DF3B8755-E6C5-4CC5-A82D-B6AE316E66E6.png | Clean Buzz Cut with Beard Trim |

### 3. About Section
- **Content**: Bio from spec.md (licensed since 2021, Sports Clips awards, Colorado license)
- **Photo**: Placeholder spot for headshot (to be added later)
- **Tone**: Professional but approachable

### 4. Services Section
- **Layout**: Simple list format (not cards or accordion)
- **Categories**:
  - Trending Haircuts (Euro hawks, Low taper fades with textured fringe, Custom consultations)
  - Waxing & Hair Coloring
  - Product Certifications (Gibs, Sexy Hair, Paul Mitchell Tea Tree, Mitch, STMT)

### 5. Contact Section
- **Format**: Direct links only (no form)
- **Links** (all placeholder):
  - Instagram icon + link
  - Phone icon + click-to-call
  - Email icon + mailto link
- **Style**: Centered, clean icons

### 6. Footer
- **Content**: Minimal - social/contact icons, copyright only
- **No license info** in footer (kept minimal per user preference)

---

## Technical Implementation Details

### Image Handling
- Move images from `/pictures/` to `/public/gallery/` with cleaner names
- Use Next.js `<Image>` component for automatic optimization
- Implement lazy loading with native loading="lazy"
- Generate responsive srcsets for different viewport sizes

### SEO (Basic)
- Semantic HTML throughout
- Proper heading hierarchy (h1 > h2 > h3)
- Meta title: "Kace Barthlome | Hair Stylist"
- Meta description summarizing services and location
- Alt text on all images (style names)
- Open Graph tags for social sharing

### Animations
- Framer Motion for scroll-triggered fade-ins
- Subtle opacity + slight Y translation on section entry
- Keep animations fast (300-400ms) and non-blocking

### 404 Handling
- Simple redirect to home page via `next.config.js` or Netlify `_redirects`

### Favicon
- Scissors icon in purple accent color
- Generate multiple sizes for different devices

---

## File Structure (Proposed)
```
kales-website/
├── public/
│   ├── gallery/
│   │   ├── textured-fringe-mid-fade.png
│   │   ├── classic-side-part-high-fade.png
│   │   ├── short-textured-crop-taper.png
│   │   ├── teal-color-design-shave.png
│   │   ├── curly-textured-low-fade.png
│   │   ├── clean-buzz-beard-trim.png
│   │   └── [seventh image].png
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Gallery.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── galleryData.ts
├── tailwind.config.js
├── next.config.js
├── package.json
└── netlify.toml
```

---

## Implementation Steps

### Phase 1: Project Setup
1. Initialize Next.js project with TypeScript and Tailwind CSS
2. Configure Tailwind with custom purple accent colors
3. Set up project structure (folders, base files)
4. Create netlify.toml for deployment configuration
5. Move and rename gallery images to `/public/gallery/`

### Phase 2: Core Components
6. Build Header component with sticky navigation
7. Build Hero section with name, tagline, and CTA
8. Build Gallery section with responsive grid layout
9. Integrate lightbox for image viewing with descriptions
10. Build About section with placeholder for future headshot
11. Build Services section as simple list
12. Build Contact section with placeholder links (Instagram, phone, email)
13. Build minimal Footer

### Phase 3: Polish & Optimization
14. Add scroll-triggered fade-in animations with Framer Motion
15. Implement smooth scroll navigation
16. Add favicon (scissors icon)
17. Configure 404 redirect to home
18. Add meta tags and basic SEO
19. Test responsive design across breakpoints
20. Optimize images and run Lighthouse audit

### Phase 4: Deployment
21. Test build locally
22. Deploy to Netlify
23. Verify all functionality on live site

---

## Placeholder Values to Replace Later
- Instagram URL: `https://instagram.com/placeholder`
- Phone number: `tel:+1234567890`
- Email address: `mailto:placeholder@email.com`
- Headshot image: Placeholder div or generic avatar

---

## Dependencies
```json
{
  "next": "^14.x",
  "react": "^18.x",
  "tailwindcss": "^3.x",
  "framer-motion": "^10.x",
  "yet-another-react-lightbox": "^3.x",
  "@types/node": "^20.x",
  "@types/react": "^18.x",
  "typescript": "^5.x"
}
```

---

## Notes
- Will use the `frontend-design` skill when building components to ensure high design quality with the purple accent theme
- All images are PNG format; consider converting to WebP during build for better performance
- Single-page architecture means no routing complexity
- No form backend needed since contact is direct links only
