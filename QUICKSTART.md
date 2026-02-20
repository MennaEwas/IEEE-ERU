# Quick Start Guide

## First Time Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## Adding Content

### Committees
Edit `content/committees.json`:
```json
{
  "id": "committee-1",
  "name": "Technical Committee",
  "description": "Handles technical workshops and events",
  "icon": "⚙️",
  "link": "/committees/technical"
}
```

### Events
Edit `content/events.json`:
```json
{
  "id": "event-1",
  "title": "Workshop Title",
  "date": "2024-01-15",
  "time": "2:00 PM",
  "location": "Room 101",
  "description": "Event description",
  "image": "assets/events/workshop.jpg",
  "registrationLink": "https://..."
}
```

### Officers
1. Add officer images to `assets/officers/` (e.g., `officer-1.jpg`)
2. Edit `content/officers.json` with officer details

### Partners
1. Add partner logos to `assets/partners/` (e.g., `partner-1.png`)
2. Edit `content/partners.json` with partner information

## Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'ieee-blue': '#YOUR_COLOR',
}
```

### Modify Layout
- Components: `components/`
- Styles: `app/globals.css`
- Pages: `app/`

## Building for Production

```bash
npm run build
```

Output will be in `out/` directory, ready for deployment.
