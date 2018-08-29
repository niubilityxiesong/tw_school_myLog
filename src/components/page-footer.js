import React, { Component } from 'react'
import { Layout } from 'antd';

const { Footer } = Layout;

class PageFooter extends Component {
    render() {
        return (
            <Footer className='text-position'>
                ThoughtWorks School ©2018
            </Footer>
        );
    }
}
export default PageFooter;
