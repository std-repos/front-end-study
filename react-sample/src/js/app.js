//app.js
//import foo from './hello';
import hello from './hello'; 
import React from 'react';
import ReactDom from 'react-dom';
import style from '../css/style';
import Person from './person';



hello();

ReactDom.render(
    <h1>Hello world!!!Hello world!!!</h1>, 
    document.getElementById('root')
);