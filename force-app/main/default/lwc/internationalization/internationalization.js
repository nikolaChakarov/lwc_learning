// Internationalization Properties
// Lightning web components have internationalization properties that you can use to adapt your componets for users worldwide, across languages, currencies, and timezones.

import { LightningElement } from 'lwc';
import LOCAL from '@salesforce/i18n/local';
import CURRENCY from '@salesforce/i18n/currency';
import DIR from '@salesforce/i18n/dir';

export default class Internationalization extends LightningElement {
    number = 6575557.86
    dir = DIR;

    formatedNumber = new Intl.NumberFormat(LOCAL, {
        style: 'currency',
        // currency: CURRENCY,
        currency: 'EUR',
        currencyDisplay: 'symbol'
    }).format(this.number);
}