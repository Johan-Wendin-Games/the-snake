# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (Vite, hot reload)
npm run build    # production build to dist/
npm run preview  # serve the production build locally
```

## Architecture

Vite + React + TypeScript SPA with CSS Modules. No router — tab state lives in `App.tsx` via `useState`.

Both views (`AllCardsView`, `InteractiveView`) are always mounted so print CSS works correctly on the overview tab regardless of which tab is active. They receive an `active` prop and use CSS (`display: none` / `display: block|flex`) to show/hide.

```
cards/
  *.mdx                  # one file per card — card content is in Swedish (see format below)
src/
  data/cards.ts          # loads all /cards/*.mdx via import.meta.glob and exports CARDS + shuffle()
  components/
    Header.tsx            # tab bar; receives activeTab + onTabChange
    AllCardsView.tsx      # grid of all cards + print button
    Card.tsx              # single card tile (background color via inline style)
    InteractiveView.tsx   # deck draw mechanic with flip animation
```

### Card format

Each card is an MDX file in `cards/`. Frontmatter defines the metadata; the body is the card text rendered as a React component:

```mdx
---
emoji: "🍪"
label: "Aktivitet ihop"
color: "#fde8c8"
---

Vi bakar kakor eller muffins tillsammans idag!
```

To add a card: create a new `.mdx` file in `cards/`. To remove one: delete the file. No code changes needed.

### InteractiveView state

Uses a `useRef` for the mutable deck array (avoids stale-closure issues inside `setTimeout` callbacks) alongside `useState` for render-triggering values (`remaining`, `current`, `isFlipped`, `isDone`). Card color is applied as an inline `style` on the back face since it comes from data, not CSS classes.

### Styling

Each component has a co-located `.module.css` file. Card background colors are stored as hex values in the MDX frontmatter and applied via inline styles — this avoids the CSS Modules scoping issue with dynamically chosen class names. Print styles live inside the relevant component modules.
