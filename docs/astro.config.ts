import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightCustomNavigation from 'starlight-custom-navigation'

const siteURI = 'https://frostybee.github.io';

export interface StarlightCustomNavigationConfig {
  showLabels?: boolean;
}

export default defineConfig({
  site: siteURI,
  base: "/starlight-custom-navigation",
  integrations: [
    starlight({
      title: 'Starlight Custom Navigation',
      favicon: '/images/navigation-sailing.svg',
      plugins: [
        starlightCustomNavigation({
          linkLabels: {
            show: false,
            showOnHover: true,
            buttonRadiusNoLabel: 15
          },
          navShortcuts: {
            previous: { key: 'ArrowLeft', modifier: 'ctrl' },
            next: { key: 'ArrowRight', modifier: 'ctrl' }
          },
          svgIcon: {
            path: 'm12 19-7-7 7-7',
            strokeWidth: 3
          },
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
            { slug: 'configuration' },
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
