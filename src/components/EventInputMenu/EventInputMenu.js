import { FotonComponent } from '../../core/FotonComponent'
import { Foton } from '../../core/Foton'
import {InputComponent} from "../InputComponent/InputComponent";
import {TextComponent} from "../TextComponent/TextComponent";
import './EventInputMenu.css'

export class EventInputMenu extends FotonComponent {
	static className = 'wrapper-menu-event-input'

	constructor($root, options) {
		super($root, {
			...options
		});
	}

	toHTML() {
		return '<div class="event-input-menu"></div>'
	}

	init(options) {
		const data = this.props
		const{inputArr} = data

		new Foton('.event-input-menu', {
			components: [TextComponent],
			className: 'menu-logo',
			props: {data: 'Настройка меню :'}

		}).render()

		inputArr.map((item, idx) => {
			return new Foton('.event-input-menu', {
				components: [InputComponent],
				className: 'block',
				props: {data: idx}

			}).render();
		})
	}
}
