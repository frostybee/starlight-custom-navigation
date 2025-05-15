import type { Plugin } from 'vite';
import type { CustomNavOptions } from '../types/CustomNavOptions.js';

const virtualModuleId = 'virtual:custom-navigation-options';
const resolvedVirtualModuleId = '\0' + virtualModuleId;

/**
 * This plugin is used to provide the configurations to the CustomPageNavigation component.
 * @param config - The configuration object  containing necessary config options for the starlight-custom-navigation plugin.
 * @returns A Vite plugin that provides the configuration to the CustomPageNavigation component.
 */
export default function starlightCustomNavigationVitePlugin(
  config: CustomNavOptions = {}
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