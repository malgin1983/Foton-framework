import { Foton } from './core/Foton'
import {InputMenuPage} from "./Pages/InputMenu/InputMenuPage";


const foton = new Foton('#app', {
	components: [ InputMenuPage],
});

foton.render();

console.log('App start');
