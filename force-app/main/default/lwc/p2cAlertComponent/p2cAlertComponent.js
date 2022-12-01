import { LightningElement, api } from 'lwc';

export default class P2cAlertComponent extends LightningElement {
    @api messageChild;
    @api cardHeading
    @api number
    @api isValid
}