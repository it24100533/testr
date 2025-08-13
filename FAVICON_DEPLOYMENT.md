# Favicon Deployment Guide

## Problem
When deploying a Next.js static export (`output: 'export'`), favicons often get cached by browsers and CDNs, making it difficult to update them.

## Solution Implemented

### 1. Cache Busting with Query Parameters
All favicon references now include `?v=2` (or incrementing version numbers) to force browsers to fetch the new version.

### 2. Consistent Favicon Configuration
- Removed duplicate favicon from `src/app/favicon.ico`
- Updated all favicon references in `src/app/layout.tsx`
- Added cache busting to both metadata and HTML head tags

### 3. Deployment Script
Use the `deploy-favicon.sh` script before each deployment:

```bash
./deploy-favicon.sh
```

This script automatically increments the version number to ensure fresh favicon loading.

## Files Modified

- `src/app/layout.tsx` - Added cache busting to all favicon references
- `src/app/favicon.ico` - Removed (duplicate)
- `public/favicon-cache-bust.html` - Helper page for testing
- `deploy-favicon.sh` - Automated version incrementing script

## Manual Cache Busting

If you need to manually update the version:

1. Edit `src/app/layout.tsx`
2. Find all instances of `?v=2` (or current version)
3. Increment to `?v=3`, `?v=4`, etc.

## Testing After Deployment

1. **Hard refresh** your browser (Ctrl+F5 or Cmd+Shift+R)
2. **Clear browser cache** for your domain
3. **Test in incognito/private window**
4. **Check different browsers** (Chrome, Firefox, Safari)

## Why This Happens

- **Browser caching**: Browsers aggressively cache favicons
- **CDN caching**: Services like Vercel, Netlify cache static assets
- **Static export**: `output: 'export'` doesn't support dynamic headers
- **Multiple favicon locations**: Can cause conflicts

## Alternative Solutions

If cache busting doesn't work:

1. **Rename favicon files** (e.g., `favicon-v2.ico`)
2. **Use different file names** for different versions
3. **Implement service worker** for cache control
4. **Contact your hosting provider** about cache headers
