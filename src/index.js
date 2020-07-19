import { Foton } from './core/Foton'
import { Menu } from './components/Menu'
import { EditMenu } from './components/editMenu/EditMenu'
import { MenuActions } from './components/menuActions/MenuActions'
import { compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './redux/rootReducer'
import { initialState } from './redux/initialState'
import { debounce, storage } from './core/utils'

let composeEnhancers = compose
if (process.env.NODE_ENV === 'development') {
	composeEnhancers = composeWithDevTools
}

const store = createStore(rootReducer, initialState, composeEnhancers())

const stateListener = () => {
	storage('foton-state', store.getState())
}

store.subscribe(debounce(stateListener, 300))

const foton = new Foton('#app', {
	components: [Menu, EditMenu, MenuActions],
	store
})

foton.render()
