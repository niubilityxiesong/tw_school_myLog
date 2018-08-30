import React, { Component } from 'react'
import { Layout, Button, Card, Form ,Icon, Popconfirm, message} from 'antd'
import Markdown from 'react-markdown'
import { connect } from 'react-redux'
import { formatAction, DESTORYLOG, CHANGEDIARY, DISPLAY, HIDE } from '../../Action'
import DiaryEditForm from './diary-edit-form'
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
                    return (
                        <div key={index} className="card-item">
                            <Card title={diary.date + '的日志'} className={diary.changeDiary}
                                extra={<Popconfirm title="确认删除吗?" onConfirm={() => {this.handleDelete(index)}} okText="确认" cancelText="取消">
                                    <Icon type="close" />
                                </Popconfirm>}>
                                <Form>
                                    <Markdown source={diary.text} className="markdown"/>
                                    <div className="practise-diary-operation-button-group">
                                        <Button type="primary" size="small" ghost className="button-note" onClick={() => {this.props.changeDiary(index)}}>修改日志</Button>
                                        <Button type="primary" size="small" ghost className="button-note button-distance">评论日志</Button>
                                    </div>
                                </Form>
                            </Card>
                            <Card className={diary.changeDiary === DISPLAY ? HIDE : DISPLAY}
                                title="修改成长日志">
                                <DiaryEditForm diary={diary} index={index}/>
                            </Card>
                        </div>
                    )
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