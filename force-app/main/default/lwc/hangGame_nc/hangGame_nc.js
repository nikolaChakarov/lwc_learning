import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import { loadStyle } from 'lightning/platformResourceLoader';
import FONT_AWESOME from '@salesforce/resourceUrl/fontawesome';

export default class HangGame_nc extends LightningElement {
    isLoaded = false;
    time = '00:00';
    counter = 0;
    moves = 0;
    currentWord = '';
    letter = '';

    words = ['Viva Las Vegas', '4 aces', 'Bond James Bond'];
    @track guess = [];
    letters = [];

    handleInputChange(e) {
        
        if (e.target.value.length > 1) {
            const toast = new ShowToastEvent({
               title: 'Error!',
               message: 'Only one letter...', 
            });

            this.dispatchEvent(toast);
            e.target.value = '';
            return;
        }
        
        this.letter = e.target.value.trim();
    }

    handleCheck() {
        if (this.letter === '') return;

        this.moves++;

        if (this.currentWord.toLowerCase().includes(this.letter.toLowerCase())) {
            this.letters.push(this.letter);

            const set = new Set(this.letters);

            this.letters = [...set];
        }

        console.log(JSON.stringify(this.letters));
    }

    get isInUse() {
        return this.letters.includes(this.letter);
    }
    

    makeCustomStyles() {
        const slds_card__header = document.createElement('style');
        slds_card__header.innerText = `c-hang-game_nc .slds-card .slds-card__header{
            padding: 0;
            margin: 0;
        }` ;
        this.template.querySelector('lightning-card').appendChild(slds_card__header);


        const slds_input_focus = document.createElement('style');
        slds_input_focus.innerText = `c-hang-game_nc .slds-input:focus{
            border-color: red;
            box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.3);
        }`
        this.template.querySelector('lightning-input').appendChild(slds_input_focus);
    }

    initWord() {
        let index = Math.floor(Math.random() * this.words.length);
        this.currentWord = this.words[index];
    
        console.log(JSON.stringify(this.currentWord));
    }

    connectedCallback() {
        this.initWord();
    }

    renderedCallback() {
        if (this.isLoaded) return;

        Promise.all([
            loadStyle(this, FONT_AWESOME + '/fontawesome/css/font-awesome.min.css'),
        ])
            .then(() => console.log('Font Awesome loaded...'))
            .catch(err => console.log(JSON.stringify(err)))

       this.makeCustomStyles();

        this.isLoaded = true;
    }

}