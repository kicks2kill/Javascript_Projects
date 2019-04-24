import isEmpty from '../validations/is-empty';
import { SET_CURRENT_USER } from '../actions/types';

const initalState = {
    isAuthenicated: false,
    user: {}
}

export default function(state = initalState, action) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenicated: !isEmpty(action.payload),
                user: action.payload
            }
        default:
            return state;
    }
}