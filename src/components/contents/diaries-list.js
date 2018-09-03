import React, { Component } from 'react'
import { Layout, Pagination } from 'antd'
import { connect } from 'react-redux'
import Diary from './diary'
import {loadDiariesByPage, loadDiaries} from '../../actions/diaries'
import { DISPLAY, HIDE, INITPAGESIZE } from '../../Action'


const { Content } = Layout
class DiariesList extends Component {

    componentDidMount(){
        let { handleDiaries } = this.props
        handleDiaries()
    }

    render() {
        return (
            <Content>
                {this.props.diaries.map((diary, index) => {
                    return <Diary key={index} diary={diary} index={index}/>
                })}
                <Pagination current={this.props.diaryPage.page + 1} 
                    total={this.props.diaryPage.totalDiaries} 
                    className={this.props.diaryPage.totalDiaries === 0 ? HIDE : DISPLAY}
                    pageSize={INITPAGESIZE}
                    onChange={(page, pageSize) => {
                        this.props.handleReloadDiaries(page, pageSize)}
                    }/>
                
            </Content>
        )
    }
}

const mapPropsToDispatch = state => ({
    diaries: state.diaries,
    diaryPage: state.diaryPage
})
const mapDispatchToState = (dispatch) => ({
    handleDiaries: () => {
        dispatch(loadDiaries())
    },
    
    handleReloadDiaries: (page, pageSize) => {
        dispatch(loadDiariesByPage(page, pageSize))
    }
})

export default connect(mapPropsToDispatch,mapDispatchToState)(DiariesList)