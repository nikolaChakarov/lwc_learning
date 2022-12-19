import { LightningElement } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';

export default class DeleteRecordDemo extends LightningElement {
    recordId;

    changeHandler(e) {
        this.recordId = e.target.value;
    }

    deleteHandler(e) {
        deleteRecord(this.recordId)
            .then(() => console.log(`Record with ID: ${this.recordId} deleted successfully!`))
            .catch(err => console.log(err))
    }
}