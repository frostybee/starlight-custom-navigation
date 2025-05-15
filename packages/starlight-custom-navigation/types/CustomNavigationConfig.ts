/**
 * The configuration object for the starlight-custom-navigation plugin.
 * @property showLabels - Whether to show the labels on the navigation buttons.
 */
export interface StarlightCustomNavigationConfig {
    /**
     * Whether to show the labels on the navigation buttons.
     * @default true
     */
    showLabels?: boolean;
    /**
     * Whether to show the labels in tooltips when hovering over navigation buttons.
     * @default true
     */
    showLabelsOnHover?: boolean;
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
     * The SVG path data for the navigation button icons.
     * @default { path: 'M4 16L12 8L20 16' }
     */
    buttonIcon?: {
        path: string;
    };
    /**
     * The radius of the navigation buttons when labels are hidden.
     * @default 24px
     */
    buttonRadius?: number;
}

