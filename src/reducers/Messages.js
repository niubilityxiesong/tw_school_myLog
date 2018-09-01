import { combineReducers } from '../../node_modules/redux'
import { ADDTEXT, CHANGEPAGE, DESTORYLOG, FIXTEXT, CHANGEDIARY, DISPLAY, HIDE, ADDALLDIARIES } from '../Action'

const initState = {
    text:[],
    selectedPage: '我的日志'
}
const sqlDiaries = []

const message = (state = initState.text, action) => {
    if(action.type === ADDTEXT){
        return Object.assign([], state.concat(action.data))
    }
    if(action.type === DESTORYLOG){
        let newState = [...state]
        newState.splice(action.data, 1)
        return newState   
    }
    if(action.type === FIXTEXT){
        return state.map((diary, id) => {
            return Object.assign({}, diary, {
                text: id === action.data.index ? action.data.text : diary.text,
                date: id === action.data.index ? action.data.date : diary.date,
                changeDiary: id === action.data.index 
                    ? (diary.changeDiary === DISPLAY ? HIDE : DISPLAY) 
                    : diary.changeDiary
            })
        })
    }
    if(action.type === CHANGEDIARY){
        return state.map((diary, id) => {
            return Object.assign({}, diary, {
                changeDiary: id === action.data 
                    ? (diary.changeDiary === DISPLAY ? HIDE : DISPLAY) 
                    : diary.changeDiary
            })
        })
    }
    return state
}

const diaries = (state = sqlDiaries, action) => {
    if(action.type === ADDALLDIARIES) {
        return action.data
    }
    return state;
}

const selection = (state = initState.selectedPage, action) => {
    if(action.type === CHANGEPAGE){
        state = action.data
    }
    return state
}

const reducer = combineReducers({
    message: message,
    selection: selection,
    diaries:diaries
})

export default reducer