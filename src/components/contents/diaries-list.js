import React, { Component } from 'react'
import { Layout} from 'antd'
import { connect } from 'react-redux'
import Diary from './diary'
import {loadDiariesByPage} from '../../actions/diaries'

const { Content } = Layout
class DiariesList extends Component {

    componentWillMount(){
        let { handleDiaries } = this.props
        handleDiaries()
    }

    render() {
        return (
            <Content>
                {this.props.diaries.map((diary, index) => {
                    return <Diary key={index} diary={diary} index={index}/>
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