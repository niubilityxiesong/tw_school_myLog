import React, { Component } from 'react';
import { Layout, DatePicker, Input, Button } from 'antd';
import { connect } from "react-redux";

const { Content } = Layout;
const { TextArea } = Input;

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
        return (
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            <span>新的日志
                <br />
                <label>日期：</label>
                <DatePicker  onChange={(date, dateString) => {
                    this.setState({date:dateString})
                }}/>
                <br />
                <label>总结内容：</label>
                <TextArea rows={4} value={this.state.text} onChange={this.handleTextChange}/>
                <Button type="primary" onClick={() => {
                    this.props.addText(this.state.text)
                    this.setState({text:""})
                }}>提交</Button>
                <Button type="primary">取消</Button>
            </span>
            </Content>
        );
    }
}

const mapPropsToDispatch = state => ({
    message: state.message
});
const mapDispatchToState = dispatch => ({
    addText: text => {
      dispatch({
        type: "ADD_TEXT",
        data: { text }
      });
    }
});

export default connect(mapPropsToDispatch,mapDispatchToState)(InputLog);