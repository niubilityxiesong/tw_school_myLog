import React, { Component } from 'react'
import { Layout, message} from 'antd'
import { connect } from 'react-redux'
import { formatAction, DESTORYLOG, CHANGEDIARY } from '../../Action'
import Diary from './diary'
const { Content } = Layout

class DiariesList extends Component {
    
    handleDelete = (index) => {
        this.props.destoryText(index)
        message.success('删除成功')
    }

    render() {
        return (
            <Content>
                {this.props.message.map((diary, index) => {
                    return (<Diary diary={diary} index={index}/>)
                })}
            </Content>
        )
    }
}

const mapPropsToDispatch = state => ({
    message: state.message
})
const mapDispatchToState = (dispatch) => ({
    destoryText: (index) => {
        dispatch(formatAction(DESTORYLOG, index))
    },

    changeDiary: (index) => {
        dispatch(formatAction(CHANGEDIARY, index))
    }
})

export default connect(mapPropsToDispatch,mapDispatchToState)(DiariesList)