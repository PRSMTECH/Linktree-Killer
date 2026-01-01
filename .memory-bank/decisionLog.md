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
