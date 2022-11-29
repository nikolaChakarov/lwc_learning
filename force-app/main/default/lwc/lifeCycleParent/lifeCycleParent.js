// WLC lifecycle hooks;
// A lifecycle hook is a callback method triggered at a specific phase of a component instance lifecycle.
// MOUNTING PHASE: CONSTRUCTOR();  CONNECTEDCALLBACK(); RENDEREDCALLBACK();
// UNMOUNTING PHASE: DISCONNECTEDCALLBACK();
// ERROR PHASE: ERRORCALLBACK();

// CONSTRUCTOR METHOD
// This hook is invoked, when a component instance is created;
// You have to call super() first inside this;
// At this point component properties won't be ready yet;
// To access the host element use this.template;
// This method lifecycle flows from PARENT to CHILD component;
// we can't access child element in the component body, because they don't exist yet;
// Don't add attributes to the host element in the constructor;

// CONNECTEDCALLBACK MEHTOD
// Called when the element is inserted into a document;
// This hook flows from PARENT to CHILD;
// we can't access child element in the component body, because they don't exist yet;
// You can access host element with this.template;
// USE IT TO: Perform initialization tasks, such as fetch data, set up cashes, or listen for events(such as public subscribe events);
// DO NOT USE IT:  connectedCallback() to change the state of the component, such as loading values or setting properties. Use getters and setters instead;

// RENDEREDCALLBACK METHOD
// Fires when a component rendering is done;
// It can fire more then once;
// This hook flows from CHILD to PARENT;
// When a component re-renders, all the expressions used in the template are reevaluated;
// DO NOT USE IT: to change the state or update a property of a component;
// Don't update a wire adapter configuration object property in renderCallback(), as it can result in an infinite loop;

// disconnectedCallback() mthod
// Fires when the component is removed from the DOM;
// it flows from parent to child;
// this callback mehtod is specific to Lightning Web Component, it isn't from HTML custom elements specification;

import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    constructor() {
        super();
        console.log('parent constructor called');
    }
    renderedCallback() {
        console.log('parent renderedCallback() called');
    }
    
    connectedCallback() {
        console.log('parent connectedCallback() called');
    }

    name;
    changeHandler(e) {
        this.name = e.target.value;
    }

    showChild = true;
    handleClick(e) {
        this.showChild = !this.showChild;
    }

    get labelBtn() {
        return this.showChild ? 'Remove Child' : 'Show Child';
    }
    
}