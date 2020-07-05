import {CreateEntryPage} from '../index.js'
import Menu from "../components/menu/menu";


const MainPage = () => {
	const wrapper = 'main-page'
	const page = `<div class = ${wrapper}> Main Pages </div>`
	const createEntryPage = new CreateEntryPage(page, 'wrapper')
	createEntryPage.mountComponent()
	Menu(wrapper)
}



export default MainPage
