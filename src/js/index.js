import * as assets from './assets/';
import {add, cubes, tails, randomFromOne} from './modules/';


const form = document.getElementById('loginForm');

form.onsubmit = (e) => {
	let login, password;
	e.preventDefault();
	form.children.forEach = [].forEach;
	form.children.forEach((el) => {
		console.log(el);
		if(el.getAttribute('type') === 'text'){
			login = el.value.toLowerCase();
		} else if(el.getAttribute('type') === 'password'){
			password = el.value;
		}
	});

	if(login !== 'admin'){
		alert('I don`t know you! Gerara here!!!');
		return;
	}

	if(password !== 'Чёрный властелин'){
		alert('Wrong Password!!!');
		return;
	}

	alert('Welcome, Master!');
	return;
}