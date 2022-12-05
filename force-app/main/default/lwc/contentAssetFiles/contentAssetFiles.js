// Content Asset Files
// import content asset files from the @salesforce/contentAssetUrl scoped module. 

import { LightningElement } from 'lwc';
import TYPESCRIPT_FILE from '@salesforce/contentAssetUrl/typescripthandbookpdf';

export default class ContentAssetFiles extends LightningElement {
    file = TYPESCRIPT_FILE;
} 