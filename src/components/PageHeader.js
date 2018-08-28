import React from 'react'
import { Layout, Row, Col, Dropdown, Button, Popover, Icon, message, Menu } from 'antd';

const { Header } = Layout;

function handleMenuClick(e) {
    message.info("Click on menu item.");
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

class PageHeader extends React.Component {
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
            <Header className="header">
                <Row>
                    <Col span={6}>
                    <div className="logo"></div>
                    </Col>
                    <Col span={14}>
                    <Dropdown overlay={menu}>
                    <Button className="margin-t-3" style={{ float: "right" }}>
                        柳靓云 <Icon type="down" />
                    </Button>
                    </Dropdown>
                    </Col>
                    <Col span={1} style={{ marginTop: "5px", textAlign: "right" }}>
                    <span className="ant-badge">
                    <Popover
                        style={{ width: 500 }}
                        content={hoverContent}
                        title="最新消息"
                        trigger="hover"
                        visible={this.state.hovered}
                        onVisibleChange={this.handleHoverChange}
                    >
                        <Icon type="bell" style={{ fontSize: "22px", color: "white" }} />
                    </Popover>
                    </span>
                    </Col>
                </Row>
            </Header>
        );
    }
}
export default PageHeader;