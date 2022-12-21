// Setter Method
// this method is use to modified the data coming from parent component. If Object is passed as data to setter, to mutate the object we have to create a shallow copy.

import { LightningElement, api } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    // userDetail;

    // @api
    // get detail() {
    //     return this.userDetail;
    // }

    // set detail(data) {
    //     this.userDetail = data;
    // }

    userDetailFromChild;
    
    @api 
    get detail() {
        return this.userDetailFromChild;
    }

    set detail(data) {
        const newData = JSON.parse(JSON.stringify(data));
        newData.name = 'new name deep copy';
        newData.location = 'Melbourn';
        this.userDetailFromChild = newData;
    }

    connectedCallback() {
        console.log(JSON.stringify(this.userDetailFromChild));
    }
}