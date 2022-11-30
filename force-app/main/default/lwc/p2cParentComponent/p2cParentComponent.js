import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    message = 'message from parent to child...';
    progress = 10;

    carouselData = [
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header: 'First Card',
            description: 'First Description'
        },
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header: 'Second Card',
            description: 'Second Description'
        },
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header: 'Third Card',
            description: 'Third Description'
        }

    ]

    changeHandler(e) {
        this.progress = Number(e.target.value);
    }
}
