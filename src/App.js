import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import PageHeader from './components/PageHeader'
import PageFooter from './components/PageFooter'
import MyLogPage from './components/MyLogPage';

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