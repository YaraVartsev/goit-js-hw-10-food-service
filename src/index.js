import menu from './menu.json';
import templates from './templates/templates.hbs'
import './theme.js';
import './styles.css';

const menuList = document.querySelector('.js-menu');

const createMenu = templates(menu);
menuList.insertAdjacentHTML('beforeend', createMenu);
