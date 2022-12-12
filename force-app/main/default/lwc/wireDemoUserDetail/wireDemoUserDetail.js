// How to import reference from Salesforce Standard Object;
// syntax: import objectName from '@salesforce/schema/object';
// example: import ACCOUNT_OBJECT from '@salesforce/schema/Account';

// How to import reference from Salesforce Custom Object;
// syntax: import objectName from '@salesforce/schema/object';
// example: import PROPERTY_OBJECT from '@salesforce/schema/Property__c'

import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
const fields = [NAME_FIELD, EMAIL_FIELD];

import Id from '@salesforce/user/Id';

export default class WireDemoUserDetail extends LightningElement {
    userId = Id;
    // 0051x00000CJbhiAAD

    // @wire(adapter, { adapterConfig })
    // propertyOrFunction;

    userDetails;

    // function aproach
    @wire(getRecord, { recordId: '0051x00000CJbhiAAD', fields })
    userDetailHandler({ data, error: err }) {
        if (data) {
            this.userDetails = data.fields;
        }

        if (err) {
            console.error(err);
        }
    }

       // property aproach
       // for the fields: Salesforce recomend to use references, not hard coded like that. so use the aproach above;
       @wire(getRecord, { recordId: '0051x00000CJbhiAAD', fields: ['User.Name', 'User.Email'] })
       userDetailProperty;
}