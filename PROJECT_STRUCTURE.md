# Project Structure

Complete overview of the IEEE Student Organization website structure.

## Directory Structure

```
IEEE/
├── app/                          # Next.js App Router
│   ├── about/                   # About page
│   │   └── page.tsx
│   ├── committees/              # Committees listing page
│   │   └── page.tsx
│   ├── contact/                 # Contact page
│   │   └── page.tsx
│   ├── events/                  # Events listing page
│   │   └── page.tsx
│   ├── join/                    # Join Us page
│   │   └── page.tsx
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── not-found.tsx            # 404 page
│   ├── robots.ts                # Robots.txt generator
│   └── sitemap.ts               # Sitemap generator
│
├── components/                   # React components
│   ├── AboutPreview.tsx         # Homepage about preview
│   ├── Committees.tsx           # Committees section
│   ├── Events.tsx               # Events section
│   ├── FeaturesSection.tsx      # Features section
│   ├── Footer.tsx               # Site footer
│   ├── Hero.tsx                 # Hero section
│   ├── JoinUs.tsx               # Join form section
│   ├── Leadership.tsx           # Officers carousel
│   ├── Navbar.tsx               # Navigation bar
│   ├── PageHeader.tsx           # Reusable page header
│   └── Partners.tsx             # Partners section
│
├── content/                      # Content files (CMS-ready)
│   ├── about.json               # About page content
│   ├── committees.json          # Committees data
│   ├── contact.json             # Contact information
│   ├── events.json              # Events data
│   ├── home.json                # Homepage content
│   ├── officers.json            # Officers/leadership data
│   ├── partners.json            # Partners data
│   ├── about.md                 # Extended about (optional)
│   └── README.md                # Content structure guide
│
├── assets/                       # Static assets
│   ├── logos/                   # Organization logos
│   ├── officers/                # Officer photos
│   │   └── README.md
│   ├── partners/                # Partner logos
│   │   └── README.md
│   └── products/                # Product images
│
├── lib/                          # Utility functions
│   └── content.ts               # Content loading utilities
│
├── public/                       # Public static files
│
├── .gitignore                    # Git ignore rules
├── .nvmrc                        # Node version
├── DEPLOYMENT.md                 # Deployment guide
├── netlify.toml                  # Netlify configuration
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies
├── postcss.config.js             # PostCSS configuration
├── PROJECT_STRUCTURE.md          # This file
├── QUICKSTART.md                 # Quick start guide
├── README.md                     # Main README
├── tailwind.config.js            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## Pages

### Homepage (`/`)
- Hero section with CTAs
- About preview
- Features section
- Committees preview
- Leadership carousel
- Upcoming events preview
- Partners grid
- Join Us form

### About (`/about`)
- Mission statement
- Vision statement
- Organization history
- Core values
- Statistics section

### Committees (`/committees`)
- Full committees listing
- Committee cards with descriptions
- Call-to-action to join

### Events (`/events`)
- All events listing
- Filter by: All / Upcoming / Past
- Event cards with details
- Registration links

### Join Us (`/join`)
- Membership application form
- Netlify Forms ready

### Contact (`/contact`)
- Contact information
- Office location and hours
- Social media links
- Contact form (Netlify Forms ready)

### 404 Page
- Custom not found page
- Link back to homepage

## Components

All components are:
- **Reusable**: Can be used across multiple pages
- **Content-driven**: Load data from JSON files
- **Responsive**: Mobile-first design
- **Type-safe**: Full TypeScript support

## Content Management

### Current Structure
- All content in JSON/Markdown files
- Easy to edit directly
- Version controlled

### Future CMS Integration
- Structure ready for headless CMS
- API calls can replace JSON imports
- No component restructuring needed

## Styling

- **Framework**: Tailwind CSS
- **Brand Colors**: IEEE Blue (#0E5C9A)
- **Typography**: System fonts (academic style)
- **Design**: Minimalistic, professional

## Deployment

- **Platform**: Netlify
- **Build**: Static export
- **Forms**: Netlify Forms integration
- **Performance**: Optimized for static hosting

## Key Features

✅ Fully static site (no server required)
✅ Mobile-first responsive design
✅ CMS-ready content structure
✅ Netlify Forms integration
✅ SEO optimized (sitemap, robots.txt)
✅ TypeScript for type safety
✅ Reusable component architecture
✅ Professional IEEE branding
