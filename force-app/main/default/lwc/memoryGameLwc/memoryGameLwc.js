import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import FONT_AWESOME from '@salesforce/resourceUrl/fontawesome';

export default class MemoryGameLwc extends LightningElement {
    isLibLoaded = false; 

    renderedCallback () {
        if (this.isLibLoaded) return;

        loadStyle(this, FONT_AWESOME + '/fontawesome/css/font-awesome.min.css')
            .then(res => {
                this.test(res)
                this.isLibLoaded = true;
            })
            .catch(err => console.error(JSON.stringify(err)))

    }

    test(data) {
        console.log(JSON.stringify(data));
        console.log('loaded successfully!');
    }

}