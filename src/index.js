import { React } from './core/React'
import { Menu } from './components/Menu'
import { EditMenu } from './components/editMenu/EditMenu'
import { MenuActions } from './components/menuActions/MenuActions'


const react = new React('#app', {
	components: [Menu, EditMenu, MenuActions],
});

react.render();

console.log('App start');
