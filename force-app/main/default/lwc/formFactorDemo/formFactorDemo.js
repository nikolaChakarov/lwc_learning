// Access Clietn Form Factor
// To access the form factor of the hardware the browser is running on, import the @salesforce/client/formFactor scoped module;
// Possible values are Large: A desktop client; Medium: A tablet client; Small: A phone client;

import { LightningElement } from 'lwc';
import FORM_FACTOR from '@salesforce/client/formFactor';

export default class FormFactorDemo extends LightningElement {
    formFactor = FORM_FACTOR;
}