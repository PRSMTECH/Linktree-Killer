# CLAUDE.md - Social Links Landing Page

## Project Overview

**Name:** Social Links Landing Page
**Location:** J:\PRSMTECH\CLIENT-PROJECTS\social-links
**Purpose:** "Link in bio" style landing page for @MrJPTech social media presence
**Owner:** Jordan Ward, CEO of PRSMTECH
**Type:** Next.js 14 Single Page Application

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.2.20 | React framework |
| React | 18.3.1 | UI library |
| TypeScript | 5.7.2 | Type safety |
| Tailwind CSS | 3.4.17 | Styling |
| Framer Motion | 11.15.0 | Animations |
| Lucide React | 0.468.0 | Icons |

## Social Media Links

| Platform | Username | URL |
|----------|----------|-----|
| Twitch | @MrJPTech | https://twitch.tv/MrJPTech |
| YouTube | @MrJPTechy | https://youtube.com/@MrJPTechy |
| TikTok | @MrJPTech | https://tiktok.com/@MrJPTech |
| Instagram | @MrJPTech | https://instagram.com/MrJPTech |
| Instagram | @prsmtech | https://instagram.com/prsmtech |
| X/Twitter | @MrJPTech | https://twitter.com/MrJPTech |
| Threads | @mrjptech_ | https://threads.com/@mrjptech_ |
| Reddit | u/MrJPTech | https://reddit.com/u/MrJPTech |

## Commands

```bash
# Development
pnpm dev              # Start dev server (localhost:3000)

# Build
pnpm build            # Production build
pnpm start            # Start production server

# Deployment
vercel                # Deploy preview
vercel --prod         # Deploy to production
```

## Project Structure

```
social-links/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout with meta tags
│       ├── page.tsx        # Main landing page
│       └── globals.css     # Tailwind + custom styles
├── public/                 # Static assets
├── .memory-bank/           # AI context persistence
├── CLAUDE.md               # This file
├── README.md               # Project documentation
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | #6366f1 | Main brand color |
| Secondary | #8b5cf6 | Secondary accents |
| Accent | #a855f7 | Highlights |
| Dark | #1e1b4b | Background |
| Light | #e0e7ff | Text on dark |

## Deployment

**Target:** Vercel
**Custom Domain Options:**
- links.prsmtechweb.com (recommended)
- social.prsmtechweb.com
- mrjptech.link

## Reference

- Main PRSMTECH Website: https://prsmtechweb.com
- 30-Day Social Media Gameplan: J:\PRSMTECH\PRSM-CEO\30-DAY-SOCIAL-MEDIA-GAMEPLAN

## Session Management

```bash
# Start of session
/memory-load

# End of session
/memory-save
```
