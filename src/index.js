import { Foton } from './core/Foton'
import { EditMenu } from './components/EditMenu/EditMenu'
import { MenuActions } from './components/MenuActions/MenuActions'


const foton = new Foton('#app', {
	components: [MenuActions, EditMenu],
	className: 'root-class',
	props: {arr: [1,2,3,4] }
});

foton.render();

console.log('App start');
