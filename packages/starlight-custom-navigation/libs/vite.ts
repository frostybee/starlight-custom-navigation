import type { Plugin } from 'vite';
import type { StarlightCustomNavigationConfig } from '../types/CustomNavigationConfig.js';

const virtualModuleId = 'virtual:starlight-custom-navigation-config';
const resolvedVirtualModuleId = '\0' + virtualModuleId;

/**
 * This plugin is used to provide the configurations to the CustomPageNavigation component.
 * @param config - The configuration object  containing necessary config options for the starlight-custom-navigation plugin.
 * @returns A Vite plugin that provides the configuration to the CustomPageNavigation component.
 */
export default function starlightCustomNavigationVitePlugin(
  config: StarlightCustomNavigationConfig = {}
): Plugin {
  return {
    name: 'starlight-custom-navigation-vite',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export const config = ${JSON.stringify(config)};`;
      }
    }
  };
} 