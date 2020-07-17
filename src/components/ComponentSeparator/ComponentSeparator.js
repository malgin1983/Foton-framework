import { FotonComponent } from '../../core/FotonComponent'
import './ComponentSeparator.css'

export class ComponentSeparator extends FotonComponent {
	static className = 'component-separator'

	constructor($root, options) {
		super($root, {
			...options
		});
	}

	toHTML() {
		return `<div class="component-separator-line" ></div>`
	}
}
