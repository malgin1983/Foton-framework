import { CreateComponent } from '../../index.js'
import '../../style.css'

const Menu = (block) => {

	const menu =  `<div class="menu">
						<div class="menu__logo">Meню </div>
						<div class="menu__line"></div>
						<ul class="menu__list">
							<li class="menu__list-item">Пункт 1</li>
							<li class="menu__list-item">Пункт 2</li>
							<li class="menu__list-item">Пункт 3</li>
						</ul>
					</div>
				 `
	new CreateComponent(menu, 'afterBegin', block, 'menu-wrapper').render()

}
export default  Menu

