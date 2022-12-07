// Setter Method
// this method is use to modified the data coming from parent component. If Object is passed as data to setter, to mutate the object we have to create a shallow copy.

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