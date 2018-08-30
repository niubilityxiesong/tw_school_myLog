import React, { Component } from 'react'
import { Layout } from 'antd'
import PageHeader from './components/page-header'
import PageFooter from './components/page-footer'
import PageContent from './components/page-content'

class App extends Component {
    render() {
        return (
            <Layout style={{ height: '100vh' }}>
                <PageHeader />
                <PageContent />
                <PageFooter />
            </Layout>
        )
    }
}

export default App