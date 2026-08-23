import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightCustomNavigation from 'starlight-custom-navigation'

const siteURI = 'https://frostybee.github.io';

export default defineConfig({
  site: siteURI,
  base: "/starlight-custom-navigation",
  integrations: [
    starlight({
      title: 'Starlight Custom Navigation',
      favicon: '/images/navigation-sailing.svg',
      plugins: [
        starlightCustomNavigation({
          navShortcuts: {
            previous: { key: 'ArrowLeft', modifier: 'ctrl' },
            next: { key: 'ArrowRight', modifier: 'ctrl' }
          },
          scrollBehavior: {
            hideDelay: 3000,
            hideThreshold: 100
          }
        })],
      sidebar: [
        {
          label: 'Getting Started',
          items: [{ slug: 'getting-started' },
          ]
        },
        {
          label: 'Features & Configuration',
          items: [
            { slug: 'features' },
            { slug: 'configuration' }
          ],
        },
      ],
      social: [
        { href: 'https://github.com/frostybee/starlight-custom-navigation', icon: 'github', label: 'GitHub' },
      ],
      editLink: {
        baseUrl: 'https://github.com/frostybee/starlight-custom-navigation/edit/main/docs/',
      },
    }),
  ],
})
