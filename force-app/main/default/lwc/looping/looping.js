import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = [];
    buttonLabel = 'Show Cars';

    ceoList = [
        {id: 1, company: 'Google', name: 'Sundar Pichai' },
        {id: 2, company: 'Apple Inc', name: 'Tim Cook' },
        {id: 3, company: 'Facebook', name: 'Mark Zuckerberg' },
        {id: 4, company: 'Amazon.com', name: 'Jeff Bezos' },
    ]

    showCars() {
        if (!this.carList.length) {
            this.carList = ['Ford', 'Audi', 'Opel', 'Toyota', 'Mercedec'];
            this.buttonLabel = 'Hide Cars'
            return
        };

        this.carList = [];
        this.buttonLabel = 'Show Cars';
    }
}