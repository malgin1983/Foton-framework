import { FotonComponent } from '../../core/FotonComponent'
import './TextButton.css'

export class TextButton extends FotonComponent {
	static className = 'text-button'

	constructor($root, options) {
		super($root, {
			...options
		});
	}

	toHTML() {
		return `<div class="text-button-component">${this.props.data}</div>`
	}
}
