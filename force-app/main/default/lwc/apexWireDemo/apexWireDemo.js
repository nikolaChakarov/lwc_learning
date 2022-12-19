import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';

export default class ApexWireDemo extends LightningElement {
    accountList;

    @wire(getAccountList)
    accounts;

    @wire(getAccountList)
    accountsHandler({ data, error }) {
        
        if (data) {
            this.accountList = data.map(item => {
                const newType = item.Type === 'Customer - Channel' ? 'Customer' :
                item.Type === 'Customer - Direct' ? 'Direct' : '-------';

                return {
                    ...item,
                    Type: newType
                }
            });
            // console.log(JSON.stringify(this.accountList));
        }

        if (error) {
            // console.log(error);
        }
    }
}   