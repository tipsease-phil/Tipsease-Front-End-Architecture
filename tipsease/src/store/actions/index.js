import axios from "axios";

export const FETCH_STAFF_START = "FETCH_STAFF_START"
export const FETCH_STAFF_SUCCESS = "FETCH_STAFF_SUCCESS"
export const FETCH_STAFF_FAILURE = "FETCH_STAFF_FAILURE"

export const FETCH_PATRONS_START = "FETCH_PATRONS_START"
export const FETCH_PATRONS_SUCCESS = "FETCH_PATRONS_SUCCESS"
export const FETCH_PATRONS_FAILURE = "FETCH_PATRONS_FAILURE"

export const ADD_STAFF_START = "ADD_STAFF_START"
export const ADD_STAFF_SUCCESS = "ADD_STAFF_SUCCESS"
export const ADD_STAFF_FAILURE = "ADD_STAFF_FAILURE"

export const ADD_PATRON_START = "ADD_PATRON_START"
export const ADD_PATRON_SUCCESS = "ADD_PATRON_SUCCESS"
export const ADD_PATRON_FAILURE = "ADD_PATRON_FAILURE"

export const TIP_STAFF_START = "TIP_STAFF_START"
export const TIP_STAFF_SUCCESS = "TIP_STAFF_SUCCESS"
export const TIP_STAFF_FAILURE = "TIP_STAFF_FAILURE"

export const FETCH_TIPS_START = "FETCH_TIPS_START"
export const FETCH_TIPS_SUCCESS = "FETCH_TIPS_SUCCESS"
export const FETCH_TIPS_FAILURE = "FETCH_TIPS_FAILURE"

export const GET_USERTYPE_START = "GET_USERTYPE_START"
export const GET_USERTYPE_SUCCESS = "GET_USERTYPE_SUCCESS"


export const getStaff = () => dispatch => {
  dispatch({ type: FETCH_STAFF_START });
  axios
    .get("https://tipsease-backend.herokuapp.com/api/tippees")
    .then(res => dispatch ({ type: FETCH_STAFF_SUCCESS, payload: res.data }))
    .catch(err => dispatch ({ type: FETCH_STAFF_FAILURE, payload: err }));
}

export const getPatrons = () => dispatch => {
  dispatch({ type: FETCH_PATRONS_START });
  axios
    .get("https://tipsease-backend.herokuapp.com/api/tippers")
    .then(res => dispatch ({ type: FETCH_PATRONS_SUCCESS, payload: res.data }))
    .catch(err => dispatch ({ type: FETCH_PATRONS_FAILURE, payload: err }));
}

export const getTips = id => dispatch => {
  dispatch({ type: FETCH_TIPS_START });
  axios
    .get(`https://tipsease-backend.herokuapp.com/api/tippees/${id}/tips/`)
    .then(res => console.log("TIPS!", res.data))
    .then(res => dispatch ({ type: FETCH_TIPS_SUCCESS, payload: res.data }))
    .catch(err => dispatch ({ type: FETCH_TIPS_FAILURE, payload: err }));
}

export const addStaff = staff => dispatch => {
  dispatch({ type: ADD_STAFF_START });
  axios
    .post("https://tipsease-backend.herokuapp.com/api/register", staff)
    .then(res => dispatch ({ type: ADD_STAFF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_STAFF_FAILURE, payload: err }));
}

export const addTip = (id, tip) => dispatch => {
  console.log("TIPPPP", tip);
  dispatch({ type: TIP_STAFF_START });
    axios
      .post(`https://tipsease-backend.herokuapp.com/api/tippees/${id}/tips/`, tip)
      .then(res => dispatch ({ type: TIP_STAFF_SUCCESS, payload: res.data.tip }))
      .catch(err => dispatch({ type: TIP_STAFF_FAILURE, payload: err }));
}

export const getUserType = (userType) => {
  console.log(userType);
  return { type: GET_USERTYPE_SUCCESS, payload: userType};
}


