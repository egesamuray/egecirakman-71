# Ege Çırakman - Academic Portfolio

A modern, accessible, and SEO-optimized academic website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, minimalist academic design inspired by top conferences (PNAS/NeurIPS style)
- **Accessibility**: WCAG 2.2 AA compliant with keyboard navigation and screen reader support
- **SEO Optimized**: Complete meta tags, structured data (JSON-LD), and sitemap
- **Performance**: Optimized for Lighthouse scores (Performance ≥90, Accessibility ≥95, SEO ≥95)
- **Mobile-First**: Responsive design that works perfectly on all devices
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Contact Form**: Integrated contact form with spam protection
- **PDF CV Viewer**: Embedded CV preview with download option

## 📋 Sections

- **Home**: Hero section with quick links and education info
- **Research**: Overview and interests with faculty-targeted summary
- **Publications**: Reverse-chronological list with status badges and links
- **Experience**: International and national research positions
- **Awards**: Academic achievements and recognition
- **Projects**: Selected project implementations
- **CV**: PDF download and preview
- **Contact**: Contact information and message form

## 🛠 Technology Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Radix UI** components (shadcn/ui)
- **Lucide React** for icons
- **React Router** for navigation
- **TanStack Query** for data management

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Page sections (Hero, Research, etc.)
│   ├── seo/            # SEO components
│   └── ui/             # Reusable UI components (shadcn/ui)
├── data/               # Content data (publications, experience, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── pages/              # Main page components
```

## 🔧 Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📝 Content Management

### Updating Publications

Edit `src/data/content.ts` to add new publications:

```typescript
{
  year: 2025,
  title: "Your Paper Title",
  authors: "**E. Çırakman**, Co-Author Name",
  venue: "Conference/Journal Name",
  status: "published" | "accepted" | "under review" | "preprint",
  teaser: "Brief description of the work and contributions.",
  links: {
    pdf: "link-to-pdf",
    arxiv: "link-to-arxiv",
    code: "link-to-code"
  }
}
```

### Updating Experience

Add new research positions in the `internationalExperience` or `nationalExperience` arrays:

```typescript
{
  org: "Institution Name",
  role: "Your Role",
  dates: "Start Date–End Date",
  bullets: [
    "Achievement or responsibility 1",
    "Achievement or responsibility 2"
  ]
}
```

### Updating Personal Information

Modify the `personalInfo` object in `src/data/content.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  email: "your.email@domain.com",
  tagline: "Your professional tagline",
  // ... other fields
}
```

## 🎨 Design System

The website uses a semantic design system defined in:
- `src/index.css` - CSS custom properties for colors and typography
- `tailwind.config.ts` - Tailwind configuration extending the design system

### Color Palette

- **Primary**: Deep navy for academic professionalism
- **Accent**: Research highlight blue for CTAs and links
- **Success/Warning/Destructive**: Status colors for publications
- **Muted**: Subtle grays for secondary content

### Typography

- Base font size: 16px minimum
- Line height: 1.6 for body text, 1.2 for headings
- Max text width: 65 characters for optimal readability
- Left-aligned text (no full justification)

## 🌐 SEO & Performance

### Meta Tags
- Dynamic title and description per section
- Open Graph and Twitter Card support
- Canonical URLs

### Structured Data
- Person schema for the main page
- ScholarlyArticle schema for each publication
- Proper author attribution and venue information

### Performance Optimizations
- Lazy loading for images
- Font display: swap
- Preconnect to font origins
- Optimized images with proper alt text

## 🚀 Deployment

### Using Lovable (Recommended)

1. Click "Publish" in the Lovable interface
2. Your site will be deployed with a `.lovable.app` domain
3. Connect a custom domain in Project Settings > Domains

### Manual Deployment

The site is a static React application that can be deployed to:
- Vercel: `npm run build` then deploy `dist/` folder
- Netlify: Connect your git repository for automatic deployments
- GitHub Pages: Use GitHub Actions to build and deploy

## 🔗 Custom Domain Setup

1. **In Lovable**: Go to Project Settings > Domains
2. **Add your domain** (e.g., `yourdomain.com`)
3. **Configure DNS** at your domain registrar:
   - A Record: `@` → `185.158.133.1`
   - A Record: `www` → `185.158.133.1`
4. **Wait for propagation** (up to 24-48 hours)
5. **SSL certificate** will be automatically provisioned

### DNS Configuration Example
```
Type: A
Name: @
Value: 185.158.133.1

Type: A  
Name: www
Value: 185.158.133.1
```

## 📊 Analytics & Monitoring

To add analytics:

1. **Google Analytics**: Add tracking ID to the HTML head
2. **Plausible**: Add script tag for privacy-focused analytics  
3. **Umami**: Self-hosted analytics option

## ♿ Accessibility Features

- Skip-to-content link for keyboard users
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- Focus visible styles
- ARIA labels for interactive elements
- Color contrast meets WCAG AA standards
- Keyboard navigation support

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly button sizes (minimum 44px)
- Optimized typography scales
- Collapsible navigation menu
- Fast loading on mobile networks

## 🔧 Customization

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Add navigation item to `Header.tsx`
3. Import and add to the main page
4. Update the sitemap if needed

### Styling Changes

- Modify CSS custom properties in `src/index.css`
- Update Tailwind config in `tailwind.config.ts`
- Use semantic tokens instead of hardcoded colors

### Adding Interactive Features

- Install additional dependencies: `npm install package-name`
- Create new components in `src/components/`
- Use TypeScript for type safety

## 📄 License

This is a personal academic website. You're free to use the code structure and design patterns for your own academic portfolio, but please don't copy the content directly.

## 🤝 Support

For issues or questions about the website:
- Check the console for any JavaScript errors
- Verify all links are working correctly
- Test accessibility with screen readers
- Validate HTML and check Lighthouse scores

---

Built with ❤️ using modern web technologies for optimal performance and accessibility.
