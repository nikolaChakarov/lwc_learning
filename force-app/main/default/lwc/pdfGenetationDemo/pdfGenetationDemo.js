import { LightningElement } from 'lwc';

export default class PdfGenetationDemo extends LightningElement {
    // imageUrl = 'https://www.sparksuite.com/images/logo.png';
    imageUrl = 'https://cdn-images-1.medium.com/max/980/1*TRe_0SuNo4AWLzbkJZss8Q@2x.png';

    invoiceData = {
        invoiceNo: '123',
        invoiceCreated: 'January 1, 2019',
        invoiceDue: 'January 10, 2020',
        companyName: 'Sparksuite, Inc.',
        address1: '12345 Sunny Road',
        address2: 'Sunnyville, CA 12345'
    }

    clientData = {
        client: 'Acme Corp',
        username: 'John Doe',
        email: 'john@example.com'
    }

    services = [
        {name: 'Consultatn fee', amount: 1000.00},
        {name: 'Website design', amount: 300.00},
        {name: 'Hosting (3 months)', amount: 75.00},
    ]

    get totalAmount() {
        return this.services.reduce((acc, curr) => {
            acc += curr.amount;
            return acc;
        }, 0);
    }

    pdfHandler() {
        let content = this.template.querySelector('.container');
        console.log(content.outerHTML);
    }
}