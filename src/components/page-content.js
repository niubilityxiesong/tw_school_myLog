import React, { Component } from 'react';
import { Layout } from 'antd';
import BreadCrumb from './contents/bread-crumb';
import SiderLink from './contents/sinder-link';
import AddDiary from './contents/add-diary';

const { Content, Sider } = Layout;

class MyLogPage extends Component {

    render() {
        return (
            <Content className='page-content'>
            <BreadCrumb />
            <Layout  className='content'>
                <Sider>
                    <SiderLink />
                </Sider>
                <AddDiary />
            </Layout>
            </Content>
        );
    }
}

export default MyLogPage;