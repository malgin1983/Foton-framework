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
		console.log('MenuItem props', this.props)
		return `<span >Пункт ${this.props.data}</span>`
	}
}

