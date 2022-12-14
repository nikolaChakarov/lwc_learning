import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FILED from '@salesforce/schema/Account.Name';
import OWNER_NAME_FILED from '@salesforce/schema/Account.Owner.Name';
import ANNUAL_REVENUE_FILED from '@salesforce/schema/Account.AnnualRevenue';

export default class GetRecordDemo extends LightningElement {
    name;
    owner;
    annualRevenue;

    @api recordId;

    // @wire(getRecord, { recordId: '$recordId', fields: [NAME_FILED, OWNER_NAME_FILED, ANNUAL_REVENUE_FILED] })

    // this aproach returns all the fields in the record
    @wire(getRecord, { recordId: '$recordId', layoutTypes: ['Full'], modes: ['View'] })
    accountHandler({ data, error }) {
        if (data) {
            this.name = data.fields.Name.value;
            this.owner = data.fields.Owner.displayValue;
            this.annualRevenue = data.fields.AnnualRevenue.displayValue;
        }
    }
}