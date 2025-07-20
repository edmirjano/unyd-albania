# UN Youth Delegate Program Albania - Landing Page

A modern, responsive landing page for the United Nations Youth Delegate Program in Albania, built with Next.js and tailored for UNA Albania.

## 🚀 Overview

This landing page showcases the UN Youth Delegate Program for Albanian youth, providing comprehensive information about:

- **Program Overview**: What the UN Youth Delegate Program offers
- **Application Status**: Clear indication that 2025 applications are closed
- **Success Stories**: Testimonials and achievements from past delegates
- **Preparation Guide**: Step-by-step preparation for 2026 applications
- **Social Media Integration**: Links to UNA Albania, UNYD Albania, and Blueprint Albania
- **Resource Library**: Essential documents and preparation materials

## 🎨 Design Features

- **UN Official Color Scheme**: Primary blue (#009EDB) with professional aesthetics
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Albanian Language**: Primary content in Albanian with international appeal
- **Modern UI/UX**: Clean, diplomatic, and trustworthy design
- **Performance Optimized**: Built with Next.js SSR for excellent SEO

## 🔧 Technical Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Optimized for Vercel/Netlify
- **SEO**: Server-side rendering with proper meta tags

## 📱 Key Sections

### 1. Header & Navigation
- Sticky navigation with UNA Albania branding
- Mobile-responsive hamburger menu
- Direct link to main UNA Albania website

### 2. Hero Section
- Compelling headline in Albanian
- Clear application status (2025 closed, prepare for 2026)
- Key statistics and call-to-action buttons
- Gradient background with UN blue theme

### 3. Application Alert
- Prominent banner about closed applications
- Newsletter signup for 2026 notifications
- Dismissible alert with clear messaging

### 4. Program Overview
- Benefits of the UN Youth Delegate Program
- Mission alignment with UNA Albania
- Application timeline and process overview

### 5. Success Stories
- Alumni testimonials with real achievements
- Video links to past delegate content
- Current positions of former delegates

### 6. Preparation for 2026
- 4-step preparation guide
- Essential resources and documents
- Application timeline calendar
- Actionable preparation steps

### 7. Social Media Hub
- Integration with multiple organizations:
  - UNA Albania (Instagram, Facebook)
  - UNYD Albania (Instagram, Facebook)
  - Blueprint Albania (Instagram)
- Community statistics and engagement

### 8. Footer
- Complete contact information
- Resource links and quick navigation
- Newsletter signup
- Social media links
- Copyright and organizational information

## 🌐 Social Media Integration

The page includes prominent links to:

- **UNA Albania**: @una_albania (Instagram), /UNAAlbania (Facebook)
- **UNYD Albania**: @unydalbania (Instagram), /UNYDAlbania (Facebook)
- **Blueprint Albania**: @blueprintalbania (Instagram)

*Note: Social media handles are placeholders and should be updated with real accounts*

## 🎯 Call-to-Actions

- **Primary**: "Regjistrohu për Njoftimet 2026" (Register for 2026 Notifications)
- **Secondary**: "Shiko Arkivin e Aplikimeve" (View Application Archive)
- **Social**: "Bashkohu me Komunitetin" (Join the Community)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd unyd-albania

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📝 Content Management

### Updating Content

1. **Hero Section**: Edit `src/components/Hero.tsx`
2. **Success Stories**: Update testimonials in `src/components/SuccessStories.tsx`
3. **Social Media**: Modify handles in `src/components/SocialMediaHub.tsx`
4. **Resources**: Add/remove resources in `src/components/Preparation2026.tsx`

### Adding New Sections

Create new components in `src/components/` and import them in `src/app/page.tsx`

### Updating Colors

The official UN colors are defined in `src/app/globals.css`:
- Primary: `#009EDB` (UN Blue)
- Light: `#5b92e5` (Light UN Blue)
- Accent: `#E41E20` (Albanian Red)

## 🌍 Localization

The page is primarily in Albanian but can be extended for multilingual support:

- Current: Albanian (Primary)
- Extensible: English, French (UN official languages)

## 📊 SEO & Performance

- **Meta Tags**: Comprehensive SEO optimization
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Ready for rich snippets
- **Performance**: Optimized images and loading
- **Accessibility**: ARIA labels and semantic HTML

## 🔗 External Links

- **UNA Albania**: https://unaalbania.org
- **UN Official**: https://www.un.org
- **Video Content**: YouTube links to delegate speeches
- **Social Media**: Multiple platform integration

## 📞 Support & Contact

For questions about the landing page or the UN Youth Delegate Program:

- **Email**: Contact through UNA Albania website
- **Social**: Follow @una_albania on social platforms
- **Website**: https://unaalbania.org

## 📄 License

This project is created for UNA Albania. All rights reserved to United Nations Association Albania.

---

**Built with ❤️ for Albanian youth and global diplomacy**

*Faqja zyrtare e Programit të Delegatëve të Rinj të OKB-së në Shqipëri*
