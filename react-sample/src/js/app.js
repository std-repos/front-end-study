//app.js
import foo from './hello';
import React from 'react';
import ReactDom from 'react-dom';
import style from '../css/style';

hello();

ReactDom.render(
    <h1>Hello world!!!Hello world!!!</h1>, 
    //invalid();
    document.getElementById('root')
    /*
    
    class Person {
        constructor (id,name) {
            this.id = id;
            this.name = name;
        }
        printName() {
            console.log(this.name);
        }
    }
     var person = new Person(1, "철수");
     person.printName();
    */
);