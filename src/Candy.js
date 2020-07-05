const Candy = {
	createElement(type, props, children) {
		const element = {
			type,
			props: props || {},
		}
		if (children) {
			element.props.children = children
		}
		return element
	},
	render(element, container) {
		const instance = new CreateDOMComponent(element)
		return instance.mountComponent(container)

	}
}

class  CreateDOMComponent {
	constructor(element) {
		this._element = element
	}
	mountComponent(container){
		const DOMElement = document.createElement(this._element.type)
		DOMElement.innerHTML(this._element.props.children)
		container.append(DOMElement)
		return DOMElement
	}
}


const el = Candy.createElement('h1', null, 'Hello Vadim' )
Candy.render(el, document.getElementById('app'));

///////////////////////////

import './style.css'

class CreateFragment {
	constructor(fragment, parentSelector, classWrapper) {
		this.entryFragment = fragment
		this.parent  = document.querySelector(parentSelector)
		this.className  = classWrapper

	}
	render() {
		const div = document.createElement('div')
		div.classList.add(this.className)
		div.innerHTML = this.entryFragment
	}
	before() {

	}
}

class  MainDomEntry {
	constructor(fragment) {
		this.fragment = fragment
	}
	render(){
		const root = document.getElementById('app')
		root.innerHTML = this.fragment
	}
}


const fragment =  `<div class="one">
						<ul class="red">
							<li class="green">1</li>
							<li class="green">2</li>
							<li class="green">3</li>
						</ul>
				</div>`


const mainPoint = new MainDomEntry(fragment)
mainPoint.render(fragment);

const header = `<h1>This is My React</h1>`
const creator = new CreateFragment(header, '.one')
creator.render()
header, 'beforeBegin', '.one', 'header'
