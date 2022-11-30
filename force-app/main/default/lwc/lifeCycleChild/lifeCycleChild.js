import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor() {
        super();
        console.log('child constructor called');
    }
    renderedCallback() {
        console.log('child renderedCallback() called');
    }
    
    connectedCallback() {
        console.log('child connectedCallback() called');

        // doesn't send enything in the parent errorCallback(); ?
        // throw new Error('Loading of child component faild...')
        throw ('Loading of child component faild...')
    }
    
    disconnectedCallback() {
        console.log('child disconnectedCallback() called');
    }
}