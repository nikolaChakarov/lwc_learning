import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal = false;

    modalHandler() {
        this.showModal = true;
    }

    closeHandlerFromParent() {
        this.showModal = false;
    }
}