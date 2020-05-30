import axios from 'axios';

export const FETCHING_INFO_START = 'FETCHING_INFO_START';
export const FETCHING_INFO_SUCCESS = 'FETCHING_INFO_SUCCESS';
export const FETCHING_INFO_FAILURE = 'FETCHING_INFO_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_INFO_START })
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('res, ', res)
            dispatch({ type: FETCHING_INFO_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCHING_INFO_FAILURE, payload: err })
        })
}

export const newSmurf = (newS) => dispatch => {
    dispatch ({ type: ADD_SMURF })
        axios
            .post('http://localhost:3333/smurfs', newS)
            .then(res => console.log(res))
            .catch(err => console.log(err))
}