# Food Delivery PWA

A pixel-perfect responsive Progressive Web App (PWA) for food delivery built with Bootstrap 5, matching the provided screenshot design exactly.

## 🚀 Features

- **Pixel-Perfect Design**: Exact match to the provided screenshot
- **Responsive Layout**: Mobile-first approach with Bootstrap 5
- **PWA Support**: Installable app with offline capabilities
- **Banner Carousel**: Touch and keyboard navigation support
- **Food Categories**: 8 categories with colorful icons
- **Featured Food Items**: With ratings, pricing, and heart favorites
- **Service Worker**: Advanced caching strategies for optimal performance
- **Accessibility**: ARIA labels, SEO meta tags, lazy loading

## 📱 Screenshot Implementation

The app perfectly matches the provided screenshot with:

### Header Section
- "Deliver to" with "Select Your Location" dropdown
- Search, notification, and cart icons on the right
- Orange accent color (#FF6B35) for location arrow

### Banner Carousel
- Orange gradient background matching screenshot
- "ICE CREAM DAY" badge
- "GET YOUR SWEET ICE CREAM" title
- "40% OFF" prominent display
- Carousel indicators (3 dots)
- Touch swipe and keyboard navigation

### Search Bar
- Magnifying glass icon on the left
- "Search" placeholder text
- Filter/settings icon on the right
- Rounded design with light background

### Food Categories Grid
- 8 categories in 2 rows of 4
- **Row 1**: Burger, Taco, Burrito, Drink
- **Row 2**: Sandwich, Pasta, Ice Cream, More
- Colorful circular icons
- Clean typography

### Food Items
- Two food cards side by side
- **Chicken Burger**: €6.00 (was €10.00), 4.9 rating
- **Beef Burger**: €10.00 (was €12.00), 4.9 rating
- Heart favorite icons in top-right
- Star ratings with yellow stars
- Strikethrough original prices

### Bottom Navigation
- 5 navigation items
- **Food** (active with orange background)
- **Orders**, **Cart**, **Favorites**, **Profile**
- Fixed bottom positioning

## 🛠️ Installation

### Quick Start

1. **Download/Clone the project**
   ```bash
   git clone <repository-url>
   cd food-delivery-pwa
   ```

2. **Serve the files**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server -p 8000
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## 🔧 File Structure

```
webviewapp/
├── index.html              # Main application (matches screenshot exactly)
├── manifest.json           # PWA manifest
├── service-worker.js       # Service worker for caching
├── offline.html            # Offline fallback page
├── assets/
│   ├── css/vendors/        # Bootstrap and Iconsax CSS
│   ├── js/                 # JavaScript files
│   └── images/             # Images and icons
└── README.md               # This file
```

## 🎨 Design Specifications

### Colors
- **Primary Orange**: #FF9D5C (banner, active states)
- **Secondary Orange**: #FF6B35 (prices, arrows, active nav)
- **Background**: #f8f9fa (light gray)
- **Text**: #333 (dark gray)
- **Muted Text**: #666, #999

### Typography
- **Font**: DM Sans (Google Fonts)
- **Header**: 14px, 600 weight
- **Categories**: 12px, 500 weight
- **Food Names**: 14px, 600 weight
- **Prices**: 14px, 700 weight (orange)

### Layout
- **Mobile**: 375px width (primary)
- **Tablet**: 768px+ (responsive grid)
- **Desktop**: 1024px+ (expanded grid)

## 🚀 PWA Features

### Service Worker
- Cache-first strategy for static assets
- Network-first with cache fallback for API calls
- Offline page fallback
- Background sync for offline actions

### Manifest
- App name: "Food Delivery App"
- Theme color: #FF9D5C
- Standalone display mode
- Multiple icon sizes

### Offline Support
- Cached banner carousel
- Offline page with retry functionality
- Background sync for user actions

## 🧪 Testing

### PWA Testing
1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Select "Progressive Web App"
4. Generate report
5. Target score: 90+

### Responsive Testing
- **Mobile**: 375px width
- **Tablet**: 768px width
- **Desktop**: 1024px+ width

### Offline Testing
1. Open DevTools → Network tab
2. Check "Offline" checkbox
3. Refresh page
4. Verify offline functionality

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select source branch
4. Enable HTTPS

### Netlify
1. Connect GitHub repository
2. Set build command: `echo "No build needed"`
3. Set publish directory: `webviewapp/`
4. Deploy

### Vercel
1. Import GitHub repository
2. Set framework: "Other"
3. Set output directory: `webviewapp/`

## 🔧 Customization

### Colors
Update CSS variables in the `<style>` section:
```css
:root {
  --primary-color: #FF9D5C;
  --secondary-color: #FF6B35;
  --background-color: #f8f9fa;
}
```

### Content
- **Banner text**: Edit carousel slides in HTML
- **Food items**: Update food cards with new items
- **Categories**: Modify category grid as needed

### Functionality
- **Search**: Implement in JavaScript section
- **Favorites**: Heart button functionality included
- **Cart**: Add to cart logic in JavaScript

## 📱 Browser Support

### Supported Browsers
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### PWA Features
- Service Worker: Chrome 40+, Firefox 44+, Safari 11.1+
- Web App Manifest: Chrome 38+, Firefox 41+, Safari 11.3+
- Push Notifications: Chrome 42+, Firefox 44+, Safari 16+

## 🐛 Troubleshooting

### Common Issues

1. **Service Worker not registering**
   - Ensure HTTPS (required for PWA)
   - Check browser console for errors
   - Verify service-worker.js path

2. **Images not loading**
   - Check Unsplash CDN URLs
   - Verify lazy loading implementation
   - Check network connectivity

3. **Banner carousel not working**
   - Ensure Bootstrap 5 is loaded
   - Check for JavaScript errors
   - Verify touch events

### Debug Mode
Enable debug logging:
```javascript
localStorage.setItem('debug', 'true');
```

## 📈 Performance

### Optimizations Implemented
- Lazy loading for images
- Service worker caching
- Minified CSS/JS via CDN
- Optimized images (Unsplash CDN)
- Efficient carousel implementation

### Additional Optimizations
- Enable gzip compression
- Use CDN for all assets
- Implement image optimization
- Add preloading for critical resources

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the troubleshooting section
- Review browser console for errors

---

**Built with ❤️ to match the provided screenshot exactly using Bootstrap 5 and modern web technologies**