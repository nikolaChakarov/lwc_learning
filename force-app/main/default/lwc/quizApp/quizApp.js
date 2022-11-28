import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    
    myQuestions = [
        {id: 'Question1', question: 'Which one of the following is not a template loop?', answers: {
            a: 'fro:each', b: 'iterator', c: 'map loop'
        }, correctAnswer: 'c'},
        {id: 'Question2', question: 'Which of the file is ivalid in LWC component forlder?', answers: {
            a: '.svg', b: '.apex', c: '.js'
        }, correctAnswer: 'b'},
        {id: 'Question3', question: 'Which one of the following is not a directive?', answers: {
            a: 'fro:each', b: 'if:true', c: '@track'
        }, correctAnswer: 'c'}
    ];

    selected = {} // for storing answers;
    correctAnswers = 0;
    isSubmitted = false;

    changeHandler(e) {
        const {name, value} = e.target;
        this.selected = {...this.selected, [name]: value}
    }

    get allNotSelected() {
        return Object.keys(this.selected).length !== this.myQuestions.length;
    }

    get isScoredFull() {
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ? 'slds-text-color_success':'slds-text-color_error'}`
    }

    handleSubmit(e) {
        e.preventDefault();

        this.checkAnswers(this.myQuestions, this.selected);
        this.isSubmitted = true;

    }

    checkAnswers(arr, obj2) {
       arr.forEach(el => {
       if (el.correctAnswer === obj2[el.id]) this.correctAnswers++;
       });
    }

    resetHandeler(e) {
        this.selected = {};
        this.correctAnswers = 0;
        this.isSubmitted = false;
    }
}