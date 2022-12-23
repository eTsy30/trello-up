import { put, takeEvery } from 'redux-saga/effects'
import { setList } from '../redux/reduser/listReduser'
import axios from 'axios'
function* getList(data) {
    const apiUrl = `https://6384706d4ce192ac60573856.mockapi.io/board/${data.payload.bordID}/list`
    const response = yield axios.get(apiUrl)
    if (response.data.length === 0) {
      
         yield createStartList(data.payload.bordID)
    }
    yield put(setList(response.data))
}
function* addList(data) {
    const apiUrl = `https://6384706d4ce192ac60573856.mockapi.io/board/${data.payload.bordID}/list`
    yield axios.post(apiUrl, {
        title: data.payload.name,
    })
    yield getList(data)
}
function* updateList(data) {
    const apiUrl = `https://6384706d4ce192ac60573856.mockapi.io/board/${data.payload.boardId}/list/${data.payload.listId}/`
    const response = yield axios.put(apiUrl, {
        orderList: data.payload.orderList,
    })
    yield put(setList(response.data))
}

function* createStartList(id) {
    const apiUrl = `https://6384706d4ce192ac60573856.mockapi.io/board/${id}/list`
    yield axios.post(apiUrl, {
        title: 'Queue',
    })
    yield axios.post(apiUrl, {
        title: 'Development',
        orderList: 2,
    })
    const response = yield axios.post(apiUrl, {
        title: 'Done',
        orderList: 3,
    })
    yield put(setList(response.data))
}
function* delList(data) {
  
    const apiUrl = `https://6384706d4ce192ac60573856.mockapi.io/board/${data.payload.bordID}/list/${data.payload.listID}`
    yield axios.delete(apiUrl)
    yield getList(data)
}
export function* listWorker() {
    yield takeEvery('SET_AXIOS_LIST', getList)
    yield takeEvery('UPDATE_AXIOS_LIST', updateList)
    yield takeEvery('CREATE_START_AXIOS_LIST', createStartList)
    yield takeEvery('ADD_AXIOS_LIST', addList)
    yield takeEvery('DEL_LIST', delList)
}
