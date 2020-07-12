import { Foton } from '../../core/Foton'
import { EditMenu } from '../../components/EditMenu/EditMenu'
import { MenuActions } from '../../components/MenuActions/MenuActions'
import {FotonComponent} from "../../core/FotonComponent";
import {MenuItem} from "../../components/MenuItem/MenuItem";


export class InputMenuPage extends FotonComponent {
	static className = 'wrapper-menu'

	constructor($root, options) {
		super($root, {
			...options
		});
	}

	toHTML() {
		return '<div id="menu-actions"></div>'
	}

	init() {
		new Foton('#menu-actions', {
			components: [MenuItem , MenuItem , MenuItem, MenuItem],
			className: 'menu-actions-container'
		}).render();
	}
}
