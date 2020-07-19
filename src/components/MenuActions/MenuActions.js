import { FotonComponent } from '../../core/FotonComponent'
import { Foton } from '../../core/Foton'
import { MenuItem } from '../MenuItem/MenuItem'
import './MenuActions.css'
import {TextComponent} from "../TextComponent/TextComponent";
import {ComponentSeparator} from "../ComponentSeparator/ComponentSeparator";

export class MenuActions extends FotonComponent {
	static className = 'wrapper-menu-actions'

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
		 // this.$root.style.backgroundColor = '#E2E9E0' почему не проходит?
		const{arr} = data

		new Foton('#menu-actions', {
			components: [TextComponent, ComponentSeparator],
			className: 'menu-logo',
			props: {data: 'Меню'}
		}).render();

		arr.map(item => {
			return new Foton('#menu-actions', {
				components: [MenuItem],
				className: 'block',
				props: {data: item}

			}).render();
		})
	}
}

