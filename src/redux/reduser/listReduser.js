const defaultState = { list: [] }
export const SET_LIST = 'SET_LIST'
export const SET_AXIOS_LIST = 'SET_AXIOS_LIST'
export const UPDATE_AXIOS_LIST = 'UPDATE_AXIOS_LIST'
export const CREATE_START_AXIOS_LIST = 'CREATE_START_AXIOS_LIST'
export const ADD_AXIOS_LIST = 'ADD_AXIOS_LIST'
export const DEL_LIST = 'DEL_LIST'
export function lists(state = defaultState, action) {
    switch (action.type) {
        case SET_LIST:
            return { ...state, list: action.payload }
        default:
            return state
    }
}
export const delList = (payload) => ({ type: DEL_LIST, payload })
export const setList = (payload) => ({ type: SET_LIST, payload })
export const setAxiosList = (payload) => ({ type: SET_AXIOS_LIST, payload })
export const updateAxiosList = (payload) => ({
    type: UPDATE_AXIOS_LIST,
    payload,
})
export const createStartList = (payload) => ({
    type: CREATE_START_AXIOS_LIST,
    payload,
})
export const addList = (payload) => ({
    type: ADD_AXIOS_LIST,
    payload,
})
