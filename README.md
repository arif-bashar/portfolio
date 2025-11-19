# Portfolio - Next.js

A modern portfolio website built with Next.js 14, TypeScript, and GSAP animations.

## Features

- ✨ Modern Next.js 14 with App Router
- 🎨 Beautiful animations using GSAP with React hooks
- 📱 Fully responsive and mobile-friendly
- 🎯 TypeScript for type safety
- 🎭 Custom cursor interactions
- 🚀 Optimized performance

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── header.tsx        # Header component
│   ├── footer.tsx        # Footer component
│   └── ...
├── styles/                # SCSS styles
├── breakpoints/           # SCSS breakpoint mixins
├── animations/            # Animation utilities
├── public/               # Static assets
│   ├── images/          # Images
│   └── fonts/           # Font files
└── package.json
```

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **GSAP** - Animation library
- **SCSS** - Styling
- **React 18** - UI library

## Build

To build for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Key Improvements from Gatsby Version

1. ✅ Removed Redux (using React state instead)
2. ✅ Updated to modern GSAP hooks (`useGSAP`)
3. ✅ Improved mobile responsiveness
4. ✅ Next.js App Router for better performance
5. ✅ Modern TypeScript setup
6. ✅ Optimized image handling

## License

0BSD
