import React, { Component } from 'react'
import { Layout, Button, Card, Form ,Icon, Popconfirm, message} from 'antd'
import Markdown from 'react-markdown'
import { connect } from 'react-redux'
import { formatAction, destoryLog } from '../../Action'

const { Content } = Layout

class DiariesList extends Component {
    
    handleDelete = (index) => {
        this.props.destoryText(index)
        message.success('删除成功')
    }

    render() {
        return (
            <Content className="diaries-list-content">
                {this.props.message.map((element, index) => {
                    return (
                        <Card title={element.date + '的日志'} key={index} className="card-item" 
                            extra={<Popconfirm title="确认删除吗?" onConfirm={() => {this.handleDelete(index)}} okText="确认" cancelText="取消">
                                <Icon type="close" />
                            </Popconfirm>}>
                            <Form>
                                <Markdown source={element.text} className="markdown"/>
                                <div className="practise-diary-operation-button-group">
                                    <Button type="primary" size="small" ghost className="button-note" >修改日志</Button>
                                    <Button type="primary" size="small" ghost className="button-note button-distance">评论日志</Button>
                                </div>
                            </Form>
                        </Card>
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
        dispatch(formatAction(destoryLog, index))
    }
})

export default connect(mapPropsToDispatch,mapDispatchToState)(DiariesList)