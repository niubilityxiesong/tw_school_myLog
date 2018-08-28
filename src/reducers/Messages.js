import { combineReducers } from "../../node_modules/redux";
import { addText, changePage } from "../Action";

const initState = {
    text:[],
    selectedPage: "我的日志"
}

const message = (state = initState.text, action) => {
    if(action.type === addText){
        return Object.assign([], state.concat(action.data))
    }
    return state;
}

const selection = (state = initState.selectedPage, action) => {
    if(action.type === changePage){
        state = action.data;
    }
    return state;
}

const reducer = combineReducers({
    message: message,
    selection: selection
})

export default reducer;