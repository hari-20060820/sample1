# STRIDE//LAB - Premium Running Shoe E-Commerce Store

A modern, full-stack e-commerce platform for premium running shoes featuring mergeable wishlists, advanced product filtering, and a stunning 3D design aesthetic.

## 🎯 Features

### Core E-Commerce Features
- ✅ **Product Catalog**: 10 premium running shoes with 3 high-quality images each
- ✅ **Product Details**: Detailed descriptions, ratings, reviews, and stock information
- ✅ **Advanced Filtering**: Filter by category, price range, and rating
- ✅ **Search & Sort**: Full-text search with multiple sorting options
- ✅ **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices

### Wishlist Features
- ✅ **Wishlist Management**: Add/remove shoes from wishlist with persistent storage
- ✅ **Mergeable Wishlists**: Combine multiple wishlists using unique merge codes
- ✅ **Visual Feedback**: Real-time wishlist status with glowing effects
- ✅ **Quick Access**: Dedicated wishlist page with full product details

### Visual Design
- ✅ **Dark/Red Theme**: Premium dark background with vibrant red accents
- ✅ **3D Effects**: Color-shifting hero section with scroll-triggered animations
- ✅ **Smooth Animations**: Professional transitions and hover effects
- ✅ **Modern UI**: Clean, intuitive interface with consistent styling

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **HTTP Client**: Axios
- **Type Safety**: TypeScript

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Environment**: TypeScript

### Deployment
- **Frontend**: GitHub Pages / Vercel
- **Backend**: MongoDB Atlas (Cloud Database)

## 📦 Project Structure

```
stride-lab/
├── client/                 # Next.js/React frontend
│   ├── src/
│   │   ├── app/           # Pages and layouts
│   │   ├── components/    # React components
│   │   ├── lib/           # Utilities and hooks
│   │   └── styles/        # CSS files
│   ├── public/            # Static assets
│   └── package.json
├── server/                # Express.js backend API
│   ├── src/
│   │   ├── models/        # MongoDB schemas
│   │   ├── routes/        # API endpoints
│   │   └── seed.ts        # Database seeding script
│   └── package.json
├── shared/                # Shared types and utilities
└── package.json           # Root workspace config
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/hari-20060820/sample1.git
cd sample1
```

2. **Install dependencies**
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..

# Install server dependencies
cd server
npm install
cd ..
```

3. **Environment Setup**

Create `.env` files:

**server/.env**
```
MONGODB_URI=mongodb://127.0.0.1:27017/ecommerce
PORT=4000
NODE_ENV=development
```

**client/.env.local**
```
VITE_API_URL=http://localhost:4000
```

4. **Seed the Database**
```bash
cd server
npm run seed
```

5. **Run Development Servers**

In separate terminals:

**Terminal 1 - Backend API**
```bash
cd server
npm run dev
# API runs on http://localhost:4000
```

**Terminal 2 - Frontend**
```bash
cd client
npm run dev
# Frontend runs on http://localhost:3001
```

6. **Open in Browser**
```
http://localhost:3001
```

## 📊 Database Schema

### Products Collection
```typescript
{
  _id: ObjectId,
  name: string,
  slug: string,
  description: string,
  priceCents: number,
  currency: string,
  images: string[],
  category: string,
  tags: string[],
  rating: number,
  reviewCount: number,
  inStock: boolean,
  stockQty: number,
  createdAt: Date
}
```

### Wishlists Collection
```typescript
{
  _id: ObjectId,
  items: string[],
  createdAt: Date,
  expiresAt: Date,
  mergeCode: string
}
```

## 🎨 Design System

### Color Palette
```
Primary Dark:    #000000
Primary Red:     #DC2626
Text Light:      #FFFFFF
Text Secondary:  #A1A1A1
Background:      #0A0A0A
```

### Components
- **Header**: Navigation with branding and links
- **ProductCard**: Shoe card with image, price, and wishlist button
- **ProductDetail**: Full product view with image gallery
- **WishlistHeart**: Toggleable wishlist button with visual feedback
- **FilterPanel**: Category and price range filters
- **SearchBar**: Full-text search with icon
- **SortDropdown**: Multiple sorting options

## 🔧 API Endpoints

### Products
```
GET  /api/products              # Get all products
GET  /api/products/:id          # Get product by ID
GET  /api/products/slug/:slug   # Get product by slug
```

### Wishlists
```
POST   /api/wishlists           # Create new wishlist
GET    /api/wishlists/:id       # Get wishlist by ID
PATCH  /api/wishlists/:id       # Update wishlist items
```

## 📱 Responsive Breakpoints

```
Mobile:   < 768px
Tablet:   768px - 1024px
Desktop:  > 1024px
```

## 🎯 Product Categories

- **Running**: Speed-focused running shoes
- **Training**: Multi-sport training shoes
- **Track**: Minimal, lightweight track shoes

## ⭐ Featured Products

1. **Velocity One** - $134.00 - Fast city miles
2. **Aero Form** - $118.00 - Lightweight and aerodynamic
3. **Sprint Grid** - $126.00 - Advanced traction
4. **Drift Runner** - $109.00 - Distance comfort
5. **Pulse 03** - $142.00 - Cushioning and energy
6. **Cloud Court** - $98.00 - Multi-sport versatile
7. **Night Shift** - $137.00 - Night running with reflective accents
8. **Signal Red** - $129.00 - Bold competitive design
9. **Trackline 9** - $115.00 - Minimal track shoe
10. **Altitude Max** - $149.00 - Premium high-altitude training

## 🎓 Learning Resources

### Wishlist Feature
- Unique merge codes for combining wishlists
- Persistent storage using browser localStorage
- Real-time updates across components

### 3D Effects
- Hue-rotation color shifting on scroll
- Mouse tracking for perspective transforms
- Drop shadow effects for depth

### API Integration
- Fetch with error handling and fallbacks
- Auto-retry on failure
- Demo data as offline fallback

## 🔒 Security Features

- Input validation on all forms
- XSS protection with React escaping
- CSRF protection ready
- MongoDB injection prevention with Mongoose

## 📈 Performance Optimizations

- Image lazy loading
- Component code splitting
- Debounced search and scroll handlers
- CSS transitions at 60fps
- Optimized bundle size

## 🚀 Deployment

### GitHub Pages (Frontend Only)
```bash
# Build for production
cd client
npm run build

# Deploy to GitHub Pages
# Push to gh-pages branch
```

### Vercel (Full Stack)
```bash
# Deploy frontend
vercel --prod

# Deploy backend (alternative: Heroku, Railway, Render)
```

### MongoDB Atlas
- Use cloud database for production
- Set connection string in environment variables
- Enable IP whitelist for security

## 🐛 Troubleshooting

### Images Not Showing
- Verify Pexels image URLs are accessible
- Check browser console for 404 errors
- Clear browser cache and reload

### API Connection Failed
- Ensure backend server is running on port 4000
- Check MongoDB connection string in .env
- Verify firewall allows localhost connections

### Wishlist Not Persisting
- Check browser localStorage is enabled
- Clear browser storage and try again
- Check browser console for errors

## 📝 Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb://user:pass@host:port/dbname
PORT=4000
NODE_ENV=production
```

### Frontend (.env.local)
```
VITE_API_URL=https://api.example.com
VITE_ENV=production
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 👨‍💻 Author

**Hari** - [@hari-20060820](https://github.com/hari-20060820)

## 🙏 Acknowledgments

- Pexels for high-quality running shoe photography
- React and Next.js communities
- Tailwind CSS for utility-first styling
- MongoDB for flexible database solutions

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact: [Your Email]
- Check documentation in `/docs` folder

---

**Made with ❤️ by STRIDE//LAB Team**

## 🎉 Quick Links

- [Live Demo](#) - Coming soon
- [Documentation](#) - Coming soon
- [GitHub Issues](https://github.com/hari-20060820/sample1/issues)
- [GitHub Discussions](https://github.com/hari-20060820/sample1/discussions)

---

**Last Updated**: 2026-07-15
**Version**: 1.0.0
#   s a m p l e 1  
 #   s a m p l e 1  
 