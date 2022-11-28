import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false;
    name;

    handleClick() {
        this.isVisible = !this.isVisible;
    }

    handleChange(e) {
        this.name = e.target.value;
    }

    get helloMessage() {
        return this.name == 'hello';
    }
}