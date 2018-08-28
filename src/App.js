import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import PageHeader from './components/page-header'
import PageFooter from './components/page-footer'
import MyLogPage from './components/my-log-page';

class App extends Component {
  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <PageHeader />
        <MyLogPage />
        <PageFooter />
      </Layout>
    );
  }
}

export default App;