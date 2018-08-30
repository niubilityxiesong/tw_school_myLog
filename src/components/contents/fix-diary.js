import React, { Component } from 'react'
import { DatePicker, Input, Button, Card, Form } from 'antd'
import { connect } from 'react-redux'
import { formatAction, fixText } from '../../Action'
import moment from 'moment'

const { TextArea } = Input
const FormItem = Form.Item

class FixDiary extends Component{
    constructor(props) {
        super(props)
        this.state = {
            text: this.props.element.text,
            date: this.props.element.date,
            clazzName: 'diary-display-block'
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
                <Card className={this.state.clazzName} title="修改成长日志" extra={<a href="https://www.baidu.com">如何写一篇优秀的成长日志</a>}>
                    <Form>
                        <FormItem
                            {...formItemLayout}
                            label="日期"
                        >
                        
                            <DatePicker defaultValue={moment(this.state.date)} allowClear={false} onChange={(date, dateString) => {
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
                                this.props.fixText(this.state.text, this.state.date, this.props.index)
                            }}>提交</Button>
                            <Button size="small" className='button-note button-distance'>取消</Button>
                        </div>
                    </Form>
                </Card>
        )
    }
}

const mapPropsToDispatch = () => ({})
const mapDispatchToState = dispatch => ({
    fixText: (text, date, index) => {
        let data = { text, date, index }
        dispatch(formatAction(fixText, data))
    }
})

export default connect(mapPropsToDispatch,mapDispatchToState)(FixDiary)