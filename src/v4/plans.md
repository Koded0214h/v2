# Portfolio v4 — "The Invisible Systems Builder"
### Full Build Plan for Raufu Abdulrahman Ayobami

---

## 1. Core Identity

**Tagline:** "I build the systems no one sees."  
**Target audience:** Recruiters + technical hiring managers at product companies  
**Tone:** Confident, systems-focused, slightly terminal-hacker. Not flashy. Serious.  
**Mode:** Dark mode only. No toggle needed.

---

## 2. Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Component lib | shadcn/ui (primitives) + Aceternity UI (hero + cards) |
| Icons | lucide-react |
| Forms | React Hook Form + Zod |
| Email | Resend (or EmailJS as fallback) |
| Fonts | Inter (body) + JetBrains Mono (terminal/code elements) |
| Deploy | Vercel |

---

## 3. Design Tokens

```
Background:     #000000  (deep dark navy — not pure black)
Surface:        #0f1623  (cards, panels)
Surface-raised: #1a2332  (expanded cards, modals)
Border:         #1e2d3d  (subtle dividers)
Accent:         #00d9ff  (cyan — primary glow color)
Accent-muted:   #0891b2  (secondary cyan)
Text-primary:   #e2e8f0
Text-secondary: #64748b
Text-code:      #00d9ff  (JetBrains Mono)
Danger/alert:   #ef4444  (for fraud/anomaly visual cues)
Success:        #22c55e  (uptime/success metrics)
```

Background texture: A very faint CSS dot-grid or scan-line pattern at 3% opacity. Subtle data-flow diagonal lines on hero only.

---

## 4. Typography

- **Headings:** Satoshi/consolas, 700–800 weight, tracked tight
- **Body:** Satoshi/consolas, 400–500 weight
- **Terminal/code strings:** Satoshi/Consolas — used in: hero typewriter, tech tags, metric callouts, section labels
- **Section labels** (e.g. `> experience`, `> projects`): Satoshi/consolas, cyan, small caps — acts as a "system log" prefix

---

## 5. Folder Structure

```
src/v4/
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, dark class
│   ├── page.tsx            # Single page — imports all sections in order
│   └── globals.css         # Tailwind + CSS vars + dot-grid bg
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed top nav with anchor links
│   │   └── Footer.tsx      # Minimal footer
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Journey.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── TechStack.tsx
│   │   ├── DevFootprint.tsx
│   │   └── Contact.tsx
│   ├── ui/                 # shadcn primitives (button, badge, input, etc.)
│   └── aceternity/         # Aceternity components (TypewriterEffect, etc.)
├── lib/
│   ├── data/
│   │   ├── experience.ts   # All job data
│   │   ├── projects.ts     # All project data
│   │   ├── journey.ts      # Timeline milestones
│   │   └── stack.ts        # Tech stack categories
│   └── utils.ts
├── public/
│   ├── resume.pdf          # Downloadable resume
│   └── diagrams/           # Architecture diagram images (PNG/SVG)
├── plans.md
└── NEW_ME.md
```

---

## 6. Page Structure & Layout

Single scroll page. All sections stacked vertically. No page routing (except maybe `/resume` redirect).

```
[Fixed Navbar]
    ↕
[Hero]              full viewport height (100vh)
[Journey]           ~80vh
[Experience]        auto (expandable)
[Projects]          auto (card grid)
[TechStack]         ~60vh
[DevFootprint]      ~60vh
[Contact]           ~70vh
[Footer]            small, ~100px
```

### Scroll behavior
- `scroll-behavior: smooth` on html
- Framer Motion `useInView` triggers entrance animations per section
- Each section has an `id` for anchor nav

### Z-index layers
```
z-0  → Background texture
z-10 → Section content
z-20 → Sticky/fixed Navbar
z-30 → Expanded card overlays (Framer Motion)
z-40 → Modal dialogs (if needed)
```

---

## 7. Section-by-Section Plan

---

### 7.1 Navbar

**Position:** `fixed top-0`, full width, `backdrop-blur-md`, subtle bottom border in accent  
**Style:** Minimal. Left: `koded.` in JetBrains Mono + cyan dot. Right: anchor links.  
**Links:** `Journey | Experience | Projects | Stack | Footprint | Contact`  
**Extra:** Small green blinking dot + `"● AVAILABLE"` status on far right (signals open to work)  
**Mobile:** Hamburger → slide-down menu with same links  
**Component source:** Custom — shadcn `NavigationMenu` as base, styled from scratch

---

### 7.2 Hero Section

**Layout:** Full viewport. Centered vertically. Terminal window as the main element.  
**Layers:**
- Background: faint diagonal data-flow lines (SVG or CSS animation, 4% opacity)
- Center: Mac-style terminal window card (rounded corners, traffic light dots, dark surface)
- Terminal body: typewriter text
- Below terminal: two CTA buttons + status bar chip

**Terminal content (typewriter sequence):**
```
> Initializing...
> Hello, I'm Raufu (Koded).
> I build the systems no one sees.
> Backend Systems Engineer | AI Agent Architect
> Python · Django · LangGraph · Go · AWS
```
Then cursor blinks and stops.

**Status bar chip** (below terminal, left-aligned):
```
● Powering Skurel FraudMonit  •  99.9% uptime  •  1M+ signals/month
```
Small, JetBrains Mono, cyan text, subtle border

**CTAs** (below status bar):
- `Explore My Systems ↓` — ghost button, cyan border
- `Download Resume` — solid cyan button

**Component sources:**
- Terminal window: **Aceternity UI** → `TypewriterEffectSmooth` inside a custom terminal shell div
- CTAs: **shadcn** `Button`
- Background lines: Custom SVG or Aceternity `BackgroundBeams` (very low opacity)

---

### 7.3 Journey Section (Origin Story)

**Label:** `> journey.log`  
**Layout:** Full-width vertical timeline, centered on desktop, left-aligned on mobile  
**Style:** Timeline spine is a thin cyan vertical line. Each node is a glowing cyan dot.

**Timeline milestones (from oldest to present):**
| Year | Label | Story |
|---|---|---|
| Age 9 (2009) | "First Script" | Minecraft automation, first encounter with logic |
| 2018 | "Chose CS" | Decided to go deep, enrolled UNILAG CS |
| 2022 | "First Real Code" | The Bulb Africa internship — first production code |
| 2024 | "Went Web3" | Searchbox Labs — built first blockchain-integrated apps |
| 2025 | "AI + Systems" | Striche.AI — multi-agent orchestration |
| 2025 | "Full-Time Engineer" | Skurel — fraud detection at scale |
| 2026 | "Builder Mode" | Fog of War, Janus — systems that span chains |

**Interaction:**
- Each node: hover/click → panel expands rightward (desktop) or downward (mobile)
- Panel shows: short 2–3 sentence story + optional image/screenshot
- Expansion: `Framer Motion` `AnimatePresence` + `layoutId`

**Component sources:**
- Timeline spine + dots: Custom CSS
- Expand panels: Framer Motion `AnimatePresence`
- No Aceternity needed here — keep it custom and narrative

---

### 7.4 Experience Section

**Label:** `> systems_i_built.sh`  
**Layout:** Vertical stack of expandable cards. Full width, max-width container.  
**Default state:** Card shows company name, title, date range, one-liner, tech tags  
**Expanded state:** Full bullet points + architecture diagram/image + key metrics + tech stack badges

**Card default (collapsed):**
```
[Company logo area]  Skurel                           Sep 2025 – Present
                     Software Engineer (Full Time)
                     "Fraud detection infrastructure for major banks"
                     [Python] [Django] [AWS] [Kafka]          [↓ Expand]
```

**Card expanded:**
```
┌────────────────────────────────────────────────────┐
│  • Architected white-label SMS/Voice OTP...         │
│  • Engineered FraudMonit, 1M+ signals/month         │
│  • 99.9% uptime  •  15% false-positive reduction    │
│                                                      │
│  [Architecture Diagram Placeholder]                  │
│                                                      │
│  Stack: Python · Django · PostgreSQL · AWS · Kafka  │
└────────────────────────────────────────────────────┘
```

**Order:** Skurel → Striche.AI → Searchbox Labs → The Bulb Africa

**Interaction:** Click card (or click expand button) → height animates open, content fades in  
**Component sources:**
- Card shell: Custom, styled with Tailwind surface colors
- Expand animation: Framer Motion `motion.div` with `animate={{ height: "auto" }}`
- Tech badges: **shadcn** `Badge`
- Metrics callouts: Custom `<MetricChip>` component (cyan glow, JetBrains Mono)

---

### 7.5 Featured Projects Section

**Label:** `> deployed_systems/`  
**Layout:** 2-column grid (desktop), 1-column (mobile). 5 projects total.  
**Card structure:** Each card = Problem → What I built → Impact + tech tags + action buttons

**Projects (from resume):**

| # | Project | Stack | Impact |
|---|---|---|---|
| 1 | **Antlers** — Real-Time Driver Heatmap | Django, Kafka, Redis, Channels, React | 2K+ GPS pings/sec, <100ms latency, 60% less lag |
| 2 | **FraudMonit** (Skurel) | Python, AWS, Django | 1M+ signals/month, 99.9% uptime, 15% false-positive reduction |
| 3 | **Janus** — AI-Native MPC on Solana | Rust, Anchor, LangGraph, Python, TypeScript | Zero-trust AI agent execution layer |
| 4 | **Fog of War** — Extraction Royale | Go, gRPC, Solidity, Arbitrum, WebSockets | On-chain prize pools, real-time fog-of-war |
| 5 | **BizPulse** — AWS Hackathon Top 3 | AWS Lambda, Glue, Bedrock | Top 3 placement, serverless BI co-pilot |

**Card hover state:** Subtle cyan border glow + slight surface lift  
**Card click:** Expands or routes to `/projects/[slug]` detail page (decide later — start with expand)

**Each card has:**
- Title + subtitle
- Problem statement (1 sentence)
- "What I built" (2–3 bullet points)
- Impact metrics (glowing number chips)
- Tech tags
- Buttons: `GitHub ↗` | `See Architecture` (opens diagram modal)

**Component sources:**
- Card grid: **Aceternity UI** `HoverEffect` cards or custom Bento grid
- Metric chips: Custom component, cyan/green glow
- Tech tags: **shadcn** `Badge`
- Architecture modal: **shadcn** `Dialog` + image inside
- "See Architecture" button: **shadcn** `Button` variant ghost

---

### 7.6 Tech & Systems Stack

**Label:** `> tech_stack.json`  
**Layout:** 4-column category grid (Backend, AI/Agents, Real-time & Data, Cloud & Infra)

**Categories + items:**

```
Backend              AI / Agents              Real-time & Data     Cloud & Infra
────────────         ─────────────────        ────────────────     ─────────────
Python               LangGraph                Kafka                AWS (EC2/Lambda)
Django / DRF         LangChain                Redis                Docker
Go                   OpenAI API               WebSockets           Vercel
Node.js              Anthropic SDK            Django Channels      GitHub Actions
PostgreSQL           Agent Orchestration      Kafka Streams        CI/CD
REST APIs            RAG Pipelines            Leaflet / Maps       Nginx
GraphQL              Prompt Engineering       gRPC                 PostgreSQL (RDS)
```

**Style:** Each item is a small pill/chip with the tool's icon (devicons or simple SVG). On hover → chip glows cyan.  
**Optional:** Small "How my tools connect" SVG flow diagram below the grid (static, drawn simply)

**Component sources:**
- Category columns: Custom CSS grid
- Tool chips: Custom `<TechChip>` with `devicons` SVG or `simple-icons`
- Optional flow diagram: Hand-crafted SVG or Mermaid rendered to SVG at build time

---

### 7.7 Dev Footprint Section

**Label:** `> public_activity.log`  
**Layout:** 3-column card grid (desktop), 2-col (tablet), 1-col (mobile)

**Profile cards:**

| Card | Data shown | Link |
|---|---|---|
| GitHub | followers, total stars, pinned repos count | github.com/koded |
| LinkedIn | `Open to Work` badge | linkedin.com/in/raufu |
| X / Twitter | handle + follower count | @coder0214h |
whatsapp, 
| WakaTime | Coding hours this month + top language | wakatime.com |
| LeetCode | Problems solved + rank | leetcode.com |
| dev.to | Articles published | dev.to |

**Style:** Each card = platform logo (large, slightly transparent) + platform name + 1-2 live stats + subtle hover lift  
**Data fetching:** GitHub stats via GitHub API (public, no auth needed for basic stats). WakaTime via their public API. Others: static links with manual stat updates or cached at build time.

**Component sources:**
- Card: Custom component
- Stats fetch: `fetch` in Next.js Server Components (cached, ISR — revalidate every 24h)
- Platform icons: `simple-icons` npm package

---

### 7.8 Contact Section

**Label:** `> send_signal.sh`  
**Layout:** Two-column. Left: form. Right: direct links + availability statement.

**Left — Form:**
```
Name ___________
Email __________
Message ________
[Send Signal →]
```

**Right — Direct contact:**
```
📧 coder0214h@gmail.com
💼 LinkedIn
🐙 GitHub
📍 Lagos, Nigeria (Open to remote)

"Available for full-time remote or contract
 backend / AI systems work."
```

**Form behavior:** Submit → shows inline success state ("Signal received.") — no page reload  
**Component sources:**
- Form inputs: **shadcn** `Input`, `Textarea`, `Button`
- Validation: `react-hook-form` + `zod`
- Email send: `Resend` API (server action in Next.js)

---

### 7.9 Footer

**Style:** Single line, centered. JetBrains Mono, dim text.  
```
Built with Next.js, Tailwind & systems thinking.  ·  © 2026 Raufu Abdulrahman
```
Optional: `↑ Back to top` on the right.

---

## 8. Animation Strategy

| Element | Animation | Library |
|---|---|---|
| Hero terminal text | Typewriter, char by char | Aceternity TypewriterEffect |
| Section entrance | Fade up + slight Y translate on scroll | Framer Motion `useInView` |
| Experience card expand | Height auto animate, content fade in | Framer Motion `AnimatePresence` |
| Journey panel expand | Slide right + fade | Framer Motion `AnimatePresence` |
| Project card hover | Border glow + shadow lift | Tailwind `hover:` + CSS transition |
| Tech chip hover | Cyan glow box-shadow | CSS transition |
| Metric numbers | Count up animation on scroll into view | Custom hook or `react-countup` |
| Nav link active | Underline slide | Framer Motion `layoutId` shared underline |
| Background beams (hero) | Slow drift | Aceternity `BackgroundBeams` at low opacity |

**Rule:** No animation should block reading. All purely decorative animations use `prefers-reduced-motion` media query to disable.

---

## 9. Responsive Breakpoints

```
Mobile:   < 640px   → single column everything, timeline left-aligned
Tablet:   640–1024px → 2-col projects grid, compressed nav
Desktop:  > 1024px  → full layout as designed
Wide:     > 1440px  → max-width container (1280px) centered
```

---

## 10. SEO & Meta

```
title: "Raufu Abdulrahman — Backend & AI Systems Engineer"
description: "I build the systems no one sees. Backend engineer specializing in Python, Django, LangGraph, and production AI pipelines."
og:image: /og-image.png  (terminal screenshot style card, 1200×630)
og:type: website
twitter:card: summary_large_image
canonical: https://[domain]
```

---

## 11. Build Phases

### Phase 1 — Foundation (Day 1)
- [ ] `npx create-next-app@latest` inside `src/v4/`
- [ ] Configure Tailwind with design tokens (CSS vars in globals.css)
- [ ] Install + configure: Framer Motion, shadcn/ui, lucide-react
- [ ] Set up fonts: Inter + JetBrains Mono via `next/font`
- [ ] Add dot-grid background CSS
- [ ] Build Navbar + Footer shell

### Phase 2 — Hero (Day 1–2)
- [ ] Install Aceternity TypewriterEffect
- [ ] Build terminal window shell component
- [ ] Wire typewriter sequence
- [ ] Add status bar chip
- [ ] Add CTA buttons

### Phase 3 — Experience + Projects (Day 2–3)
- [ ] Create `lib/data/experience.ts` with all job data
- [ ] Build `Experience.tsx` with expandable cards
- [ ] Create `lib/data/projects.ts` with all project data
- [ ] Build `Projects.tsx` with hover cards + metric chips

### Phase 4 — Journey Timeline (Day 3)
- [ ] Create `lib/data/journey.ts` with all milestones
- [ ] Build interactive vertical timeline with expand panels

### Phase 5 — Stack + Footprint + Contact (Day 4)
- [ ] Build `TechStack.tsx` grid with chips
- [ ] Build `DevFootprint.tsx` with static cards + GitHub API fetch
- [ ] Build `Contact.tsx` form with Resend

### Phase 6 — Polish + Deploy (Day 5)
- [ ] Scroll animations on all sections
- [ ] Mobile responsiveness audit
- [ ] `react-countup` on metrics
- [ ] `prefers-reduced-motion` guards
- [ ] OG image + meta tags
- [ ] Vercel deploy + domain config

---

## 12. Key Decisions Still Open

| Decision | Options | Recommendation |
|---|---|---|
| Project card interaction | Expand in-place vs. `/projects/[slug]` page | Start with expand-in-place, add route later |
| Architecture diagrams | Real images vs. placeholder | Use placeholder boxes first, swap in real PNGs |
| Contact email service | Resend vs. EmailJS | Resend (cleaner Next.js server action) |
| Domain | koded.dev | Decide before deploy |
| GitHub stats | Live API vs. static | ISR fetch from GitHub public API, revalidate 24h |
| Journey easter egg images | Real screenshots vs. emoji/illustration | Start with text + emoji, add images later |
