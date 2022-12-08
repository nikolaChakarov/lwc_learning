import { LightningElement, api} from 'lwc';

export default class NavigateLwcTarget extends LightningElement {
    @api recordId;
    @api test;

    renderedCallback() {
        console.log(JSON.stringify(this.recordId));
        console.log(JSON.stringify(this.test));
    }
}