import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateToLwc extends NavigationMixin(LightningElement) {

    navigateToLwc() {
        let definition = {
            componentDef: 'c:navigateLwcTarget',
            attributes: {
                recordId: '2423542352345235',
                test: {
                    arr:[1, 2, 3]
                }
            }
        }

        this[NavigationMixin.Navigate]({
            type: 'standard__webPage', 
            attributes: {
                url: '/one/one.app#' + btoa(JSON.stringify(definition))
            }
        })
    }

}