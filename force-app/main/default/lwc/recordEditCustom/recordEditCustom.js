import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';


export default class RecordEditCustom extends LightningElement {
    objectName = ACCOUNT_OBJECT;
    inputValue = 'init value...';
    disabled = false;

    timer;
    delay = 1000;

    debouncedSearch(e) {
        clearTimeout(this.timer);

        let value = e.target.value;

        this.timer = setTimeout(() => {
            if (value) {
                this.inputValue = value;

                console.log(this.inputValue);
            }
        }, this.delay);
    }

    successHandler(e) {
        const id = e.detail.id;
        
        const toast = new ShowToastEvent({
            title: 'Record ID: '  + id,
            message: 'Your record has been made',
            variant: 'success'
        });
        
        this.dispatchEvent(toast);
    }
    
    handleError(e) {
        const message = e.detail.message;

        const toast = new ShowToastEvent({
            title: 'Error!!!',
            message,
            variant: 'error'
        });

        this.dispatchEvent(toast);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.disabled = true;

        
        const inputEl = this.template.querySelector('lightning-input');
        const value = inputEl.value;
        if (value.length <= 2) {
            inputEl.setCustomValidity('The account name must be min 2 characters long')
        } else {
            inputEl.setCustomValidity('');
            const fields = e.detail.fields;
            fields.Name = value;
            this.template.querySelector('lightning-record-edit-form').submit(fields);
        }

        inputEl.reportValidity();

        setTimeout(() => this.disabled = false, 1000);
    }

}