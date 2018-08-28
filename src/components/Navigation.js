import React, {Component} from 'react'
import { Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { formatAction, changePage } from '../Action';

class Navigation extends Component {
    render() {
        return (
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
        );
    }
}

const mapPropsToDispatch = state => ({
    selectedPage: state.selection
});
const mapDispatchToState = dispatch => ({
    changePage: (key) => {
        dispatch (formatAction(changePage, key))
    } 
});

export default connect(mapPropsToDispatch, mapDispatchToState)(Navigation);