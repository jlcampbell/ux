import { PLATFORM, bindingMode } from 'aurelia-framework';
import { CheckedObserver, EventSubscriber } from 'aurelia-binding';
import { AureliaUX } from '@aurelia-ux/core';
export { UxRadioTheme } from './ux-radio-theme';
export { UxRadio } from './ux-radio';
export function configure(config) {
    config.container.get(AureliaUX).registerUxElementConfig(uxRadioConfig);
    config.globalResources([
        PLATFORM.moduleName('@aurelia-ux/radio/ux-radio')
    ]);
}
const uxRadioConfig = {
    tagName: 'ux-radio',
    properties: {
        checked: {
            defaultBindingMode: bindingMode.twoWay,
            getObserver(element, _, observerLocator) {
                return new CheckedObserver(element, new EventSubscriber(['change']), observerLocator);
            }
        }
    }
};
