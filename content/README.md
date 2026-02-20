# Content Structure Guide

This directory contains all content files for the IEEE Student Organization website. All content is structured as JSON or Markdown files to enable easy CMS integration in the future.

## File Structure

### `home.json`
Homepage content including:
- Hero section (title, subtitle, CTAs)
- About preview section
- Features list

### `about.json`
About page content including:
- Mission statement
- Vision statement
- Organization history
- Core values
- Statistics

### `committees.json`
Array of committee objects with:
- `id`: Unique identifier
- `name`: Committee name
- `description`: Committee description
- `roleSummary`: Brief summary of the committee's role
- `responsibilities`: Array of responsibility strings (displayed as bullet points)
- `link`: URL to committee detail page (optional)

### `events.json`
Array of event objects with:
- `id`: Unique identifier
- `title`: Event title
- `date`: Event date (ISO format recommended)
- `time`: Event time
- `location`: Event location
- `description`: Event description
- `image`: Path to event image (relative to public/)
- `registrationLink`: URL for event registration

### `officers.json`
Array of officer objects with:
- `id`: Unique identifier
- `name`: Officer name
- `position`: Officer position/title
- `image`: Path to officer photo (relative to public/)
- `bio`: Officer biography
- `email`: Contact email
- `linkedin`: LinkedIn profile URL

### `partners.json`
Array of partner objects with:
- `id`: Unique identifier
- `name`: Partner organization name
- `logo`: Path to partner logo (relative to public/)
- `website`: Partner website URL

### `best-members.json`
Array of best member objects with:
- `id`: Unique identifier
- `name`: Member name
- `achievement`: Member achievement/award
- `image`: Path to member photo (relative to public/)
- `bio`: Member biography
- `email`: Contact email
- `linkedin`: LinkedIn profile URL

### `contact.json`
Contact information including:
- `email`: Primary contact email
- `office`: Office location details
- `hours`: Office hours
- `social`: Social media links

### `about.md`
Markdown file for extended about content (optional, for future use)

## Content Guidelines

1. **Keep content structured**: Use consistent field names across similar content types
2. **Use relative paths**: Image paths should be relative to the `public/` directory
3. **Placeholder content**: All fields should have placeholder values that clearly indicate they need to be filled
4. **Date formats**: Use ISO 8601 format (YYYY-MM-DD) for dates
5. **Empty strings**: Use empty strings `""` for optional fields that don't have content yet

## CMS Integration

When integrating a CMS:
1. Replace direct JSON imports with API calls
2. Update `lib/content.ts` utility functions
3. Consider adding caching for better performance
4. Maintain the same data structure for consistency

## Adding New Content Types

1. Create a new JSON file in this directory
2. Define the TypeScript interface in `lib/content.ts`
3. Create a utility function to load the content
4. Update components to use the new content structure
