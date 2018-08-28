import React, {Component} from 'react'
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';

const { Sider } = Layout;

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Sider width={200} style={{ background: "#fff" }}>
            <Menu theme="white" 
                      mode="inline" 
                      defaultSelectedKeys={["我的日志"]}
                      onClick={(event) => {
                        this.props.changePage(event.key);
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
        );
    }
}

const mapPropsToDispatch = state => ({
    selectedPage: state.selection
  });
const mapDispatchToState = dispatch => ({
    changePage: (key) => {
        dispatch ({
            type: "CHANGE_PAGE",
            data: key
        })
    } 
});

export default connect(mapPropsToDispatch, mapDispatchToState)(Navigation);