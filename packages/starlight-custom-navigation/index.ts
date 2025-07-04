import type { StarlightPlugin, StarlightUserConfig } from '@astrojs/starlight/types'

import starlightCustomNavigationIntegration from './libs/integration.js'
import type { CustomNavOptions } from './types/CustomNavOptions.js'


export default function starlightCustomNavigationPlugin(
  userConfig: CustomNavOptions = {
    //TODO: clean up and refactor the loading of the default options.
    linkLabels: {
      show: true,
      showOnHover: true,
      buttonRadiusNoLabel: 24
    },
    navShortcuts: {
      previous: { key: 'ArrowLeft', modifier: 'ctrl' },
      next: { key: 'ArrowRight', modifier: 'ctrl' }
    },
    svgIcon: {
      svgPath: 'M4 16L12 8L20 16',
      strokeWidth: 2
    },        
    scrollBehavior: {
      hideDelay: 3000,
      hideThreshold: 100
    }
  }
): StarlightPlugin {
  return {
    name: 'starlight-custom-navigation-plugin',
    hooks: {
      'config:setup'({ addIntegration, config: starlightConfig, updateConfig, logger }) {
        logger.info('Hello from the starlight-custom-navigation plugin!')
        const updatedConfig: Partial<StarlightUserConfig> = { components: { ...starlightConfig.components } }

        if (!updatedConfig.components) {
          updatedConfig.components = {}
        }

        if (!starlightConfig.components?.PageFrame) {
          updatedConfig.components.PageFrame = 'starlight-custom-navigation/overrides/PageFrame.astro'
        }
        // Pass the configuration to the integration
        addIntegration(starlightCustomNavigationIntegration(userConfig))
        updateConfig(updatedConfig)
      },
    },
  }
}
