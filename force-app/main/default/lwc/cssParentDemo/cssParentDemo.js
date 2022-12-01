// CSS Behaviour in Parent Child Component;
// 1. Parent CSS can't reach into a child component;
// 2. A parent component CSS can style a host element(<c-css-child>);
// 3. A child component CSS can reach up and style its own host element;
// 4. You can style to a element pass into the slot from the parent component only;

import { LightningElement } from 'lwc';

export default class CssParentDemo extends LightningElement {}