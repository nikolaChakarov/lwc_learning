import { LightningElement } from 'lwc';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
import FONT_AWESOME from '@salesforce/resourceUrl/fontawesome';
import MOMENT from '@salesforce/resourceUrl/moment';


export default class MemoryGameLwc extends LightningElement {
    isLibLoaded = false; 
    moves = 0;
    time = '00:00';
    clicked = [];
    timerId;
    counter = 0;
    match = 0;

    showModal = false;
    
    cards = [
        {id: 1, listClass: 'card', type: 'diamond', icon: 'fa fa-diamond'},
        {id: 2, listClass: 'card', type: 'plane', icon: 'fa fa-paper-plane-o'},
        {id: 3, listClass: 'card', type: 'anchor', icon: 'fa fa-anchor'},
        {id: 4, listClass: 'card', type: 'bolt', icon: 'fa fa-bolt'},
        {id: 5, listClass: 'card', type: 'cube', icon: 'fa fa-cube'},
        {id: 6, listClass: 'card', type: 'anchor', icon: 'fa fa-anchor'},
        {id: 7, listClass: 'card', type: 'leaf', icon: 'fa fa-leaf'},
        {id: 8, listClass: 'card', type: 'bicycle', icon: 'fa fa-bicycle'},
        {id: 9, listClass: 'card', type: 'diamond', icon: 'fa fa-diamond'},
        {id: 10, listClass: 'card', type: 'bomb', icon: 'fa fa-bomb'},
        {id: 11, listClass: 'card', type: 'leaf', icon: 'fa fa-leaf'},
        {id: 12, listClass: 'card', type: 'bomb', icon: 'fa fa-bomb'},
        {id: 13, listClass: 'card', type: 'bolt', icon: 'fa fa-bolt'},
        {id: 14, listClass: 'card', type: 'bicycle', icon: 'fa fa-bicycle'},
        {id: 15, listClass: 'card', type: 'plane', icon: 'fa fa-paper-plane-o'},
        {id: 16, listClass: 'card', type: 'cube', icon: 'fa fa-cube'},
    ];

    closeModal() {
        this.showModal = false;
    }

    renderedCallback() {
        if (this.isLibLoaded) return;

        Promise.all([
            loadStyle(this, FONT_AWESOME + '/fontawesome/css/font-awesome.min.css'),
            loadScript(this, MOMENT + '/moment/moment.min.js')
        ]).then(() => {
            this.isLibLoaded = true;
        }).catch(err => console.error(JSON.stringify(err)))

        // loadStyle(this, FONT_AWESOME + '/fontawesome/css/font-awesome.min.css')
        //     .then(res => {
        //         this.isLibLoaded = true;
        //     })
        //     .catch(err => console.error(JSON.stringify(err)))
    }

    displayCard(e) {
        if (this.clicked.length === 2) return;

        const liEl = e.target;
        liEl.classList.add('show');
        this.clicked.push(liEl);
        
        if (this.clicked.length) {
            this.checkIsMatch();
            this.moves++;
        }

        if (this.moves === 1) {
            this.formatTime();
        }
    }

    checkIsMatch() {
        const [firstLi, secondLi] = this.clicked;

        if (firstLi.type === secondLi.type) {
            this.clicked.forEach(el => el.classList.add('match'));
            this.match++;
            this.clicked = [];

            
            if (this.match === this.cards.length / 2) {
                clearInterval(this.timerId);
                this.showModal = true;
            }
            return;
        };

        setTimeout(() => {
            this.reset();
        }, 1000);
    }

    formatTime() {
       this.timerId = setInterval(() => {
        this.counter++;
        let sec = this.counter % 60 < 9 ? '0' + this.counter % 60 : this.counter % 60;
        let min = Math.floor(this.counter / 60) < 9 ? '0' + Math.floor(this.counter / 60) : Math.floor(this.counter / 60);

        this.time = `${min}:${sec}`;
       }, 100);
    }

    reset() {
        this.clicked.forEach(el => el.classList.remove('show'));
        this.clicked = [];
    }

    restartGame() {
        [...this.template.querySelectorAll('.show')]
            .forEach(el => el.classList.remove('show', 'match'));

        this.moves = 0;
        this.counter = 0;
        this.match = 0;
        this.time = '00:00';
        clearInterval(this.timerId);

        this.shuffle();
    }

    shuffle() {
        const newDeck = [...this.cards];
        let deckLength = newDeck.length;

        while(deckLength > 0) {
            deckLength--;
            let index = Math.floor(Math.random() * newDeck.length);
            
            let temp = newDeck[deckLength];
            newDeck[deckLength] = newDeck[index];
            newDeck[index] = temp;
        }

        this.cards = [...newDeck];
    }
}