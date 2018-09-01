import React, { Component } from 'react'
import { Layout} from 'antd'
import { connect } from 'react-redux'
import Diary from './diary'
import {loadDiariesByPage} from '../../actions/diaries'
import { DISPLAY } from '../../Action';

const { Content } = Layout
class DiariesList extends Component {

    componentWillMount(){
        let { handleDiaries } = this.props;
        handleDiaries();
    }

    render() {
        return (
            <Content>
                {this.props.diaries.map((diary) => {
                    diary.changeDiary = DISPLAY
                    return <Diary key={diary.id} diary={diary} index={diary.id}/>
                })}
            </Content>
        )
    }
}

const mapPropsToDispatch = state => ({
    diaries: state.diaries
})
const mapDispatchToState = (dispatch) => ({
    handleDiaries: () => {
        dispatch(loadDiariesByPage())
    }
})

export default connect(mapPropsToDispatch,mapDispatchToState)(DiariesList)