import { combineReducers } from '../../node_modules/redux'
import { CHANGEPAGE, DESTORYLOG, FIXTEXT, CHANGEDIARY, DISPLAY, HIDE, GETDIARIES } from '../Action'

const initState = {
    diaries:[],
    selectedPage: '我的日志'
}

const diaries = (state = initState.diaries, action) => {
    if(action.type === GETDIARIES) {
        return action.data
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
    if(action.type === DESTORYLOG){
        let newState = [...state]
        newState.splice(action.data, 1)
        return newState   
    }
    if(action.type === FIXTEXT){
        return state.map((diary, id) => {
            return Object.assign({}, diary, {
                content: id === action.data.index ? action.data.text : diary.content,
                date: id === action.data.index ? action.data.date : diary.date,
                changeDiary: id === action.data.index 
                    ? (diary.changeDiary === DISPLAY ? HIDE : DISPLAY) 
                    : diary.changeDiary
            })
        })
    }
    return state
}

const selection = (state = initState.selectedPage, action) => {
    if(action.type === CHANGEPAGE){
        state = action.data
    }
    return state
}

const reducer = combineReducers({
    selection: selection,
    diaries:diaries
})

export default reducer