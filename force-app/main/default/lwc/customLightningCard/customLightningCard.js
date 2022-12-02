import { LightningElement } from 'lwc';

export default class CustomLightningCard extends LightningElement {

    handleSlotFooterChange(e) {
        const footerEl = this.template.querySelector('footer');

        if (footerEl) {
            footerEl.classList.remove('slds-hide');
        }
    }

}