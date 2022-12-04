// 1. Reference a message channel in LWC;
// 2. Inport LMS API: import { MessageContext, publish, subscribe, unsubscribe, APPLICATION_SCOPE } from 'lightning/messageService';
// 3. Message context WIRE ADAPTER is used to get information of all LWC using LMS;

import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import { MessageContext, publish } from 'lightning/messageService';

export default class LmsComponentA extends LightningElement {
    inputValue;

    @wire(MessageContext)
    context;


    inputHandler(e) {
        this.inputValue = e.target.value;
    }

    publishMessage(e) {
        const message = {
            // lmsData commes is the field name inside the SampleMessageChannel file! 
            lmsData: {
                value: this.inputValue
            }
        }
        // publish(messageContext, messageChannel, message)
        publish(this.context, SAMPLEMC, message);
    }
}