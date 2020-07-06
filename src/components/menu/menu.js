import { CreateComponent } from '../../_index.js'
import '../../style.css'


const data = [
	{name: 'Пункт 1 '},
	{name: 'Пункт 2 '},
	{name: 'Пункт 3 '}
]

const Item = (data) => {
	const elements =[]
	data.map(item => {
		elements.push(`<li class="menu__list-item">${item.name}</li>`)
	})
	const res = elements.join('')
	return res
}

const Menu = (block) => {

	const menu =  `<div class="menu">
						<div class="menu__logo">Meню </div>
						<div class="menu__line"></div>
						<ul class="menu__list">
						    ${Item(data)}
						</ul>
					</div>
				 `
	new CreateComponent(menu, 'afterBegin', block, 'menu-wrapper').render()

}
export default  Menu
