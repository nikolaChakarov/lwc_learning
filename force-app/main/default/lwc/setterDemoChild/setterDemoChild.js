import { LightningElement, api } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    userDetailFromChild;
    
    @api 
    get detail() {
        return this.userDetail;
    }

    set detail(data) {
        const newData = JSON.parse(JSON.stringify(data));
        newData.name = 'new name deep copy';
        newData.location = 'Melbourn';
        this.userDetailFromChild = newData;
    }

    connectedCallback() {
        console.log(JSON.stringify(this.detail));
    }
}