import { FotonComponent } from '../../core/FotonComponent'
import { Foton } from '../../core/Foton'
import './EditInputMenu.css'
import {InputComponent} from "../InputComponent/InputComponent";
import {TextComponent} from "../TextComponent/TextComponent";
import {TextButton} from "../TextButton/TextButton";

export class EditInputMenu extends FotonComponent {
	static className = 'wrapper-menu-edit-input'

	constructor($root, options) {
		super($root, {
			...options
		});
	}

	toHTML() {
		return '<div id="edit-input-menu"></div>'
	}

	init(options) {
		const data = this.props
		const{inputArr} = data

		new Foton('#edit-input-menu', {
			components: [TextComponent],
			className: 'menu-logo',
			props: {data: 'Настройка меню :'}

		}).render()

		inputArr.map((item, idx) => {
			return new Foton('#edit-input-menu', {
				components: [InputComponent],
				className: 'block',
				props: {data: idx}

			}).render();
		})

		new Foton('#edit-input-menu', {
			components: [TextButton],
			className: 'block',
			props: {data: 'Добавить пункт +'}

		}).render()
	}
}
