const dafaultState = {}

export const SET_CARD = 'SET_CARD'
export const AXIOS_CARD = 'AXIOS_CARD'
export const ADD_NEW_CARD = 'ADD_NEW_CARD'
export const ADD_CARD = 'ADD_CARD'
export const CHANGE_POSITION_CARD = 'CHANGE_POSITION_CARD'
export const DELITE_CARD = 'DELITE_CARD'
export const PUT_CARD = 'PUT_CARD'
export function cards(state = dafaultState, action) {
    switch (action.type) {
        case SET_CARD: {
            const { cards } = action.payload
            return {
                ...state,
                [action.payload.id]: cards,
            }
        }
        default:
            return state
    }
}
export const setCard = (payload) => ({ type: SET_CARD, payload })
export const addCard = (payload) => ({ type: ADD_CARD, payload })
export const putCard = (payload) => ({ type: PUT_CARD, payload })
export const setAxiosCard = (payload) => ({ type: AXIOS_CARD, payload })
export const addAxiosCard = (payload) => ({ type: ADD_NEW_CARD, payload })
export const deliteCard = (payload) => ({ type: DELITE_CARD, payload })
export const changePositionCard = (payload) => ({
    type: CHANGE_POSITION_CARD,
    payload,
})
