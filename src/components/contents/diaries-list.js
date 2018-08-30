import React, { Component } from 'react'
import { Layout, Button, Card, Form ,Icon, Popconfirm, message} from 'antd'
import Markdown from 'react-markdown'
import { connect } from 'react-redux'
import { formatAction, destoryLog } from '../../Action'
import FixDiary from './fix-diary';
const { Content } = Layout

class DiariesList extends Component {
    
    handleDelete = (index) => {
        this.props.destoryText(index)
        message.success('删除成功')
    }

    render() {
        return (
            <Content className={this.connectName}>
                {this.props.message.map((element, index) => {
                    return (
                        <div key={index}>
                            <Card title={element.date + '的日志'} className="card-item" 
                                extra={<Popconfirm title="确认删除吗?" onConfirm={() => {this.handleDelete(index)}} okText="确认" cancelText="取消">
                                    <Icon type="close" />
                                </Popconfirm>}>
                                <Form>
                                    <Markdown source={element.text} className="markdown"/>
                                    <div className="practise-diary-operation-button-group">
                                        <Button type="primary" size="small" ghost className="button-note">修改日志</Button>
                                        <Button type="primary" size="small" ghost className="button-note button-distance">评论日志</Button>
                                    </div>
                                </Form>
                            </Card>
                            <FixDiary element={element} index={index}/>
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
        dispatch(formatAction(destoryLog, index))
    }
})

export default connect(mapPropsToDispatch,mapDispatchToState)(DiariesList)