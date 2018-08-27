import React from 'react'
import { Layout, Breadcrumb, Menu, Icon, DatePicker, Input, Button } from 'antd';

const { Content, Sider } = Layout;
const { TextArea } = Input;

class Middle extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectedPageChange = this.handleSelectedPageChange.bind(this);
        this.state = {
            selectedPage: "我的日志"
        }
    }

    handleSelectedPageChange(event){
        this.setState({
            selectedPage: event.key
        })
    }

    render() {
        return (
            <Content style={{ padding: "0 50px", display: 'flex', flexDirection: 'column' }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>思沃学院</Breadcrumb.Item>
                <Breadcrumb.Item>成长日志</Breadcrumb.Item>
                <Breadcrumb.Item>{this.state.selectedPage}</Breadcrumb.Item>
            </Breadcrumb>
            <Layout style={{ padding: "24px 0", background: "#fff" }}>
                <Sider width={200} style={{ background: "#fff" }}>
                <Menu theme="white" 
                      mode="inline" 
                      defaultSelectedKeys={["我的日志"]}
                      onClick={(event) => {
                        this.handleSelectedPageChange(event)
                      }}
                >
                    <Menu.Item key="我的日志">
                    <span>我的日志&nbsp;&nbsp;</span>
                    <Icon type="edit" />
                    </Menu.Item>
                    <Menu.Item key="我的关注">
                    <span>我的关注&nbsp;&nbsp;</span>
                    <Icon type="file-text" />
                    </Menu.Item>
                    <Menu.Item key="优秀日志">
                    <span>优秀日志&nbsp;&nbsp;</span>
                    <Icon type="star-o" />
                    </Menu.Item>
                </Menu>
                </Sider>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                <span>新的日志
                    <br />
                    日期：
                    <DatePicker/>
                    <br />
                    总结内容：
                    <TextArea rows={4} />
                    <Button type="primary">提交</Button>
                    <Button type="primary">取消</Button>
                </span>
                </Content>
            </Layout>
            </Content>
        );
    }
}
export default Middle;