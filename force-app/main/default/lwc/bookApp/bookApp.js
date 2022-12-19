import { LightningElement } from 'lwc';
const BOOK_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export default class BookApp extends LightningElement {
    query = 'Man';
    books = [];
    timer;

    connectedCallback() {
      this.fetchBookData(this.query);
    }

    handleChange(e) {
        window.clearTimeout(this.timer);
        this.query = e.target.value.trim() || 'Man';

        this.timer = setTimeout(() => {
            this.fetchBookData(this.query);
        }, 1000);
    }

    fetchBookData(input) {
        fetch(BOOK_URL + input)
        .then(res => res.json())
        .then(data => {
            this.books = data.items;
            // console.log(data);
        })
        .catch(err => console.log(err))
    }

}