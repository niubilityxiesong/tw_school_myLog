import React, { Component } from 'react'
import { Layout, DatePicker, Input, Button, Card, Form } from 'antd'
import { connect } from 'react-redux'
import OutputLog from './diaries-list'
import { formatAction, addText } from '../../Action'
import moment from 'moment'

const { Content } = Layout
const { TextArea } = Input
const FormItem = Form.Item

class AddDiary extends Component{
    constructor(props) {
        super(props)
        let date = new Date()
        this.state = {
            text: '## 我做了什么\n## 学了什么\n## 有什么印象深刻的收获\n',
            date: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
        }
    }

    handleTextChange = event => {
        const text = event.target.value
        if (text !== null) {
            this.setState({
                text: text
            })
        }
    };

    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 4 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 20 },
                sm: { span: 20 },
            },
        }

        return (
            <Content className='add-diary-content'>
                <Card title="新的日志" extra={<a href="https://www.baidu.com">如何写一篇优秀的成长日志</a>}>
                    <Form>
                        <FormItem
                            {...formItemLayout}
                            label="日期"
                        >
                        
                            <DatePicker defaultValue={moment(new Date())} allowClear={false} onChange={(date, dateString) => {
                                this.setState({date:dateString})
                            }}/>
                        
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="总结内容"
                        >
                            <TextArea rows={5} value={this.state.text} onChange={this.handleTextChange} />                        
                        </FormItem>
                        <div className="practise-diary-operation-button-group">
                            <Button type="primary" size="small" ghost className="button-note" onClick={() => {
                                this.props.addText(this.state.text, this.state.date)
                                this.setState({text:'## 我做了什么\n## 学了什么\n## 有什么印象深刻的收获\n'})
                            }}>提交</Button>
                            <Button size="small" className='button-note button-distance'>取消</Button>
                        </div>
                    </Form>
                </Card>
                <OutputLog />
            </Content>
        )
    }
}

const mapPropsToDispatch = () => ({})
const mapDispatchToState = dispatch => ({
    addText: (text, date) => {
        let data = { text, date }
        dispatch(formatAction(addText, data))
    }
})

export default connect(mapPropsToDispatch,mapDispatchToState)(AddDiary)