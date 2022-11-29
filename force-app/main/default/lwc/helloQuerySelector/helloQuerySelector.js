import { LightningElement } from 'lwc';

export default class HelloQuerySelector extends LightningElement {
    userNames = ['John', 'Smith', 'Nik', 'Mike'];

    fetchDetailHanlder() {
        const headingEl = this.template.querySelector('h1');
        headingEl.style.border = '2px dashed red';

        const userElements = this.template.querySelectorAll('.name');

        [...userElements].forEach(el => {
            el.setAttribute('title', el.innerText);
        });

        // lwc:dom="manual" demo
        const childEl = this.template.querySelector('.child');
        childEl.innerHTML = '<p>this is a child element</p>';

    }
}