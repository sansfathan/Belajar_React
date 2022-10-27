//Membuat State
import { combineReducers, legacy_createStore as createStore } from "redux";

const initialState = {
  value: 0,
  status: "",
};
//membuat reducer => function untuk merubah value dari state redux

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log(state);
      return {
        ...state,
        value: state.value + 1,
        status: action.status,
      };
    case "DECREMENT":
      return {
        ...state,
        value: state.value - 1,
        status: action.status,
      };
    default:
      return state;
  }
};

//Membuat action
export const increment = () => {
  return {
    type: "INCREMENT",
    status: "Berhasil",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
    status: "Berhasil dikurangi",
  };
};

 const colorState = {
    color : "#FF5733"
}

 const colorReducer = (state = colorState , action) => {
    if (action.type === "change"){
        return {
            color : action.color,
        };
    }
    if (action.type === "return"){
        return {
            color : "#FF5733",
        };
        
    }
    return state

} 

//export
const allReducers = combineReducers({
  count : reducer,
  color : colorReducer,
});

//membuet Store
export const store = createStore(
  allReducers /*preloade, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
