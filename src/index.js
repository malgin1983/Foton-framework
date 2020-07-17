import { Foton } from './core/Foton'
import { EditMenu } from './components/EditMenu/EditMenu'
import { MenuActions } from './components/MenuActions/MenuActions'
import {EditInputMenu} from "./components/EditInputMenu/EditInputMenu";


const foton = new Foton('#app', {
	components: [MenuActions, EditInputMenu],
	className: 'root-class',
	props: {arr: [1,2,3,4], inputArr: [1,2,3,4,5]}
});

foton.render();

console.log('App start');
