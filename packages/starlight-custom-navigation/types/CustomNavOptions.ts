/**
 * The configuration object for the starlight-custom-navigation plugin.
 */
export interface CustomNavOptions {
    /**
     * The keyboard shortcuts to be used for navigating between pages.
     * @default { previous: { key: 'ArrowLeft', modifier: 'ctrl' }, next: { key: 'ArrowRight', modifier: 'ctrl' } }
     */
    navShortcuts?: {
        previous?: {
            key: string;
            modifier: 'ctrl' | 'alt' | 'shift' | 'meta';
        };
        next?: {
            key: string;
            modifier: 'ctrl' | 'alt' | 'shift' | 'meta';
        };
    };
    /**
     * Whether to show the tooltip with the page title and shortcut when
     * hovering or focusing a navigation strip.
     * @default true
     */
    showTooltip?: boolean;
    /**
     * Auto-hide behavior of the compact floating buttons (below 1280px).
     * @default { hideDelay: 3000, hideThreshold: 100 }
     */
    scrollBehavior?: {
        /**
         * Time in milliseconds of inactivity before the buttons fade out.
         * @default 3000
         */
        hideDelay?: number;
        /**
         * Scroll distance in pixels required to bring hidden buttons back.
         * @default 100
         */
        hideThreshold?: number;
    };
}

/**
 * The default configuration, shared by the plugin entry point and the
 * navigation component.
 */
export const DEFAULT_CONFIG = {
    showTooltip: true,
    navShortcuts: {
        previous: { key: 'ArrowLeft', modifier: 'ctrl' },
        next: { key: 'ArrowRight', modifier: 'ctrl' }
    },
    scrollBehavior: {
        hideDelay: 3000,
        hideThreshold: 100
    }
} as const satisfies CustomNavOptions;
