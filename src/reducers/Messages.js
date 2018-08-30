import { combineReducers } from '../../node_modules/redux'
import { addText, changePage, destoryLog, fixText } from '../Action'

const initState = {
    text:[],
    selectedPage: '我的日志'
}

const message = (state = initState.text, action) => {
    if(action.type === addText){
        return Object.assign([], state.concat(action.data))
    }
    if(action.type === destoryLog){
        let newState = [...state]
        newState.splice(action.data, 1)
        return newState   
    }
    if(action.type === fixText){
        return state.map((diary, id) => {
            return Object.assign({}, diary, {
                text: id === action.data.index ? action.data.text : diary.text,
                date: id === action.data.index ? action.data.date : diary.date
            })
        })
    }
    return state
}

const selection = (state = initState.selectedPage, action) => {
    if(action.type === changePage){
        state = action.data
    }
    return state
}

const reducer = combineReducers({
    message: message,
    selection: selection
})

export default reducer