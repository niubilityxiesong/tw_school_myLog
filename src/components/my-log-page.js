import React, { Component } from 'react';
import { Layout } from 'antd';
import BreadCrumb from './bread-crumb';
import Navigation from './navigation';
import InputLog from './input-log';

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