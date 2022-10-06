import * as types from "./actionTypes";

import axios from "axios";

const getQuizReq = () => {
  return {
    type: types.GET_QUIZ_REQ,
  };
};

const getQuizSuccess = (payload) => {
  return {
    type: types.GET_QUIZ_SUCCESS,
    payload,
  };
};

const getQuizFail = () => {
  return {
    type: types.GET_QUIZ_FAIL,
  };
};


export const getData = (cat,dif) => {
    return (dispatch) => {
      dispatch(getQuizReq());
      axios
        .get(`https://opentdb.com/api.php?amount=1&category=${cat}&difficulty=${dif}`)
        .then((res) => dispatch(getQuizSuccess(res.data)))
        .catch((e) => dispatch(getQuizFail()));
    };
  };