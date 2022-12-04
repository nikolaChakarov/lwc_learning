import { LightningElement } from 'lwc';
import USER_IMAGE from '@salesforce/resourceUrl/user_image';
import USER_WALKING from '@salesforce/resourceUrl/user_walking';

export default class StaticImages extends LightningElement {
    user_image = USER_IMAGE;
    user_walking = USER_WALKING;
}