import { LightningElement, api } from 'lwc';

export default class MemoryGameModal extends LightningElement {

    @api movesCh;
    @api timeCh;

    handleCloseModal() {
        const event = new CustomEvent('closemodal');
        this.dispatchEvent(event);
    }

    handleRestart() {
        this.handleCloseModal();

        const event = new CustomEvent('restartgame', {
            data: {
                test: 'test test test'
            }
        });
        this.dispatchEvent(event);
    }
    
}