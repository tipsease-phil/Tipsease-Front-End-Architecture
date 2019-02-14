import { 
    FETCH_STAFF_SUCCESS,
    FETCH_STAFF_FAILURE,
    FETCH_PATRONS_SUCCESS,
    FETCH_PATRONS_FAILURE,
    ADD_STAFF_START,
    ADD_STAFF_SUCCESS,
    ADD_STAFF_FAILURE,
    TIP_STAFF_START,
    TIP_STAFF_SUCCESS,
    TIP_STAFF_FAILURE,
    FETCH_TIPS_START,
    FETCH_TIPS_SUCCESS,
    FETCH_TIPS_FAILURE,
    GET_USERTYPE_SUCCESS
  } from "../actions"
  
  
  const initialState = {
    staff: [],
    patrons: [],
    error: '',
    isAddingStaff: false,
    isEditing: false,
    tips: [],
    userType: '',
  }
  
  const staff = (state = initialState, action) => {
    switch(action.type) {
      case FETCH_STAFF_SUCCESS:
        return {
          ...state,
          staff: action.payload
        }
      case FETCH_STAFF_FAILURE:
        return {
          ...state,
          error: action.payload
        }
      case FETCH_PATRONS_SUCCESS:
        return {
          ...state,
          patrons: action.payload
        }
      case FETCH_PATRONS_FAILURE:
        return {
          ...state,
          error: action.payload
        }
      case ADD_STAFF_START:
        return {
          ...state,
          isAddingStaff: true,
          error: ''
        }
      case ADD_STAFF_SUCCESS:
        return {
          ...state,
          staff: action.payload,
          isAddingStaff: false,
          error: '',
        }
      case ADD_STAFF_FAILURE:
        return {
          ...state,
          error: action.payload
        }
      case TIP_STAFF_START:
        return {
          ...state,
          error: '',
        }
      case TIP_STAFF_SUCCESS:
        return {
          ...state,
          error: '',
          tips: [...state.tips, action.payload]
        }
      case TIP_STAFF_FAILURE:
        return {
          ...state,
          error: action.payload
        }
      case FETCH_TIPS_START:
        return {
          ...state,
          error: ''
        }
      case FETCH_TIPS_SUCCESS:
        return {
          ...state,
          tips: action.payload,
          error: ''
        }
      case FETCH_TIPS_FAILURE:
        return {
          ...state,
          error: action.payload
        }
      case GET_USERTYPE_SUCCESS:
        return {
          ...state,
          userType: action.payload,
        }
      default:
        return state;
    }
  }
  
  export default staff