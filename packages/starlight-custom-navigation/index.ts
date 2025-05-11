import type { StarlightPlugin, StarlightUserConfig } from '@astrojs/starlight/types'

import starlightCustomNavigationIntegration from './libs/integration.js'

export default function starlightCustomNavigationPlugin(): StarlightPlugin {
  return {
    name: 'starlight-custom-navigation-plugin',
    hooks: {
      'config:setup'({ addIntegration, config, updateConfig, logger }) {
        /**
         * This is the entry point of your Starlight plugin.
         * The `config:setup` hook is called when Starlight is initialized (during the Astro `astro:config:setup`
         * integration hook).
         * To learn more about the Starlight plugin API and all available options in this hook, check the Starlight
         * plugins reference.
         *
         * @see https://starlight.astro.build/reference/plugins/
         */
        logger.info('Hello from the starlight-custom-navigation plugin!')
        const updatedConfig: Partial<StarlightUserConfig> = { components: { ...config.components } }

        if (!updatedConfig.components) {
          updatedConfig.components = {}
        }

        if (!config.components?.PageFrame) {
          // updatedConfig.components.PageFrame = 'starlight-custom-navigation/overrides/PageFrame.astro'
        }

        addIntegration(starlightCustomNavigationIntegration())
        // updateConfig(updatedConfig)
      },
    },
  }
}
