---
name: Adriel Oloko — Blockchain Engineer Portfolio
description: Expressive engineering portfolio for a blockchain engineer, stage-lit serif editorial
colors:
  signal-orange: "#f97316"     # Tailwind orange-500; the hero CTA, the one saturated call-to-action
  amber-400: "#fbbf24"         # findings tag dot
  amber-500: "#f59e0b"         # findings badge dashed border
  amber-700: "#b45309"         # findings badge text
  amber-100: "#fef3c7"         # findings badge background
  cream-stage: "#f5f0eb"       # findings lounge background
  espresso-panel: "#2c1a0e"    # findings card panel
  espresso-ink: "#1a1208"      # findings heading on cream
  process-black: "#0e0e0e"     # process section background
  loader-black: "#121212"      # loader overlay, scrollbar thumb
  paper: "#ffffff"             # light surfaces, cards, CTA submit button
  mist: "#f9fafb"              # gray-50: services and portfolio section backgrounds
  hairline: "#f5f5f4"          # stone-100: card and divider borders
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    weights: [400, 600, 700]
  body:
    fontFamily: "Inter, Arial, sans-serif"   # loaded; DM Sans is referenced but NOT loaded (open item)
  label:
    fontFamily: "JetBrains Mono, monospace"
    letterSpacing: "0.15em-0.25em uppercase"
rounded:
  sm: "4px"     # rounded-sm: tag chips, small buttons
  md: "6px"     # rounded-md: cards
  lg: "8px"     # rounded-lg: hero button
  xl: "12px"    # rounded-xl: about image, mobile cards
  2xl: "16px"   # rounded-2xl: findings cards
  full: "9999px"  # pills: nav Contact Me, badges, dots
motion:
  ease: "cubic-bezier(0.22, 1, 0.36, 1)"
  durations: "200ms-600ms"
  carouselAutoplay: "5s"
---

# Design System: Adriel Oloko — Blockchain Engineer Portfolio

## 1. Overview

**Creative North Star: "The Engineering Stage"**

The site is a stage where the engineering does the talking. The hero drops you into a dark, animated theater: one confident voice in Cormorant Garamond, one Signal Orange spotlight asking for the click, and JetBrains Mono stage directions whispering what is happening. The rest of the show alternates acts: dark cinematic stages (hero, process, CTA) against warm editorial rooms (about, services, portfolio, the findings lounge). The design itself is the portfolio piece: this is a website that proves the person who built it can build websites, ship interfaces, and make a crypto hiring manager feel craft in one pass.

The system explicitly rejects generic SaaS templates (centered hero, three identical feature cards, blue gradient CTA), agency cliche (stock hero photos, "full-service digital agency" filler), portfolio cliche (a grid of identical screenshot cards with no point of view), crypto-bro cliche (hype words, gradient everything, unearned protocol jargon), and plain, forgettable, visually quiet work. Every section funnels toward proof of engineering depth and the contact path, while the craft itself reads as the evidence.

**Key Characteristics:**
- Expressive editorial serif display (Cormorant Garamond) carrying the voice; JetBrains Mono labels annotate the structure
- Dark cinematic stages alternate with warm light rooms; never a flat single-mood page
- One animated stage: the GIF backdrop (`17d60ba7b0ddafe97967bddc40f14ad2.gif`) rendered by the `.hjk` class on hero, services, and CTA/footer
- One saturated accent, Signal Orange (orange-500), reserved for the hero CTA; amber is a separate family owned by the findings lounge
- Signature gestures: outlined text strokes, italic serif interjections, inline circular image embeds in the hero
- Warm near-blacks for interior dark surfaces (process #0e0e0e, espresso #2c1a0e); pure black is reserved for the hero/CTA stage itself

## 2. Colors

A warm palette, dark and light: near-blacks with heat, creams and stones without blue chill, one orange spotlight and an amber ember for the findings lounge.

### The four dark surfaces (named, do not add more)
- **Stage Black** (#000, Tailwind `bg-black`): the hero and CTA canvas behind the animated GIF. Pure black is correct here because it is the cinema backdrop.
- **Process Black** (#0e0e0e): the process section background, one step off pure black.
- **Loader Black** (#121212): loader overlay and scrollbar thumb.
- **Espresso** (#2c1a0e): the findings card panel. The darkest warm brown in the system. Findings headings on cream use Espresso Ink (#1a1208).

### The warm light surfaces
- **Warm Cream** (#f5f0eb): the findings lounge background. The warmest light surface.
- **Mist** (#f9fafb, `bg-gray-50`): services and portfolio section backgrounds.
- **Paper** (#ffffff): about section, cards, service cards, the CTA submit button.
- **Hairline** (#f5f5f4, `stone-100`): card borders, dividers, tag chip borders. Borders are always this quiet.

### Text and accent scales (Tailwind defaults, used directly)
- **Stone scale** (`stone-100` … `stone-900`): light-section text and borders. stone-900 headings, stone-500 body, stone-400 secondary, stone-300 tertiary.
- **Neutral scale** (`neutral-100/200/400/600`): about section text.
- **Signal Orange** (`orange-500`, #f97316): the hero "View my work" button. Effectively the only saturated orange on the page.
- **Amber family** (`amber-100/400/500/700`): findings lounge only. Badge background, active dot, dashed border, badge text.

### Named Rules
**The Spotlight Rule.** Signal Orange appears only in the hero CTA. When it shows up, it is the only thing asking for the click. Amber is a separate family owned by the findings lounge; never use amber for CTAs.
**The Four Darks Rule.** Dark surfaces are exactly four: Stage Black, Process Black, Loader Black, Espresso. If a new dark surface is needed, reuse one of these. Never introduce a cool dark (blue-black, gray-blue).
**The Warm Light Rule.** Light surfaces stay warm: cream, gray-50, white, stones. No cool grays, no blues, no teals. The only exception is content imagery, not system color.

## 3. Typography

**Display Font:** Cormorant Garamond (weights 400/600/700, with Georgia, serif fallback)
**Body Font:** Inter (with Arial fallback)
**Label/Mono Font:** JetBrains Mono (with monospace fallback)

**Character:** A high-contrast editorial serif that feels hand-set and confident, paired with quiet mono annotations. The serif performs, the mono documents.

### Hierarchy
- **Display** (700, clamp(2.5rem, 6vw, 4.5rem), leading-tight): hero headline and CTA headline. A light-weight (font-light) variant carries the CTA headline ("Let's build something great."). A 300-weight option exists for large CTA lines.
- **Headline** (700, text-3xl to text-6xl, leading-tight): section titles ("What I can do for you", "Work that earns trust", "A clear process, no surprises", "What our clients say"). Services uses text-2xl semibold card titles in Cormorant.
- **Body** (400, 0.9375rem, leading-relaxed): paragraphs. Cap line length around 65-75ch.
- **Label** (500, 0.75rem, uppercase, tracking 0.15em-0.25em): eyebrows ("Selected Work", "Services", "How I Work", "Start a project"), section markers, stat captions, index numbers.

### Named Rules
**The Mono Annotation Rule.** Labels, eyebrows, section markers, index numbers, and stat captions are always JetBrains Mono, uppercase, wide-tracked. Never set a label in the serif. The serif performs, the mono documents.
**The Font Stack Rule (open item).** The loaded fonts are Cormorant Garamond, Inter, JetBrains Mono, plus Playfair Display and Bebas Neue which are loaded but unused. DM Sans is referenced as `var(--font-dm-sans)` in portfolio, services, and CTA but is never loaded, so that variable resolves to nothing and those sections fall back to the browser default. globals.css also declares `--font-syne`, `--font-dm-sans`, and `--font-space-grotesk` in `@theme inline` that map to undefined variables. Resolution: standardize body text on Inter everywhere and remove DM Sans, Syne, and Space Grotesk references, or load DM Sans properly and use it consistently. Do not ship another font until this is resolved.

## 4. The Animated Stage

The `.hjk` class (globals.css) sets a full-bleed animated GIF background (`17d60ba7b0ddafe97967bddc40f14ad2.gif`), cover-sized, centered, no repeat. It is applied to:
- **Hero** (bg-fixed): the GIF is the hero canvas behind the headline.
- **Services** (bg-fixed with an absolute `backdrop-blur-xl` overlay): the blurred GIF becomes the services room's atmosphere, with white-ish headings over it.
- **CTA + Footer wrapper** (bg-fixed, index.tsx): the final dark stage, with a `backdrop-blur` overlay and a subtle SVG noise layer at 3% opacity.

### Named Rules
**The One-GIF Rule.** This single animated stage is the system's atmosphere. Do not add a second animated background, video, or canvas anywhere. If a section needs motion, use framer-motion transitions, not more background media.
**The Readability Overlay Rule.** Whenever the GIF sits under content, a blur or dark overlay must separate text from the animation (services: backdrop-blur-xl; CTA: backdrop-blur + black/20 panel; hero: black canvas + text shadows avoided by using the dark base). Never place text directly on the raw GIF without an overlay.
**The Load Budget Rule.** The GIF is heavy. It is allowed on exactly these three sections and nowhere else. Perf regressions on the GIF itself are a release blocker.

## 5. Elevation

Flat by default. Depth is conveyed through tonal layering, not shadows: dark surfaces behind light ones, backdrop-blur overlays over animated imagery, hairline borders between cards.

### Shadow Vocabulary (the complete set)
- **Scrollbar** (`::-webkit-scrollbar-thumb`, #121212 with 10px radius): the only system chrome. No cards carry shadows; depth comes from tonal layering and borders.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. There are no card shadows in the system; the only shadow-like chrome is the scrollbar. If a card needs a shadow to separate from its background, the tonal layering is wrong.

## 6. Components

### Buttons
- **Hero "View my work":** orange-500 background, white text, rounded-lg (8px), wrapped in a 2px white border frame (`rounded-[14px]`). Anchors to #projects. The single Signal Orange element.
- **Services "Let's talk":** stone-900 background, white text, 4px radius, `hover:bg-stone-700`, `active:scale-95`, transition 200ms. Anchors to #contact.
- **Portfolio "Visit":** `bg-black`, white text, rounded, `px-4 pr-5 py-1.5`.
- **CTA "Send message":** white background, black text, square (no radius), arrow icon that slides right on hover, `active:scale-[0.98]`, transition 300ms.
- **Nav "Contact Me":** 1.5px paper border, rounded-full pill, `px-3 py-1.5`.
- **Hover / Focus:** backgrounds shift one step (200-300ms); every button needs a visible focus ring.

### Chips and Badges
- **Service tag chip:** stone-100 background, stone-500 text, stone-200 border, 4px radius, `px-2.5 py-1`, text-xs.
- **Findings badge ("Found in production"):** amber-100 background, amber-700 text, dashed amber-500 border, pill, with a pulsing amber dot.

### Cards and Containers
- **Service card:** white background, stone-100 border (hover stone-200), 6px radius, 24px padding. Numbered 01/02/03 in mono, title in Cormorant, italic tagline, description, arrow-prefixed outcome line, tag chips, "Open to" status block, "Let's talk" button.
- **Portfolio card:** full-bleed image top (`rounded-t-md`), stone-100 border, 6px radius, project name in Cormorant title, summary, black "Visit" button.
- **Findings card:** Espresso (#2c1a0e) panel on Warm Cream, rounded-2xl, 32-40px padding. Top row: mono index (white/40) and an amber tag pill. Cormorant white title, white/70 body, giant ghost quotation mark in the corner. Static 2-column grid, no carousel, no autoplay, no portraits. Content: production findings (version-skew discovery, disabled feature paths, RPC log-limit workaround, verification green against live RPC).
- **Process accordion:** Process Black (#0e0e0e) background. Number in mono (#444), title (stone-100 when open, #777 at rest, hover #ccc), chevron that rotates 180deg, body #888 with a max-h transition. Image side on desktop, top on mobile.
- **About:** white, `rounded-t-3xl` overlapping the hero by -12px, portrait image with a "Open to blockchain engineer roles" black/80 blur badge and pulsing emerald dot.

### Stats Bar
Three stats in a `divide-x` row: Cormorant Garamond large numbers, mono uppercase captions. Dark variant on hero (`text-white`, `divide-white/50`), light variant inside about on large screens (`divide-black/50`). Current values: 2+ launchpads shipped, 5+ protocols integrated, 100% verification green on live RPC.

### Inputs / Fields (CTA form)
- **Style:** transparent background, bottom hairline (white at 10%), floating label that rises on focus or when filled.
- **Focus:** a 1px white line grows from left to right under the field (500ms). No other chrome.
- **Error / Disabled:** not yet implemented; add accessible error text and disabled states before launch.

### Navigation
- **Style:** absolute over the hero, white text, JetBrains Mono links with no decoration, gap 32px.
- **Desktop:** brand left (Cormorant, "Adriel Oloko"), center links (About, What I do, Projects, Findings), right "Contact Me" pill.
- **Mobile:** hamburger opens a full-screen overlay (Stage Black at 50% plus blur), large serif links, and mono uppercase social links (/ Github, / X [Twitter]).

### Loader
Stage Black (#121212) full-screen overlay with a spinning white lucide Loader2 icon, 400ms fade-out after `useIpAddress` resolves. It must respect reduced-motion by skipping or calming the spinner.

## 7. Motion

- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` everywhere (framer-motion variants). StatsBar uses `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Durations:** 200ms-600ms for entrances, hovers, and accordion transitions; 500ms for form focus lines; 400ms loader fade.
- **Stagger:** 0.12-0.13s staggerChildren for card grids; delays up to 0.9s for footnotes.
- **Grids:** services, portfolio, and findings cards rise with a 0.12s stagger; the findings grid is static (no carousel, no autoplay).
- **Reduced motion:** entrances and the loader should calm to fades, under `prefers-reduced-motion`. Currently partial: honor it fully before launch.

## 8. Do's and Don'ts

### Do:
- **Do** set every display and heading in Cormorant Garamond, and every label/eyebrow/index in JetBrains Mono uppercase with wide tracking.
- **Do** alternate dark stages (hero, process, CTA) with warm light rooms (about, services, portfolio, findings); a single-mood page reads as template.
- **Do** keep Signal Orange to the hero CTA and amber to the findings lounge.
- **Do** use exactly the four named darks and the warm light surfaces; never introduce cool hues.
- **Do** use the single animated GIF stage on hero, services, and CTA only, always with a blur or dark overlay under content.
- **Do** keep cards flat; the system has no card shadows, only the scrollbar chrome.
- **Do** give every interactive element a visible focus state, and honor `prefers-reduced-motion`.
- **Do** frame the engineering: copy, projects, and process must serve the blockchain hire decision (see PRODUCT.md), never generic agency filler.

### Don't:
- **Don't** look like a generic SaaS template: no Inter-everything centered hero, no three identical feature cards, no blue gradient CTA.
- **Don't** use agency cliche: no stock hero photos, no "we are a full-service digital agency" filler, no jargon.
- **Don't** use crypto-bro cliche: no hype words, no gradient everything, no unearned protocol jargon, no fake "blockchain expert" badges.
- **Don't** use the portfolio cliche: no grid of identical screenshot cards with no point of view. The site must feel authored and expressive.
- **Don't** be plain and boring. If a screen could pass for a default template, it has failed.
- **Don't** add a second animated background, video, or canvas; the one GIF is the stage.
- **Don't** reference unloaded fonts (DM Sans) or ship unused ones (Playfair Display, Bebas Neue, Syne, Space Grotesk). Resolve the font stack before further work.
- **Don't** introduce cool dark surfaces, cool grays, or new saturated accents outside the orange/amber families.
- **Don't** use gradient text, side-stripe borders, or decorative glassmorphism. No `background-clip: text`, no border-left accent stripes, no blur-for-its-own-sake (blur only under the GIF, per the Readability Overlay Rule).

## 9. Known Gaps (honest status)

- Font stack: DM Sans referenced but unloaded; Playfair/Bebas loaded but unused; Syne/Space Grotesk declared to nothing. Fix before further design work.
- Form error and disabled states do not exist. Add before launch.
- Focus states exist on the CTA form and nav, but need a full interactive-element audit.
- `prefers-reduced-motion` handling is partial (entrances and loader need to calm/pause).
- Contrast: `text-white/25`-`/40` on dark and `stone-300/400` on light may fail WCAG 2.1 AA; audit against AA as the working target.
