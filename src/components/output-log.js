import React, { Component } from 'react';
import { Layout, Input } from 'antd';
import { connect } from "react-redux";

const { Content } = Layout;
const { TextArea } = Input;


class OutputLog extends Component {
    render() {
        return (
            <Content style={{ background: "#fff", padding: 24, margin: 0, minHeight: 280 }}>
            {this.props.message.map((element, index) => {
                return (
                    <span key={index}>
                        <label>{element.date}的日志</label>
                        <TextArea defaultValue={element.text} disabled={true}/>
                    </span>
                );
            })}
            </Content>
        );
    }
}

const mapPropsToDispatch = state => ({
    message: state.message
});
const mapDispatchToState = () => ({});

export default connect(mapPropsToDispatch,mapDispatchToState)(OutputLog);