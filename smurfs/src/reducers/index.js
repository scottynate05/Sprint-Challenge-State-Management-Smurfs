import {
    FETCHING_INFO_START,
    FETCHING_INFO_SUCCESS,
    FETCHING_INFO_FAILURE,
    ADD_SMURF
} from '../actions/index';

const initialState = {
    isLoading: false,
    smurf: []
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_INFO_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCHING_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurf: action.payload
            }
        case FETCHING_INFO_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_SMURF:
            return {
                ...state
            }
        default:
            return state
    }
}