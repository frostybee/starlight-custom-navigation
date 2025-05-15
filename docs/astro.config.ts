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
          showLabels: false,
          showLabelsOnHover: true,
          navShortcuts: {
            previous: { key: 'ArrowLeft', modifier: 'ctrl' },
            next: { key: 'ArrowRight', modifier: 'ctrl' }
          },
          buttonIcon: {
            path: 'm12 19-7-7 7-7'
          },
          buttonRadius: 10
        })],
      sidebar: [
        {
          label: 'Start Here',
          items: [{ slug: 'getting-started' },
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
