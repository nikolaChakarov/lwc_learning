// getObjectInfo
// use this wire adapter to get metadata about a specific object. The response includes metadata describing the object's fields, child relattionships, record type, and theme;

// getObjectInfos;
// Use this wire adapter to gt metadata for multiple objects. The respose includes meatadata describing the fields, child relationships, record type, and theme for each object;

import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi';

import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'

export default class GetObjectInfoDemo extends LightningElement {

    defaultRecordTypeId;
    apiName;

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo({ data, error: err }) {
        if (data) {
            this.defaultRecordTypeId = data.defaultRecordTypeId;
            this.apiName = data.apiName;
            // console.log(data);
        }

        if (err) {
            console.error(err);
        }
    }

    objectApiNames = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT];

    objectInfos;

    @wire(getObjectInfos, { objectApiNames: '$objectApiNames' })
    objectInfosHandler({ data }) {
        if (data) {
            this.objectInfos = data;

            // console.log(this.objectInfos);
        }
    }


}