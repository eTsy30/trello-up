const dafaultState = { board: [] }

export const SET_BOARD = 'SET_BOARD'
export const AXIOS_BOARD = 'AXIOS_BOARD'
export const AXIOS_BOARD_DELITE = 'AXIOS_BOARD_DELITE'
export const AXIOS_BOARD_ADD = 'AXIOS_BOARD_ADD'

export function boards(state = dafaultState, action) {
    switch (action.type) {
        case SET_BOARD:
            return { ...state, board: action.payload }

        default:
            return state
    }
}
export const setBoard = (payload) => ({ type: SET_BOARD, payload })
export const setAxiosBoard = () => ({ type: AXIOS_BOARD })
export const delAxiosBoard = (payload) => ({
    type: AXIOS_BOARD_DELITE,
    payload,
})
export const addAxiosBoard = (payload) => ({ type: AXIOS_BOARD_ADD, payload })
