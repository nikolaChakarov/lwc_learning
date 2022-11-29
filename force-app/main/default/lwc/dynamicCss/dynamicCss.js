import { LightningElement } from 'lwc';

export default class DynamicCss extends LightningElement {
    percent = 10;

    changeHandler(e) {
        this.percent = Number(e.target.value);
    };

    get percentage() {
        return `width:${this.percent}%`;
    }
}