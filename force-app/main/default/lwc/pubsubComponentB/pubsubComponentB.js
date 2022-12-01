import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubsubComponentB extends LightningElement {
    message;
    connectedCallback() {
        this.callSubscriber();
    };

    _msg = (msg) => {
        this.message = msg;
    }

    callSubscriber() {
        pubsub.subscribe('componentA', this._msg);
    };

    // disconnectedCallback() {
    //     pubsub.unsubscribe('componentA', this._msg);
    // }
}