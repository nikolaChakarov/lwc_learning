// Passing Markup into Slots
// Markup is HTML Template
// 1. Slot is useful to pass HTML markup into the another component;
// 2. <slot></slot> markup is used to catch the HTML passed by parent component;
// 3. You can't pass an Aura component into a slot;


import { LightningElement } from 'lwc';

export default class SlotParentDemo extends LightningElement {}