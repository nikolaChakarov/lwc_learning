import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {

    closeHandlerFromChild() {
        // const closeModal = new CustomEvent('childcustomevent');
        // this.dispatchEvent(closeModal);

        this.dispatchEvent(new CustomEvent('childcustomevent', {
            detail: {
                msg:  'Moda Closed Successfully!'
            },
            bubbles: true
        }));
    };

}