# System Patterns - Social Links Landing Page

## Architecture Pattern

```
social-links/
├── src/app/                    # Next.js App Router
│   ├── layout.tsx              # Root layout + metadata
│   ├── page.tsx                # Single landing page
│   └── globals.css             # Tailwind + custom CSS
├── public/                     # Static assets (minimal)
├── .memory-bank/               # AI context persistence
└── configuration files         # TypeScript, Tailwind, Next.js
```

## Component Pattern

**Single Page Structure**:
```tsx
export default function Home() {
  return (
    <main>
      {/* Background Effects */}
      <div className="absolute inset-0">...</div>

      {/* Content Container */}
      <motion.div variants={containerVariants}>
        {/* Profile Section */}
        <ProfileSection />

        {/* Social Links */}
        <SocialLinksGrid links={socialLinks} />

        {/* Website CTA */}
        <WebsiteCTA />

        {/* Footer */}
        <Footer />
      </motion.div>
    </main>
  );
}
```

## Data Pattern

**Social Link Structure**:
```typescript
interface SocialLink {
  platform: string;
  username: string;
  url: string;
  color: string;          // Brand color hex
  icon: ComponentType;    // Lucide or custom SVG
  description: string;
  label?: string;         // Optional badge (e.g., "Personal", "PRSMTECH")
}
```

## Animation Pattern

**Framer Motion Variants**:
```typescript
// Container stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

// Item spring animation
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

// Float animation
const floatVariants = {
  animate: { y: [0, -10, 0], transition: { duration: 6, repeat: Infinity } }
};
```

## Styling Patterns

**Glass Morphism**:
```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

**Platform-Specific Hover**:
```css
.social-card[data-platform="twitch"]:hover {
  box-shadow: 0 0 30px rgba(145, 70, 255, 0.3);
  border-color: rgba(145, 70, 255, 0.5);
}
```

## Image Pattern

**Next.js Image with Supabase**:
```typescript
// Remote image from Supabase storage
const PRSMTECH_LOGO = 'https://eiflgtwltjapsgjvhzxf.supabase.co/storage/v1/object/public/media/images/prsmtech-logo-favicon.jpeg';

<Image
  src={PRSMTECH_LOGO}
  alt="Jordan Ward - PRSMTECH"
  width={128}
  height={128}
  priority
/>
```

## SEO Pattern

**Metadata Export**:
```typescript
export const metadata: Metadata = {
  title: 'MrJPTech | Social Links',
  description: '...',
  openGraph: { ... },
  twitter: { card: 'summary_large_image', ... }
};
```
