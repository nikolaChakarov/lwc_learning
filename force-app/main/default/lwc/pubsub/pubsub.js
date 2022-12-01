// Component Communication Using PubSub (Publishing and Subscribing);
// There are tow ways to communicate between Independant Components:
// 1. pubsub; - it's an old technique to communicate with the independent components in LWC;
// 2. Lightning Messaaging Service;

// this component will be a service component, it means it is only a javascript no HTML;

/* eslint-disable no-console*/
const store = {};
/** 
 * subscribers a callback for an event
 * @params {string} eventName - Name of the eventg to listen for.
 * @params {function} callback - Function to invoke when said event is fired.
*/
const subscribe = (eventName, callback) => {
    if (!store[eventName]) {
        store[eventName] = new Set();
    }
    store[eventName].add(callback);
    // console.log('subscribe -> ',JSON.stringify(store));
};
/**
 * unsubscribe a callback for an event
 * @params {string} eventName - Name of an event to unsubscribe from;
 * @params {function} callback = Function to unsubscribe;
*/
const unsubscribe = (eventName, callback) => {
    if (store[eventName]) {
        store[eventName].delete(callback);

        // console.log('unsubscribe -> ',JSON.stringify(store));
    }
};

/**
 * Publish an event to listener;
 * @params {string} eventName - Name of the event to jpublish;
 * @params {*} payload - Payload of the event to publish;
*/

const publish = (eventName, payload) => {
    if(store[eventName]) {
        store[eventName].forEach(callback => {
            try {
                callback(payload);
            } catch (error) {
                console.error(JSON.stringify(error));
            }
        });
    }
};

export default {
    subscribe,
    unsubscribe,
    publish
};
