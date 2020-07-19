
//selector - Entry point selector
class Dom {
	constructor(selector) {
		if(typeof selector === 'string') {
			this.$el = document.querySelector(selector)
		} else {
			this.$el = selector;
		}
	}

	onEvent(eventName, cb) {
		this.$el.addEventListener(eventName, cb)
	}

	html(html) {
		if (typeof html === 'string') {
			this.$el.innerHTML = html
			return this
		}
		return this.$el.outerHTML.trim()
	}

	append(node) {
		if (node instanceof Dom) {
			node = node.$el
		}
		if (Element.prototype.append) {
			this.$el.append(node)
		} else {
			this.$el.appendChild(node)
		}
		return this
	}
}



export function $(selector) {
	return new Dom(selector)
}

$.create = (tagName, classes = '') => {
	const el = document.createElement(tagName)
	if (classes) {
		el.classList.add(classes)
	}
	return $(el)
}
