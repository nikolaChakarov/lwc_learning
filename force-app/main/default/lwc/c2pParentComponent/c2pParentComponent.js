import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal = false;
    msg;

    modalHandler() {
        this.showModal = true;
    }

    closeHandlerFromParent(e) {
        this.msg = e.detail.msg;
        
        this.showModal = false;
    }
}