# Decision Log - Social Links Landing Page

## Dec 31, 2025 - Manual Project Creation

**Decision**: Create project files manually instead of using create-next-app

**Context**: The `pnpm create next-app` command hung on interactive prompts

**Alternatives Considered**:
1. Use create-next-app with all flags (--typescript --tailwind --app --use-pnpm)
2. Create files manually from scratch

**Rationale**: Manual creation gives full control over dependencies and avoids interactive prompt issues

**Impact**: Project structure matches PRSMTECH standards exactly

---

## Dec 31, 2025 - Single Page Architecture

**Decision**: Build as single-page application, not multi-page

**Context**: Link-in-bio pages are typically single landing pages

**Alternatives Considered**:
1. Multi-page with analytics dashboard
2. Single page with optional sub-routes

**Rationale**: Simplicity matches use case - visitors need quick access to links, not navigation

**Impact**: Minimal JavaScript bundle, fast loading

---

## Dec 31, 2025 - Supabase for Images

**Decision**: Host logo images on existing Supabase storage

**Context**: User provided Supabase storage URL for PRSMTECH logos

**Alternatives Considered**:
1. Store images in /public folder
2. Use Supabase storage (selected)
3. Use external CDN

**Rationale**: Leverages existing infrastructure, centralized asset management

**Impact**: Required next.config.js remotePatterns configuration

---

## Dec 31, 2025 - Framer Motion for Animations

**Decision**: Use Framer Motion instead of CSS animations

**Context**: Need smooth, performant animations for professional feel

**Alternatives Considered**:
1. Pure CSS animations
2. Framer Motion (selected)
3. GSAP

**Rationale**: Framer Motion integrates well with React, provides spring physics

**Impact**: Additional ~30KB bundle size, but worth it for polish

---

## Dec 31, 2025 - Enhanced Animation Strategy (v2.0)

**Decision**: Add interactive particle effects, 3D tilt, and typewriter animations

**Context**: User requested more eye-catching, interactive animations optimized for mobile

**Alternatives Considered**:
1. Add simple CSS hover effects (too basic)
2. Use Three.js for 3D effects (too heavy)
3. Framer Motion with custom hooks (selected)

**Rationale**:
- Framer Motion already in bundle, minimal additional weight
- Custom hooks (useTypingAnimation, useRipple) keep code organized
- 3D tilt via useMotionValue/useSpring is lightweight

**Impact**:
- Bundle increased from ~100KB to ~138KB (+38KB)
- Rich interactive experience on desktop
- Graceful fallback on mobile with reduced blur

---

## Dec 31, 2025 - Accessibility-First Animation Approach

**Decision**: Implement prefers-reduced-motion and high-contrast media queries

**Context**: Some users experience motion sickness or need high contrast

**Alternatives Considered**:
1. Ignore accessibility (bad practice)
2. Add toggle in UI (complex for single-page)
3. Use CSS media queries (selected)

**Rationale**: CSS media queries respect user OS/browser settings automatically

**Impact**:
- All animations disabled for reduced-motion users
- Enhanced visibility for high-contrast users
- No additional JavaScript required
