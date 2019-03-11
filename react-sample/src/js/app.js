//app.js
//import foo from './hello';
import hello from './hello'; 
import React from 'react';
import ReactDom from 'react-dom';
import style from '../css/style';
import Person, {Participant} from './person.js';

hello();

//---- 1
//-- Person Class 사용 
var person = new Person(1, "철수");
console.log('Person 객체');
person.printName();

//---- 2
var participant = new Participant(1, "영희", "샤넬?");
console.log('Participant 객체');

participant.printName();
participant.sendMessage('하악하악');

//---- 3 
console.log('Person 객체');
person.printName();

ReactDom.render(
    <h1>Hello world!!!</h1>, 
    document.getElementById('root')
);