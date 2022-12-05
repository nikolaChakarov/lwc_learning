// Toasst Notifications
// Toast is a popup that alert user with some informataion. Toast can be of success, error, info or warning;
// messageData - url and label values that replace th {inex} placeholder in the message string;
// Mode - Determines how persistent the toast is; Valid values are:
// dismissable (default) - Remains visible until the user clicks the close button or 3 seconds has elapsed, whichever comes first;
// pester - visible for 3 seconds;
// sticky - remain visible until the user clicks the close button;

import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class Notifications extends LightningElement {

    toastHandler() {
        // indexes in messageData array
        this.showToast('Success!', '{0} Account Created! {1}', 'success', '', 'sticky');
    }

    toastHandlerTwo() {
        this.showToast('Error!', 'Account Creation failed!', 'error');
    }

    toastHandlerThree() {
        this.showToast('Warning!', 'Password shold have 5 characters!', 'warning');
    }

    toastHandlerFour() {
        this.showToast('Info!', 'Summer 20 release is available!', 'info');
    }

    showToast(title, message, variant, messageDat, mode) {
        const event = new ShowToastEvent({
            title,
            message,
            variant,
            messageData: [
                'Salesforce', {
                    url: "http://www.salesforce.com/",
                    label: 'Click here...'
                }
            ],
            mode: mode ?? 'dismissible'
        });

        this.dispatchEvent(event);
    }

}