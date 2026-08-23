<h1 align="center">Custom Navigation</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/starlight-custom-navigation"><img src="https://img.shields.io/npm/v/starlight-custom-navigation.svg" alt="npm version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT"></a>
</p>

<p align="center">
  <a href="https://frostybee.github.io/starlight-custom-navigation/"><strong>Documentation</strong></a> ·
  <a href="https://frostybee.github.io/starlight-custom-navigation/configuration/">Configuration</a> ·
  <a href="https://github.com/frostybee/starlight-custom-navigation/releases">Releases</a>
</p>

A plugin for Astro Starlight that adds vertical side navigation strips for moving between pages, with hover tooltips, keyboard shortcuts, and swipe gestures.

## Features

- Vertical navigation strips beside the page content on wide screens,
- Compact floating buttons with auto-hide on smaller screens,
- Hover tooltip showing the destination page title and keyboard shortcut,
- Customizable keyboard shortcuts (Ctrl + Arrow keys by default),
- Touch swipe gestures for mobile navigation,
- Uses Starlight's `--sl-` prefixed CSS variables for consistent styling,
- Keeps Starlight's built-in previous/next pagination at the bottom of the page,
- Accessible by default (focus styles, `aria-keyshortcuts`, reduced-motion support),
- RTL layout support.

## Installation

```bash
npm install starlight-custom-navigation
```

## Usage

Add the plugin to your `astro.config.mjs` file:

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightCustomNavigation from 'starlight-custom-navigation';

export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
      plugins: [starlightCustomNavigation()]
    })
  ]
});
```

## Configuration

All [options are optional](https://frostybee.github.io/starlight-custom-navigation/configuration/) with sensible defaults. You can customize the plugin with the following options:

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightCustomNavigation from 'starlight-custom-navigation';

export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
      plugins: [
        starlightCustomNavigation({
          // Show tooltip on hover/focus (default: true)
          showTooltip: true,
          // Keyboard shortcuts
          navShortcuts: {
            previous: { key: 'ArrowLeft', modifier: 'ctrl' },
            next: { key: 'ArrowRight', modifier: 'ctrl' }
          },
          // Auto-hide of the compact floating buttons (below 1280px)
          scrollBehavior: {
            hideDelay: 3000,
            hideThreshold: 100
          }
        })
      ]
    })
  ]
});
```

## Documentation

For more details, check out the [plugin documentation](https://frostybee.github.io/starlight-custom-navigation/).

## License

Licensed under the MIT License, Copyright © frostybee.

See [LICENSE](/LICENSE) for more information.
