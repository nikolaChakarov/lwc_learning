import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue, getFieldDisplayValue } from 'lightning/uiRecordApi';
import NAME_FILED from '@salesforce/schema/Account.Name';
import OWNER_NAME_FILED from '@salesforce/schema/Account.Owner.Name';
import ANNUAL_REVENUE_FILED from '@salesforce/schema/Account.AnnualRevenue';

export default class GetRecordDemo extends LightningElement {
    name;
    owner;
    annualRevenue;

    @api recordId;
    
    // this aproach returns all the fields in the record
    // @wire(getRecord, { recordId: '$recordId', layoutTypes: ['Full'], modes: ['View'] })
    
    @wire(getRecord, { recordId: '$recordId', fields: [NAME_FILED, OWNER_NAME_FILED, ANNUAL_REVENUE_FILED] })
    accountHandler({ data, error }) {
        if (data) {
            this.name = getFieldValue(data, NAME_FILED);
            this.owner = getFieldValue(data, OWNER_NAME_FILED);
            this.annualRevenue = getFieldDisplayValue(data, ANNUAL_REVENUE_FILED);
        }
    }
}