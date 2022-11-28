// Data binding in the Lightning web component is the synchronization between the controller and the template(HTML);
// when a field contains an object or an array, there's a limit to the depth of changes that are tracked. To tell the framework to observe changes to the properties of an object or the elements of an array, decorate the field with @track
// Without using @track, the framework observe changes that assign a new value to a field/property. If the new value is not === equal to the previous value, the component re-renders. 

import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = 'Zero to Hero';
    title = 'aura';

    // @track address = {
    //     city: 'Melbourne',
    //     postcode: 3008,
    //     country: 'Australia',
    // here I test if it tracks deep or shalow: deep!
    //     test: {
    //         first: {
    //             name: 'London'
    //         }
    //     }
    // };

    // not to mutate data
    address = {
        city: 'Melbourn',
        postcode: 3008,
        country: 'Australia'
    }

    changeHandler(e) {
        this.title = e.target.value;
    }

    trackHandler(e) {
        this.address = {...this.address, 
            [e.target.name]: e.target.value}
    }

    // getter exemple
    users = ['john', 'smith', 'kika'];
    num1 = 10;
    num2 = 2;

    get firstUser() {
        return this.users[0];
    }

    get multiply() {
        return this.num1 * this.num2;
    }
   
}