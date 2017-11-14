import { swatches } from '@aurelia-ux/core';
export class UxTextareaTheme {
    constructor() {
        this.themeKey = 'textarea';
        this.foreground = swatches.grey.p900;
        this.background = 'transparent';
        this.borderBottom = `1px solid ${swatches.grey.p500}`;
        this.borderBottomHover = '1px solid var(--ux-design--accent)';
        this.borderBottomFocus = 'var(--ux-design--accent)';
        this.diabledForeground = swatches.grey.p500;
        this.disabledBorderBottom = `1px dashed ${swatches.grey.p300}`;
        this.fullWidthBorder = `1px solid ${swatches.grey.p200}`;
        this.fullWidthBackground = swatches.white;
        this.fullWidthBackgroundDisabled = swatches.grey.p200;
        this.error = swatches.red.p500;
    }
}
