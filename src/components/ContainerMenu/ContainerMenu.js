import { FotonComponent } from '../../core/FotonComponent'
import { Foton } from '../../core/Foton'
import {EditInputMenu} from "../EditInputMenu/EditInputMenu";
import {EventInputMenu} from "../EventInputMenu/EventInputMenu";
import './ContainerMenu.css'

export class ContainerMenu extends FotonComponent {
	static className = 'wrapper-container-menu'

	constructor($root, options) {
		super($root, {
			...options
		});
	}

	toHTML() {
		return '<div class="container-menu"></div>'
	}

	init() {
		new Foton('.container-menu', {
			components: [EditInputMenu, EventInputMenu],
			className: 'input-page',
			props: {arr: [1,2,3,4], inputArr: [1,2,3,4,5]}
		}).render();
	}
}

