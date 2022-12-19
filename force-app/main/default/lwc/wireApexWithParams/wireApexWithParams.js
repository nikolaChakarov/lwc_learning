import { LightningElement, wire } from 'lwc';
import  filterAccountType  from '@salesforce/apex/AccountController.filterAccountType'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class WireApexWithParams extends LightningElement {
    search = '';
    type = '';
    accounts = [];
    typing = false;

    get isTyping() {
        return this.typing;
    }

    @wire(filterAccountType, { type: '$type' }) 
    handleFilterAccount({ data, error }) {

        if (data) {
            // console.log(data);
            this.accounts = data;
        }
        
        if (!this.accounts.length && this.search) {
            this.showToast('Error', 'No such a TYPE', 'error');
        }
        
        if (error) {
            console.log(error);
        }
    }

    timer;
    delay = 1000;
    handleSearch(e) {
        clearTimeout(this.timer);
        let value = e.target.value;
        this.typing = true;

        this.timer = setTimeout(() => {
            this.search = value;
            this.typing = false;
        }, this.delay);
    }

    handleClick(e) {
        this.type = this.search;
    }

    showToast(title, message, variant) {
        const toast = new ShowToastEvent({ title, message, variant: variant ? variant : 'success' });
        this.dispatchEvent(toast);
    }

}