import { storage } from '../core/utils'

const defaultState = {
	menuItems: [],
	title: 'Foton'
}

const normalize = state => ({
	...state
})

export const initialState = storage('foton-state')
	? { ...defaultState, ...normalize(storage('foton-state')) }
	: defaultState
