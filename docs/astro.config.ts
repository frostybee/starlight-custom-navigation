import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightCustomNavigation from 'starlight-custom-navigation'

export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl: 'https://github.com/frostybee/starlight-custom-navigation/edit/main/docs/',
      },
      plugins: [starlightCustomNavigation()],
      sidebar: [
        {
          label: 'Start Here',
          items: [{ slug: 'getting-started' }],
        },
      ],
      social: [
        { href: 'https://github.com/frostybee/starlight-custom-navigation', icon: 'github', label: 'GitHub' },
      ],
      title: 'starlight-custom-navigation',
    }),
  ],
})
