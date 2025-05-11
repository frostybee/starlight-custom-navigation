import type { AstroIntegration } from 'astro';

export default function starlightCustomNavigationIntegration(): AstroIntegration {

    return {
    name: 'starlight-custom-navigation',
    hooks: {
      'astro:config:setup':  ({ injectScript }) => {


      },
      'astro:build:done': ({ logger }) => {
        logger.info(`Starlight custom navigation plugin has been installed successfully! Button position:`);
      }
    }
  };
}
