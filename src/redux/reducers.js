import { combineReducers } from 'redux'

const user = (state = "", action) => {
    switch (action.type) {
      case "SET_USER":
        console.log("reducer:", action.value);
        return action.value;
      default:
        return state;
    }
  };


export default combineReducers({ user })