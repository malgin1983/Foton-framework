import { FotonComponent } from '../../core/FotonComponent'
import { Foton } from '../../core/Foton'
import { MenuItem } from '../MenuItem/MenuItem'
import './MenuActions.css'

export class MenuActions extends FotonComponent {
	static className = 'wrapper-menu'

	constructor($root, options) {
		super($root, {
			...options
		});
	}

	toHTML() {
		return '<div id="menu-actions"></div>'
	}

	init(options) {
		const data = this.props
		const{arr} = data
		arr.map(item => {
			return new Foton('#menu-actions', {
				components: [MenuItem],
				className: 'menu-actions-container',
				props: {data: item}

			}).render();
		})
	}
}

