import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateRecordDemo extends LightningElement {

     formFields = {};

    changeHandler(e) {
        const {name, value} = e.target;
        this.formFields[name] = value;
    }

    createContact(e) {
        const recordInput = {
            apiName: CONTACT_OBJECT.objectApiName,
            fields: this.formFields
        }

        createRecord(recordInput)
            .then(res => {
                 this.showToast('Success!!', `contact created with ID: ${res.id}`);
                 this.template.querySelector('form.create-form').reset();
                 this.formFields = {};
        })
            .catch(err => {
                this.showToast('Error Creating record', err.body.message, 'error');
                console.log(err);
            })
    }


    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({
            title, message, variant: variant || 'success'
        }))
    }
}