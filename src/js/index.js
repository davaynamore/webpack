import * as assets from './assets/';


import makeBigger from './modules/make-bigger';


const title = document.createElement('h1');
document.body.appendChild(title);

title.innerText = 'Hello world';


makeBigger(title);