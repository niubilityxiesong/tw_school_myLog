import React, { Component } from 'react';
import { Layout, DatePicker, Input, Button, Card, Form } from 'antd';
import { connect } from "react-redux";
import OutputLog from './OutputLog';
import { formatAction, addText } from '../Action';

const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;

class InputLog extends Component{
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            date: ""
        }
    }

    handleTextChange = event => {
        const text = event.target.value;
        console.log(text)
        if (text !== null) {
            this.setState({
                text: text
            });
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
        };

        return (
            <Content style={{ background: '#fff', padding: "0 24px", margin: 0, minHeight: 280 }}>
            <Card title="新的日志" extra={<a href="https://www.baidu.com">如何写一篇优秀的成长日志</a>}>
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="日期"
                    >
                        
                        <DatePicker onChange={(date, dateString) => {
                            this.setState({date:dateString})
                        }}/>
                        
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="总结内容"
                    >
                        <TextArea rows={5} value={this.state.text} onChange={this.handleTextChange}>
                            ## 我做了什么
                            ## 学了什么
                            ## 有什么印象深刻的收获
                        </TextArea>                        
                    </FormItem>
                    <div className="practise-diary-operation-button-group">
                        <Button type="primary" size="small" ghost className="button-note" onClick={() => {
                            this.props.addText(this.state.text)
                            this.setState({text:""})
                        }}>提交</Button>
                        <Button type="primary" size="small" ghost className="button-note" style={{ margin:"10px" }}>取消</Button>
                    </div>
                </Form>
            </Card>
            <OutputLog />
            </Content>
        );
    }
}

const mapPropsToDispatch = state => ({
    message: state.message
});
const mapDispatchToState = dispatch => ({
    addText: text => {
      let data = { text }
      dispatch(formatAction(addText, data))
    }
});

export default connect(mapPropsToDispatch,mapDispatchToState)(InputLog);