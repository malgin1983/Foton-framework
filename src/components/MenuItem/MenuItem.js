import { FotonComponent } from '../../core/FotonComponent'
import './MenuItem.css'
export class MenuItem extends FotonComponent {
	static className = 'menu-action-item'

	constructor($root, options) {
		super($root, {
			...options
		});
	}

	toHTML() {
		return `<span  class="menu-action-item__text" >Пункт ${this.props.data}</span>`
	}
}

