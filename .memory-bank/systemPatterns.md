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
  metadataBase: new URL('https://www.prsmtechdemos.com'),
  title: 'MrJPTech | Social Links',
  description: '...',
  openGraph: { ... },
  twitter: { card: 'summary_large_image', ... }
};
```

## Enhanced Animation Patterns (v2.0)

**Floating Particles Component**:
```typescript
function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    })));
  }, []);

  return particles.map(p => (
    <motion.div
      animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
      transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
    />
  ));
}
```

**Typewriter Animation Hook**:
```typescript
function useTypingAnimation(texts: string[], speed = 100, deleteSpeed = 50) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Type or delete characters
    }, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return displayText;
}
```

**3D Tilt Card Component**:
```typescript
function TiltCard({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(useSpring(y), [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(useSpring(x), [-0.5, 0.5], ['-7deg', '7deg']);

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={e => { /* calculate x/y percentage */ }}
    >
      {children}
    </motion.div>
  );
}
```

**Click Ripple Hook**:
```typescript
function useRipple() {
  const [ripples, setRipples] = useState([]);

  const addRipple = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples(prev => [...prev, { x: e.clientX - rect.left, y: e.clientY - rect.top, id }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 1000);
  }, []);

  return { ripples, addRipple };
}
```

## Accessibility Patterns

**Reduced Motion Support**:
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**High Contrast Support**:
```css
@media (prefers-contrast: high) {
  .glass {
    background: rgba(30, 27, 75, 0.9);
    border-color: rgba(255, 255, 255, 0.3);
  }
}
```

## Mobile Optimization Patterns

**Responsive Sizing**:
```typescript
// Use sm: breakpoint for mobile-first sizing
className="w-10 h-10 sm:w-12 sm:h-12"
className="text-sm sm:text-base"
className="p-3 sm:p-4"
```

**Performance Reduction on Mobile**:
```css
@media (max-width: 640px) {
  .glass {
    backdrop-filter: blur(8px); /* Reduced from 10px */
  }
  .social-card {
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }
}
```
