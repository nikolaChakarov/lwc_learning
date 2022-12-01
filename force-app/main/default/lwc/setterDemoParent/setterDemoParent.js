import { LightningElement } from 'lwc';

export default class SetterDemoParent extends LightningElement {
    userDetails = {
        name: 'salesforcetroop',
        age: 30,
        test: {
            x: 1
        }
    }
}