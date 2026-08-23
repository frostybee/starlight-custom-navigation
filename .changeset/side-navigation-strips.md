---
"starlight-custom-navigation": major
---

Replace floating nav buttons with side navigation strips

- Upgrade to Astro v7 / Starlight 0.41
- Full-height vertical strips on desktop (1280px+) with hover tooltips showing page title and keyboard shortcut
- Compact circular floating buttons on smaller screens with auto-hide
- Override Starlight's Pagination component instead of MarkdownContent
- Keep Starlight's built-in bottom pagination links
- Add showTooltip option to toggle hover tooltips
- Add scrollBehavior option for compact button auto-hide timing
- Keyboard shortcuts suppressed while typing or when search dialog is open
- Accessibility: aria-keyshortcuts, focus-visible styles, reduced-motion support
- Remove linkLabels, svgIcon, and buttonRadiusNoLabel options
