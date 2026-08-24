# starlight-custom-navigation

## 1.0.1

### Patch Changes

- [`9a5e7ab`](https://github.com/frostybee/starlight-custom-navigation/commit/9a5e7abd1bbc0fc4d91ff9363e796fa7340e5880) Thanks [@frostybee](https://github.com/frostybee)! - Fix keyboard shortcuts on macOS by using Cmd instead of Ctrl

  On macOS, Ctrl+Arrow is captured by the system for Mission Control and never
  reaches the browser. The shortcut handler now detects macOS at runtime and checks
  Cmd (metaKey) instead of Ctrl. The tooltip chip updates to show "Cmd + →" on Mac and "Ctrl + →" elsewhere. No config change required.

## 1.0.0

### Major Changes

- [`6072684`](https://github.com/frostybee/starlight-custom-navigation/commit/60726842b26697f28d2971af3a95136da76ee565) Thanks [@frostybee](https://github.com/frostybee)! - Replace floating nav buttons with side navigation strips

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
