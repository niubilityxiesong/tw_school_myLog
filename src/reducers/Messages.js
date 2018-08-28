import { combineReducers } from "../../node_modules/redux";

const initState = {
    text:[],
    selectedPage: "我的日志"
}

const message = (state = initState.text, action) => {
    if(action.type === 'ADD_TEXT'){
        let newState = [...state];
        newState.push(action.data);
        return newState;
    }
    return state;
}

const selection = (state = initState.selectedPage, action) => {
    if(action.type === 'CHANGE_PAGE'){
        state = action.data;
        //return {...state,[state.selectedPage]:action.data};
    }
    return state;
}

const reducer = combineReducers({
    message: message,
    selection: selection
})

export default reducer;