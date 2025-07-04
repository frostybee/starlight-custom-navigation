import type { AstroIntegration } from 'astro';
import type { CustomNavOptions } from '../types/CustomNavOptions.js';
import starlightCustomNavigationVitePlugin from './vite.ts';

export default function starlightCustomNavigationIntegration(
  userConfig: CustomNavOptions = {}  
): AstroIntegration {
  return {
    name: 'starlight-custom-navigation-integration',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => {
        // Add the Vite plugin to the Astro config
        updateConfig({
          vite: {
            plugins: [starlightCustomNavigationVitePlugin(userConfig)]
          }
        });
      },
      'astro:build:done': ({ logger }) => {
        logger.info(`Starlight custom navigation plugin has been installed successfully! Configuration: ${JSON.stringify(userConfig)}`);
      }
    }
  };
}
