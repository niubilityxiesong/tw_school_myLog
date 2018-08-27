import React from 'react'
import { Layout } from 'antd';

const { Footer } = Layout;

class Left extends React.Component {
    render() {
        return (
            <Footer style={{ textAlign: "center" }}>
                ThoughtWorks School ©2018
            </Footer>
        );
    }
}
export default Left;
