# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (Vite, hot reload)
npm run build    # production build to dist/
npm run preview  # serve the production build locally
```

## Architecture

Vite + React SPA with CSS Modules. No router — tab state lives in `App.jsx` via `useState`.

Both views (`AllCardsView`, `InteractiveView`) are always mounted so print CSS works correctly on the overview tab regardless of which tab is active. They receive an `active` prop and use CSS (`display: none` / `display: block|flex`) to show/hide.

```
src/
  data/cards.js          # CARDS array (emoji, label, text, color hex) + shuffle() — card content is in Swedish
  components/
    Header.jsx            # tab bar; receives activeTab + onTabChange
    AllCardsView.jsx      # grid of all cards + print button
    Card.jsx              # single card tile (background color via inline style)
    InteractiveView.jsx   # deck draw mechanic with flip animation
```

### InteractiveView state

Uses a `useRef` for the mutable deck array (avoids stale-closure issues inside `setTimeout` callbacks) alongside `useState` for render-triggering values (`remaining`, `current`, `isFlipped`, `isDone`). Card color is applied as an inline `style` on the back face since it comes from data, not CSS classes.

### Styling

Each component has a co-located `.module.css` file. Card background colors are stored as hex values in `cards.js` and applied via inline styles — this avoids the CSS Modules scoping issue with dynamically chosen class names. Print styles live inside the relevant component modules.
