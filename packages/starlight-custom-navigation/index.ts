import type { StarlightPlugin, StarlightUserConfig } from '@astrojs/starlight/types'

import starlightCustomNavigationIntegration from './libs/integration.js'
import { DEFAULT_CONFIG, type CustomNavOptions } from './types/CustomNavOptions.js'

export default function starlightCustomNavigationPlugin(
  userConfig: CustomNavOptions = DEFAULT_CONFIG
): StarlightPlugin {
  return {
    name: 'starlight-custom-navigation-plugin',
    hooks: {
      'config:setup'({ addIntegration, config: starlightConfig, updateConfig }) {
        const updatedConfig: Partial<StarlightUserConfig> = { components: { ...starlightConfig.components } }

        if (!updatedConfig.components) {
          updatedConfig.components = {}
        }

        if (!starlightConfig.components?.Pagination) {
          updatedConfig.components.Pagination = 'starlight-custom-navigation/overrides/Pagination.astro'
        }
        // Pass the configuration to the integration
        addIntegration(starlightCustomNavigationIntegration(userConfig))
        updateConfig(updatedConfig)
      },
    },
  }
}
