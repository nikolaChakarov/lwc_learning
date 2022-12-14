import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetPicklistValuesByRecordType extends LightningElement {
    ownershipSelected = '';
    ownershipList = [];
    ratingSelected = '';
    ratingOptions = [];

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo;

    @wire(getPicklistValuesByRecordType, { objectApiName: ACCOUNT_OBJECT, recordTypeId: '$objectInfo.data.defaultRecordTypeId'}) 
    pickListHandler({ data, error }) {

        if (data) {
            this.ownershipList = [...this.picklistGenerator(data.picklistFieldValues.Ownership.values)];

            this.ratingOptions = [...this.picklistGenerator(data.picklistFieldValues.Rating.values)];
        }

        if (error) {
            console.log(error);
        }
    }

    picklistGenerator(data) {
        console.log(data);
        return data.map(el => {
            const { label, value } = el;
            return { label, value };
        })
    }

    handlePicklistChange(e) {
        const listName = e.target.dataset.name;
        listName === 'ownership' ? this.ownershipSelected = e.detail.value : this.ratingSelected = e.detail.value;
    }
   
}