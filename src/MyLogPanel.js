import React, { Component } from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Dropdown,
  Button,
  message
} from "antd";
import { Row, Col } from "antd";
import { Popover } from "antd";

const { Header, Content, Footer, Sider } = Layout;

function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Icon type="user" />
      个人中心
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="close" />
      退出
    </Menu.Item>
  </Menu>
);

const hoverContent = (
  <div>
    <div>暂无最新消息</div>
    <hr />
    <span>
      <a float="right" href="url">
        全部消息
      </a>
    </span>
  </div>
);

class MyLogPanel extends Component {
  state = {
    hovered: false
  };

  hide = () => {
    this.setState({
      hovered: false
    });
  };

  handleHoverChange = visible => {
    this.setState({
      hovered: visible
    });
  };

  render() {
    return (
      <Layout>
        <Header className="header">
          <Row style={{ float: "bottom" }}>
            <Col xs={{ span: 1, offset: 1 }} lg={{ span: 14, offset: 1 }}>
              <div>
                <img
                  src="../resources/logo.png"
                  class="App-logo"
                  alt="logo"
                  style={{ height: "30px" }}
                />
              </div>
            </Col>
            <Col xs={{ span: 1, offset: 1 }} lg={{ span: 4, offset: 1 }}>
              <div>
                <Dropdown overlay={menu}>
                  <Button style={{ marginLeft: 8 }}>
                    柳靓云 <Icon type="down" />
                  </Button>
                </Dropdown>
              </div>
            </Col>
            <Col xs={{ span: 1, offset: 1 }} lg={{ span: 2, offset: 1 }}>
              <Popover
                style={{ width: 500 }}
                content={hoverContent}
                title="最新消息"
                trigger="hover"
                visible={this.state.hovered}
                onVisibleChange={this.handleHoverChange}
              >
                <Icon type="bell" style={{ color: "white" }} />
              </Popover>
            </Col>
          </Row>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Sider width={200} style={{ background: "#fff" }}>
              <Menu theme="white" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="myLog">
                  <span>我的日志&nbsp;&nbsp;</span>
                  <Icon type="edit" />
                </Menu.Item>
                <Menu.Item key="myAttention">
                  <span>我的关注&nbsp;&nbsp;</span>
                  <Icon type="file-text" />
                </Menu.Item>
                <Menu.Item key="excellentLogs">
                  <span>优秀日志&nbsp;&nbsp;</span>
                  <Icon type="star-o" />
                </Menu.Item>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              Content
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ThoughtWorks School ©2018
        </Footer>
      </Layout>
    );
  }
}

export default MyLogPanel;
