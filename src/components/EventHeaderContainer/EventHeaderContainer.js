import { FotonComponent } from '../../core/FotonComponent'
import { Foton } from '../../core/Foton'
import {EditInputMenu} from "../EditInputMenu/EditInputMenu";
import {EventInputMenu} from "../EventInputMenu/EventInputMenu";
import './ContainerMenu.css'
import {TextComponent} from "../TextComponent/TextComponent";

export class EventHeaderContainer extends FotonComponent {
	static className = 'wrapper-event-header-container'

	constructor($root, options) {
		super($root, {
			...options
		});
	}

	toHTML() {
		return '<div class="event-header-container"></div>'
	}

	init() {
		new Foton('#event-header-container', {
			components: [TextComponent, TextComponent],
			className: 'input-page',
			props: {data: 'hello'}
		}).render();
	}
}

