import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightCustomNavigation from 'starlight-custom-navigation'

const siteURI = 'https://frostybee.github.io';
export default defineConfig({
  site: siteURI,
  base: "/starlight-custom-navigation",
  integrations: [
    starlight({
      editLink: {
        baseUrl: 'https://github.com/frostybee/starlight-custom-navigation/edit/main/docs/',
      },
      plugins: [starlightCustomNavigation()],
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
      title: 'Starlight Custom Navigation',
    }),
  ],
})
