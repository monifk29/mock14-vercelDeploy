import * as types from './actionTypes'

const initialState = {
ques : [],
isLoading: false,
isError: false,
}

export const reducer = (state = initialState,action) => {
const {type,payload} = action

switch(type) {
case types.GET_QUIZ_REQ: {
return {
...state,
isLoading : true,
isError : false
}
}
case types.GET_QUIZ_SUCCESS : {
return {
...state,
ques : payload,
isLoading : false,
isError : false
}
}
case types.GET_QUIZ_FAIL : {
return {
...state,
isLoading : false,
isError : true
}
}
default :
return state
}
};