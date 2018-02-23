//put cases here
const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const UPDATE_USERID = 'UPDATE_USERID';

//actions
export function updateUsername(username){
    return{
        type: UPDATE_USERNAME,
        payload: username
    }
}
export function updatePassword(password){
    return {
    type: UPDATE_PASSWORD,
    payload: password
    }
}
export function updateUserId(id){
    return {
    type: UPDATE_USERID,
    payload: id,
    }
}

//initial state
let initialState = {
    username: '',
    password: '',
    properties: [],
    loan: 0,
    userid: 0,
    propName: '',
    mort: 0,
    recRent: 0,
    decRent: 0,
    address: '',
    city: '',
    state: '',
    desc: '',
    image: ''
}

//reducer
function reducer(state = initialState, action) {
    switch(action.type){
        case UPDATE_USERNAME: 
            return {...state, username: action.payload};
        case UPDATE_PASSWORD: 
            return {...state, password: action.payload};
        case UPDATE_USERID:
            return {...state, userid: action.payload}
        default: return state;
    }
}

export default reducer;