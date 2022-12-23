import { createStore, combineReducers, applyMiddleware } from 'redux'
import { rootWather } from '../saga'
import createSagaMiddleware from 'redux-saga'
import { boards } from '../redux/reduser/boardReduser'
import { lists } from '../redux/reduser/listReduser'
import { cards } from '../redux/reduser/cardReduser'
import { modal } from '../redux/reduser/modaiActiveReduser'
const sagaMidleWare = createSagaMiddleware()
const rootReduser = combineReducers({
    boards,
    lists,
    cards,
    modal,
})
export const store = createStore(rootReduser, applyMiddleware(sagaMidleWare))
sagaMidleWare.run(rootWather)
