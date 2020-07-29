import { MODAL } from "./types";

const INITIAL_STATE = {
    modal: false
};
 
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODAL :
            return {
                ...state,
                modal: !state.modal
            }
        default:
            return state
    }
}