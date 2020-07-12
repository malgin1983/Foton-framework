import { Foton } from './core/Foton'
import { EditMenu } from './components/EditMenu/EditMenu'
import { MenuActions } from './components/MenuActions/MenuActions'


const foton = new Foton('#app', {
	components: [MenuActions, EditMenu, ],
	className: 'root-class',
});

foton.render();

console.log('App start');
