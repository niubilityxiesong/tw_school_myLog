import React, { Component } from 'react';
import { Layout, Input } from 'antd';
import { connect } from "react-redux";

const { Content } = Layout;
const { TextArea } = Input;


class OutputLog extends Component {
    render() {
        return (
            <Content style={{ background: "#fff", padding: 24, margin: 0, minHeight: 280 }}>
                <span>
                    <label>2018的日志</label>
                    {this.props.message.map(element => {
                        return <TextArea defaultValue={element.text} disabled={true} key/>;
                    })}
                </span>
            </Content>
        );
    }
}

const mapPropsToDispatch = state => ({
    message: state.message
});
const mapDispatchToState = () => ({});

export default connect(mapPropsToDispatch,mapDispatchToState)(OutputLog);