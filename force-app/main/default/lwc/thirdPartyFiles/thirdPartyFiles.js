import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment';
import ANIMATE from '@salesforce/resourceUrl/animate';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';

export default class ThirdPartyFiles extends LightningElement {
    isMomentLibLoaded = false;
    currentDate = '';

    renderedCallback() {
       if (this.isMomentLibLoaded) return;

       Promise.all([
           loadStyle(this, ANIMATE + '/animate/animate.min.css'),
           loadScript(this, MOMENT + '/moment/moment.min.js'),
        ])
        .then(() => {
            // success
            this.setDateOnScreen();
            this.isMomentLibLoaded = true;
        })
        .catch((err) => {
            console.error(JSON.stringify(err));
        });

    }

    setDateOnScreen() {
        this.currentDate = moment().format('LLLL');
    }
}