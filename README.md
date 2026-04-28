# RevGrow

> Growth Strategy Meets Execution

RevGrow is a professional go-to-market advisory website built with modern web technologies. We bridge the gap between strategic vision and operational excellence to drive sustainable growth for businesses.

## 🚀 Features

- **Modern Design**: Clean, professional UI with responsive design
- **Interactive Components**: Team member modals, mobile navigation, and smooth scrolling
- **Performance Optimized**: Built with Vite, optimized for fast loading
- **Mobile-First**: Fully responsive design optimized for all devices
- **SEO Ready**: Proper meta tags and structure for search engines

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Vite
- **Icons**: Phosphor React
- **Deployment**: Netlify-ready configuration

## 📁 Project Structure

```
rev-grow/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Services.tsx    # Services grid
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── services/       # Individual service pages
│   │   ├── About.tsx       # About page
│   │   ├── Contact.tsx     # Contact page
│   │   └── Team.tsx        # Team page
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Utility functions
├── public/
│   └── team/               # Team member images
└── netlify.toml            # Netlify deployment config
```

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment

This project is configured for Netlify deployment. Simply:

1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the build settings from `netlify.toml`
3. Your site will be deployed automatically on every push to main

## 🎨 Customization

### Colors & Branding

The design system uses CSS custom properties defined in `src/index.css`. Update the color scheme by modifying the CSS variables:

```css
:root {
  --primary: 217 91% 60%;
  --primary-foreground: 0 0% 98%;
  /* ... other colors */
}
```

### Content

- **Team Members**: Update team data in `src/pages/Team.tsx`
- **Services**: Modify service information in `src/components/Services.tsx`
- **Company Info**: Update About page content in `src/pages/About.tsx`

## 📱 Mobile Optimization

The site is fully optimized for mobile devices with:

- Touch-friendly button sizes (minimum 44px)
- Responsive typography scaling
- Mobile-first navigation menu
- Optimized modal experiences
- Progressive image loading

## 🔧 Configuration Files

- `vite.config.ts` - Vite build configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `netlify.toml` - Netlify deployment settings

## 📄 License

This project is proprietary software owned by RevGrow.

---

**Built with ❤️ for growth-focused businesses**