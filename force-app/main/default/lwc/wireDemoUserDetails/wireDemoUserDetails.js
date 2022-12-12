import { LightningElement, wire } from 'lwc';

// adapter
import { getRecord } from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/User.Name';
import NAME_EMAIL from '@salesforce/schema/User.Email';
const fields = [ NAME_FIELD, NAME_EMAIL];

import Id from '@salesforce/user/Id';


export default class WireDemoUserDetails extends LightningElement {
    userId = Id;

    //0051j00000Ck7MHAAZ

    // @wire(adapter, {adapterConfig})
    // propertyOrFunction

    userDetail;

    // $userId - this is the syntax to make variable 'reactive' because import Id from '@salesforce/user/id is asyncronous operation, we need to wait until we have a data to work width.'  
    @wire(getRecord, {recordId: '$userId', fields})
    userDetailHandler({ data, error: err }) {
        if (data) {
            this.userDetail = data.fields;
        }

        if (err) {
            console.error(err);
        }
    }

    @wire(getRecord, {recordId: '0051j00000Ck7MHAAZ', fields: [ 'User.Name', 'User.Email' ]})
    userDetailProperty;

}