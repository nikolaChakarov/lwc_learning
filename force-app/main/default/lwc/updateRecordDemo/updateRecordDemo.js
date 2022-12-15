import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import { updateRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
const COLS = [
    {label: 'Id', fieldName: 'Id'},
    {label: 'Name', fieldName: 'Name'},
    {label: 'Title', fieldName: 'Title'},
    {label: 'Phone', fieldName: 'Phone', editable: true},
    {label: 'Email', fieldName: 'Email', type: 'email', editable: true},
]

export default class UpdateRecordDemo extends LightningElement {
    contacts = [];
    columns = COLS;
    draftValues = [];

    @wire(getListUi, {
        objectApiName: CONTACT_OBJECT,
        listViewApiName: 'AllContacts'
    })
    listViewHandler({ data, error }) {
        if (data) {
            console.log(data);
            this.contacts = data.records.records.map(el => ({
                Id: this.getData(el, 'Id'),
                Name: this.getData(el, 'Name'),
                Title: this.getData(el, 'Title'),
                Phone: this.getData(el, 'Phone'),
                Email: this.getData(el, 'Email'),
            }))
        }

        if (error) {
            console.log(error);
        }
    }

    getData(data, field) {
        return data.fields[field].value;
    }

    handleSave(e) {
        console.log(e.detail);

        const recordInputs = e.detail.draftValues.map(el => {
            const fields = {...el};
            return { fields: fields }
        });

        console.log(JSON.stringify(recordInputs));

        const promises = recordInputs.map(record => updateRecord(record));
        Promise.all(promises)
            .then(() => {
                console.log('Contact updated successfully');
            })
            .catch(err => console.log(err))
    }

}