import './style.css'
import MainPage from "./Pages/Main";

export class  CreateEntryPage{
	constructor(fragment, classWrapper) {
		this.fragment = fragment
		this.className  = classWrapper
	}
	mountComponent(){
		const target = document.querySelector('#app');
		const element = document.createElement('div')
		element.classList.add(this.className)
		element.innerHTML = this.fragment
		target.insertAdjacentElement('afterBegin', element);
	}
}

export class CreateComponent {
	constructor(fragment, position = "afterBegin", parentSelector, classWrapper) {
		this.parent  = document.querySelector('.' + parentSelector)
		this.fragment = fragment
		this.position = position
		this.classWrapper = classWrapper

	}
	render(){
		const target = this.parent;
		const wrapper = document.createElement('div')
		wrapper.classList.add(this.classWrapper)
		wrapper.innerHTML = this.fragment
		target.insertAdjacentElement(this.position, wrapper);
	}
}
MainPage()
