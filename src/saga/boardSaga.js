import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { setBoard } from '../redux/reduser/boardReduser'
function* getBoard() {
    const apiUrl = 'https://6384706d4ce192ac60573856.mockapi.io/board/'
    const response = yield axios.get(apiUrl)
    yield put(setBoard(response.data))
}
function* delBoard(id) {
    const apiUrl = `https://6384706d4ce192ac60573856.mockapi.io/board/${id.payload}`
   yield axios.delete(apiUrl)
    yield getBoard()
}
function* addBoard(name) {
    const apiUrl = `https://6384706d4ce192ac60573856.mockapi.io/board/`
   yield axios.post(apiUrl, { boardName: name.payload })
    yield getBoard()
}

export function* boardWorker() {
    yield takeEvery('AXIOS_BOARD', getBoard)
    yield takeEvery('AXIOS_BOARD_DELITE', delBoard)
    yield takeEvery('AXIOS_BOARD_ADD', addBoard)
}
