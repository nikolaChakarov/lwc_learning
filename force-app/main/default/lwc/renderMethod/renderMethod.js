// RENDER() method
// Render is a method that tells the component which template to load based on some conditions. It always return the template reference (which template to load);
// The render() method is not technically a lifecycle hook. It is a protected method on the LightningElement class;
// Call this method to update the UI. It may be called before or after connectedCallback();
// It's rare to call render() in a component. The main use case is to conditionally render a tempate;

import { LightningElement } from 'lwc';

import signinTemplate from './signinTemplate.html';
import signoutTemplate from './signoutTemplate.html';
import renderTemplate from './renderMethod.html';

export default class RenderMethod extends LightningElement {

    selectedBtn = '';
    render() {
        return this.selectedBtn === 'Signin' ? signinTemplate :
               this.selectedBtn === 'Signup' ? signoutTemplate :
               renderTemplate;
    }

    handleClick(e) {
        this.selectedBtn = e.target.label;
    }

    goBack() {
        this.selectedBtn = '';
    }
}