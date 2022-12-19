import { LightningElement } from 'lwc';
import findAccounts from '@salesforce/apex/AccountController.findAccounts';

export default class ApexImperativeWithParamsDemo extends LightningElement {
    accounts;
    searchKey = '';
    timer;

    searchHandler(e) {
        window.clearTimeout(this.timer);
        this.searchKey = e.target.value;

        this.timer = setTimeout(() => {
            this.callApex();
        }, 1000);
    }

    callApex() {
        findAccounts({ searchKey: this.searchKey })
            .then(res => {
                // console.log('data...', res);
                this.accounts = res
            })
            .catch(err => console.log(err))
    }

}       