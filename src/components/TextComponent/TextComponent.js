import { FotonComponent } from '../../core/FotonComponent'
import './TextComponent.css'

export class TextComponent extends FotonComponent {
	static className = 'text-component'

	constructor($root, options) {
		super($root, {
			...options
		});
	}

	toHTML() {
		console.log('props menu', this.props)
		return `<span >${this.props.data}</span>`
	}
}
