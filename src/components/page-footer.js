import React, { Component } from 'react'
import { Layout } from 'antd';

const { Footer } = Layout;

class PageFooter extends Component {
    render() {
        return (
            <Footer style={{ textAlign: "center" }}>
                ThoughtWorks School ©2018
            </Footer>
        );
    }
}
export default PageFooter;
