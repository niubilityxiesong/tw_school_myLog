import React, { Component } from 'react';
import { Layout } from 'antd';
import BreadCrumb from './BreadCrumb';
import Navigation from './Navigation';
import InputLog from './InputLog';
import OutputLog from './OutputLog';

const { Content, Sider } = Layout;

class MyLogPage extends Component {

    render() {
        return (
            <Content style={{ padding: "0 50px", display: 'flex', flexDirection: 'column' }}>
            <BreadCrumb />
            <Layout style={{ padding: "24px 0", background: "#fff" }}>
                <Sider width={200} style={{ background: "#fff" }}>
                    <Navigation />
                </Sider>
                <InputLog />
            </Layout>
            </Content>
        );
    }
}

export default MyLogPage;