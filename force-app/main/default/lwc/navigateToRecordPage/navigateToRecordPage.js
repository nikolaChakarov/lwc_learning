import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {
    // @api recordId 

    recordViewMode() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                // recordId: recordId,
                recordId: '0031j00001SOraOAAT',
                objectApiName: 'Contact',
                actionName: 'view'
            }
        })
    }

    recordEditMode() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                // recordId: recordId,
                recordId: '0031j00001SOraOAAT',
                objectApiName: 'Contact',
                actionName: 'edit'
            }
        })
    }
}