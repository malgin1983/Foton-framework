import { Foton } from '../../core/Foton'
import {FotonComponent} from "../../core/FotonComponent";
import {MenuActions} from "../../components/MenuActions/MenuActions";
import {ContainerMenu} from "../../components/ContainerMenu/ContainerMenu";


export class InputMenuPage extends FotonComponent {
	static className = 'wrapper-input-page'

	constructor($root, options) {
		super($root, {
			...options
		});
	}

	toHTML() {
		return null
	}

	init() {
		new Foton('#app', {
			components: [MenuActions, ContainerMenu],
			className: 'input-page',
			props: {arr: [1,2,3,4], inputArr: [1,2,3,4,5]}
		}).render();
	}
}
