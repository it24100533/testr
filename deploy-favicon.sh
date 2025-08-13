#!/bin/bash

# Favicon Cache Busting Script
# Run this before deploying to ensure favicons are updated

echo "🔄 Updating favicon cache busting..."

# Update the version number in layout.tsx
CURRENT_VERSION=$(grep -o 'v=[0-9]*' src/app/layout.tsx | head -1 | cut -d'=' -f2)
NEW_VERSION=$((CURRENT_VERSION + 1))

echo "📝 Updating favicon version from v$CURRENT_VERSION to v$NEW_VERSION"

# Replace all instances of the current version with the new version
sed -i '' "s/v=$CURRENT_VERSION/v=$NEW_VERSION/g" src/app/layout.tsx

echo "✅ Favicon version updated to v$NEW_VERSION"
echo "🚀 Ready to deploy! The new favicon should now load without caching issues."
echo ""
echo "💡 If you still see the old favicon after deployment:"
echo "   1. Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)"
echo "   2. Clear browser cache for your domain"
echo "   3. Try opening in an incognito/private window"
