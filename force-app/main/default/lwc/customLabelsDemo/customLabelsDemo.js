import { LightningElement } from 'lwc';
import DESCRIPTION_ONE from '@salesforce/label/c.descriptionOne';
import DESCRIPTION_TWO from '@salesforce/label/c.descriptionTwo';

export default class CustomLabelsDemo extends LightningElement {
    // descriptionTwo = DESCRIPTION_TWO;
    // descriptionOne = DESCRIPTION_ONE;
    
    LABELS = {
        descriptionOne: DESCRIPTION_ONE,
        descriptionTwo: DESCRIPTION_TWO,
    }
}