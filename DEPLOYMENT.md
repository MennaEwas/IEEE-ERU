# Deployment Guide

## Netlify Deployment

### Option 1: Automatic Deployment (Recommended)

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com)
   - Click "New site from Git"
   - Connect your repository
   - Netlify will auto-detect Next.js settings
   - Click "Deploy site"

3. **Configure Build Settings** (if needed)
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: `18` (set in `.nvmrc`)

### Option 2: Manual Deployment

1. **Build the site**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to Netlify**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod --dir=out
   ```

## Netlify Forms Setup

The Join Us form is already configured for Netlify Forms:

1. Forms are automatically detected when deployed
2. Form submissions appear in Netlify dashboard under "Forms"
3. Configure email notifications in Netlify dashboard:
   - Go to Site settings → Forms
   - Set up form notifications

## Environment Variables

No environment variables are required for basic deployment. If you add a CMS later, you may need to add API keys in Netlify dashboard under Site settings → Environment variables.

## Custom Domain

1. Go to Site settings → Domain management
2. Add your custom domain
3. Follow DNS configuration instructions

## Performance Optimization

- Images are optimized automatically by Next.js
- Static export ensures fast loading times
- Consider enabling Netlify's CDN caching in site settings
