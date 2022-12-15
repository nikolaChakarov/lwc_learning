import { LightningElement, wire, api } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi';

export default class GetRecordUiDemo extends LightningElement {
    formFields = [
        {fieldName: 'AccountNumber', 'label': 'Account Number'},
        {fieldName: 'AnnualRevenue', 'label': 'Annual Revenu'},
        {fieldName: 'Name', 'label': 'Name'},
        {fieldName: 'Phone', 'label': 'Phoner'},
    ]
    @api recordId;
    @wire(getRecordUi, { recordIds: '$recordId', layoutTypes: 'Full', modes: 'Edit' })
    accountRecordUiHandler({ data, error }) {
        if (data) {
            this.formFields = this.formFields.map(el => ({
                ...el,
                value: data.records[this.recordId].fields[el.fieldName].value
            }))
            console.log(data);
        }

        if (error) {
            console.error(error);
        }
    }
}