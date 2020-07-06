import {$} from './dom'

export class React {
	constructor(selector, options) {
		this.$el = $(selector);
		this.components = options.components || [];
	}

	getRoot() {
		const $root = $.create('div', 'main-class')
		const componentOptions = {} //todo
		this.components = this.components.map(Component => {
			const $el = $.create('div', Component.className)
			const component = new Component($el, componentOptions);
			$el.html(component.toHTML())
			$root.append($el)
			return component
		})
		return $root;
	}

	render() {
		this.$el.append(this.getRoot())
		this.components.forEach(component => component.init())
	}
}
