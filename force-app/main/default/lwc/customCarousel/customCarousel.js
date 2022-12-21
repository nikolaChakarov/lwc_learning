import { LightningElement, api } from 'lwc';

const VISIBLE_CLASSES = 'slds-show';
const HIDDEN_CLASSES = 'slds-hide';
const DOT_CLASS= 'dot';
const DOT_ACTIVE_CLASS= 'dot active';

export default class CustomCarousel extends LightningElement {
    slideImages = [];
    currentSlideIndex = 0;
    intervalId;
    scorll;
    
    @api delayChild;

    @api
    get slidesData() {
        return this.slideImages;
    }

    set slidesData(data) {
        this.renderCarousel(this.currentSlideIndex, data);
    }

    @api
    get scrollChild() {
        return this.scorll;
    }

    set scrollChild(data) {
        this.scorll = data;
    }

    connectedCallback() {
        this.carouselControl();
    }

    stopCarousel() {
        window.clearInterval(this.intervalId);
        this.currentSlideIndex--;
    }

    startCarousel() {
        this.carouselControl()
    }

    carouselControl() {   
        
        if (this.scorll) {
            this.intervalId = window.setInterval(() => {
                this.renderCarousel(this.currentSlideIndex, this.slideImages);
                this.currentSlideIndex++;
                if (this.currentSlideIndex === this.slideImages.length) {
                        this.currentSlideIndex = 0;
                    }

                }, Number(this.delayChild));
        }
    }


    disconnectedCallback() {
       if (this.scorll) {
            window.clearInterval(this.intervalId);
       }
    }


    handlePrev() {
        this.currentSlideIndex <= 0 ?
        this.currentSlideIndex = this.slideImages.length - 1 :
        this.currentSlideIndex--;
        
        this.renderCarousel(this.currentSlideIndex, this.slideImages);
        console.log(this.currentSlideIndex);
    }
    
    handleNext() {
        this.currentSlideIndex >= this.slideImages.length - 1 ?
        this.currentSlideIndex = 0 :
        this.currentSlideIndex++;
        
        this.renderCarousel(this.currentSlideIndex, this.slideImages);
        console.log(this.currentSlideIndex);
    }

    handleDotClick(e) {
        const dotIndex = Number(e.target.dataset.dot);
        this.currentSlideIndex = dotIndex;
        this.renderCarousel(dotIndex, this.slideImages);
    }

    renderCarousel(index, data) {
        this.slideImages = data.map((slide, idx) => {
            return index === idx ? 
                 {
                     ...slide,
                     slideIndex: idx + 1,
                     slideClass: VISIBLE_CLASSES,
                     dotClass: DOT_ACTIVE_CLASS
                 } : {
                     ...slide,
                     slideIndex: idx + 1,
                     slideClass: HIDDEN_CLASSES,
                     dotClass: DOT_CLASS
                 }
         })
    }

}