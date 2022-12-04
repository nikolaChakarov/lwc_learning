import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c'

import { MessageContext, subscribe, APPLICATION_SCOPE, unsubscribe } from 'lightning/messageService';

export default class LmsComponentX extends LightningElement {
    receivedMessage;
    subscribtion;
    @wire(MessageContext)
    context;

    renderedCallback() {
        console.log('context ', this.context);
    }


    subscribeMessage() {
        // subscribe(messageContext, messageChannel, listener, subscriberOptions);
        this.subscribtion = subscribe(this.context, SAMPLEMC, (message) => this.handleMessage(message),  {scope: APPLICATION_SCOPE})
    }

    handleMessage(message) {
        this.receivedMessage = message.lmsData.value ? message.lmsData.value : 'NO Message published';
    }

    handleUnsubscribe() {
        unsubscribe(this.subscribtion);
        this.subscribtion = null;
    }

    connectedCallback() {
        this.subscribeMessage();
    }
}