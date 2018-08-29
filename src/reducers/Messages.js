import { combineReducers } from "../../node_modules/redux";
import { addText, changePage, destoryLog } from "../Action";

const initState = {
    text:[],
    selectedPage: "我的日志"
}

const message = (state = initState.text, action) => {
    if(action.type === addText){
        return Object.assign([], state.concat(action.data))
    }
    if(action.type === destoryLog){
        let newState = [...state]
        newState.splice(action.data, 1)
        return newState;   
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