const dafaultState = { active: false }
export const IS_ACTIVE_MODAL = 'IS_ACTIVE_MODAL'
export function modal(state = dafaultState, action) {
    switch (action.type) {
        case IS_ACTIVE_MODAL:
            return { ...state, active: action.payload }

        default:
            return state
    }
}
export const modalActive = (payload) => ({ type: IS_ACTIVE_MODAL, payload })
