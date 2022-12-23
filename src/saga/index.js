import { all } from 'redux-saga/effects'
import { boardWorker } from './boardSaga'
import { listWorker } from './listSaga'
import { cardWorker } from './cardSaga'
export function* rootWather() {
    yield all([
        boardWorker(),
        listWorker(),
        cardWorker(),
    ])
}
