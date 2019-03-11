//app.js
//import foo from './hello';
import hello from './hello'; 
import React from 'react';
import ReactDom from 'react-dom';
import style from '../css/style';
import Person from './person'; //-- Person Class import 


hello();

//-- Person Class 사용 
var person = new Person(1, "철수");
person.printName();


ReactDom.render(
    <h1>Hello world!!!</h1>, 
    document.getElementById('root')
);