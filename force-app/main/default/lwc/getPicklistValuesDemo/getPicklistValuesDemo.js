import { LightningElement, wire } from 'lwc';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetPicklistValuesDemo extends LightningElement {
    // defaultRecordTypeId = '';
    // showValues = false;

    selectedIndustry = '';
    industryOptions = [];
    selectedType = '';
    typeOptions = [];

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo;


    // @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    // getAccountObject({ data, error: err }) {
    //     if (data) {
    //         console.log('account: ', data);
    //         this.defaultRecordTypeId = data.defaultRecordTypeId;

    //         console.log(this.defaultRecordTypeId);
    //     }

    //     if (err) {
    //         console.log(err);
    //     }
    // }

    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: INDUSTRY_FIELD })
    industryPicklist({ data, error: err }) {
        if (data) {
            // console.log( 'picklist values: ', data);

            this.industryOptions = [...this.generatePickList(data.values)];
        }

        if (err) {
            console.error(err);
        }
    }

    // getValuesHandler(e) {
    //     const currentBtn = e.target.dataset.name;

    //     currentBtn === 'show' ? this.showValues = true : this.showValues = false;
    // }

    // value = 'inProgress';
    
    // get options() {
        //     return [
            //         { label: 'New', value: 'new' },
            //         { label: 'In Progress', value: 'inProgress' },
            //         { label: 'Finished', value: 'finished' },
            //     ];
            // }
            
            // handleChange(event) {
                //     this.value = event.detail.value;
                // }
                
         

        //  get industries() {
        //     return this.values;
        //  }

         handlePicklistChange(e) {
            //  this.selectedIndustry = e.target.value;
             this.selectedIndustry = e.detail.value;

         }

         generatePickList(data) {
            return data.map(el => {
                const { label, value } = el;
                return { label, value };
            })
         }

         handleSubmit() {
            if (this.selectedIndustry) console.log(this.selectedIndustry);
         }

         // SECOND PICKLIST for type
         @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: TYPE_FIELD })
         typePicklist({ data, error: err }) {
             if (data) {
                 // console.log( 'picklist values: ', data);
     
                 this.typeOptions = [...this.generatePickList(data.values)];
             }
     
             if (err) {
                 console.error(err);
             }
         }

         handleTypeChange(e) {
            this.selectedType = e.detail.value;
         }

    }