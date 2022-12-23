import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { setCard } from '../redux/reduser/cardReduser'

function* getCard(payload) {
    const apiUrl = `https://6384706d4ce192ac60573856.mockapi.io/board/${payload.payload.bordID}/list/${payload.payload.listID}/card`
    const response = yield axios.get(apiUrl)
    const card = { id: payload.payload.listID, cards: response.data }
    yield put(setCard(card))
}
function* addNEWCard(payload) {
    const apiUrl = `https://6384706d4ce192ac60573856.mockapi.io/board/${payload.payload.bordID}/list/${payload.payload.listID}/card`
    yield axios.post(apiUrl, {
        title: payload.payload.name,
        position: Math.random()*1000,
         dataDeadline: 'Deadline',
         description: 'Text Description',
         prioretty: 'Medium',
         workTime:0,
    })
    yield getCard(payload)
}
function* addCard(payload) {
    const apiUrl = `https://6384706d4ce192ac60573856.mockapi.io/board/${payload.payload.bordID}/list/${payload.payload.listID}/card`
    yield axios.post(apiUrl, {
        addFile: payload.payload.card.addFile,
        commetn: payload.payload.card.commetn,
        dataCreate: payload.payload.card.dataCreate,
        dataDeadline: payload.payload.card.dataDeadline,
        description: payload.payload.card.description,
        newTask: payload.payload.card.newTask,
        position: payload.payload.card.position,
        prioretty: payload.payload.card.prioretty,
        status: payload.payload.card.commetn,
        taskNumber: payload.payload.card.taskNumber,
        title: payload.payload.card.title,
        workTime: payload.payload.card.workTime,
    })
    yield getCard(payload)
}
function* putCard(payload) {
 
    const apiUrl = `https://6384706d4ce192ac60573856.mockapi.io/board/${payload.payload.bordID}/list/${payload.payload.listID}/card/${payload.payload.id}`
    yield axios.put(apiUrl, {
        addFile: payload.payload.addFile,
        commetn: payload.payload.commetn,
        dataCreate: payload.payload.dataCreate,
        dataDeadline: payload.payload.dataDeadline,
        description: payload.payload.description,
        newTask: payload.payload.newTask,
        position: payload.payload.position,
        prioretty: payload.payload.prioretty,
        status: payload.payload.commetn,
        taskNumber: payload.payload.taskNumber,
        title: payload.payload.title,
        workTime: payload.payload.workTime,
    })
    yield getCard(payload)
}
function* changePositionCard(payload) {
    const apiUrl = `https://6384706d4ce192ac60573856.mockapi.io/board/${payload.payload.bordID}/list/${payload.payload.listID}/card/${payload.payload.cardID}`
    yield axios.put(apiUrl, { position: payload.payload.position })
    yield getCard(payload)
}

function* deliteCard(payload) {
    const apiUrl = `https://6384706d4ce192ac60573856.mockapi.io/board/${payload.payload.bordID}/list/${payload.payload.listID}/card/${payload.payload.cardID}`
    yield axios.delete(apiUrl)
    yield getCard(payload)
}
export function* cardWorker() {
    yield takeEvery('AXIOS_CARD', getCard)
    yield takeEvery('ADD_NEW_CARD', addNEWCard)
    yield takeEvery('CHANGE_POSITION_CARD', changePositionCard)
    yield takeEvery('DELITE_CARD', deliteCard)
    yield takeEvery('ADD_CARD', addCard)
    yield takeEvery('PUT_CARD', putCard)
}
