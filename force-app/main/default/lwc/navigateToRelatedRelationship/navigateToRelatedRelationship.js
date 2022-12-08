import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateToRelatedRelationship extends NavigationMixin(LightningElement) {
    // @api recordId 

    navigateToRelatedList() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: '0011j00001mrewCAAQ',
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            }
        })
    }

}