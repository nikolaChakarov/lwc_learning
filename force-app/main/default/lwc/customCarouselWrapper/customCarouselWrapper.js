import { LightningElement, track } from 'lwc';
import CAROUSEL_IMAGES from '@salesforce/resourceUrl/carousel';

export default class CustomCarouselWrapper extends LightningElement {

    delay = 1000;
    scroll = true;
    slides = [
        { 
            image: `${CAROUSEL_IMAGES}/carousel/photo1.jpg`,
            heading: 'Caption one',
            description: 'You can add description on the first slide here'
        },
        { 
            image: `${CAROUSEL_IMAGES}/carousel/photo2.jpg`,
            heading: 'Caption two',
            description: 'You can add description on the second slide here'
        },
        { 
            image: `${CAROUSEL_IMAGES}/carousel/photo3.jpg`,
            heading: 'Caption three',
            description: 'You can add description on the third slide here'
        },
    ]

}