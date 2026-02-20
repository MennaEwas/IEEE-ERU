# IEEE Student Organization Website

A professional static website for an IEEE Student Organization, built with Next.js and optimized for Netlify deployment.

## Features

- **Static Site Generation**: Fully static export compatible with Netlify
- **Mobile-First Design**: Responsive layout optimized for all devices
- **CMS-Ready Structure**: Content organized in JSON/Markdown files for easy CMS integration
- **IEEE Branding**: Professional academic styling with IEEE blue (#0E5C9A)
- **Component-Based Architecture**: Reusable, maintainable components

## Tech Stack

- **Framework**: Next.js 14 (Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 18+ (see `.nvmrc`)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

The static site will be generated in the `out` directory.

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── AboutPreview.tsx
│   ├── Committees.tsx
│   ├── Leadership.tsx
│   ├── Events.tsx
│   ├── Partners.tsx
│   ├── JoinUs.tsx
│   └── Footer.tsx
├── content/                # Content files (CMS-ready)
│   ├── committees.json
│   ├── events.json
│   ├── officers.json
│   ├── partners.json
│   └── about.md
├── assets/                 # Static assets
│   ├── logos/             # Organization logos
│   ├── officers/          # Officer headshots
│   └── partners/          # Partner logos
└── public/                 # Public static files
```

## Content Management

All content is stored in structured JSON and Markdown files in the `content/` directory:

- **committees.json**: Committee information
- **events.json**: Event listings
- **officers.json**: Leadership team data
- **partners.json**: Partner organizations
- **about.md**: About page content

These files can be easily edited directly or integrated with a headless CMS like:
- Netlify CMS
- Contentful
- Sanity
- Strapi

## Netlify Deployment

### Automatic Deployment

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Netlify
3. Netlify will automatically detect Next.js and deploy

### Manual Deployment

```bash
npm run build
netlify deploy --prod --dir=out
```

### Netlify Forms

The Join Us form is configured for Netlify Forms. To enable:

1. Ensure the form has `data-netlify="true"` attribute (already configured)
2. Add a hidden input with `name="form-name"` (already configured)
3. Deploy to Netlify - forms will be automatically detected

## Customization

### Brand Colors

Edit `tailwind.config.js` to modify brand colors:

```javascript
colors: {
  'ieee-blue': '#0E5C9A',
  'ieee-blue-dark': '#0A4A7A',
  'ieee-blue-light': '#1A6CB0',
}
```

### Adding Content

1. Edit JSON files in `content/` directory
2. Add images to appropriate `assets/` subdirectories
3. Update image paths in JSON files to match

### Adding Pages

Create new pages in `app/` directory following Next.js App Router conventions.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for IEEE Student Organization use.
