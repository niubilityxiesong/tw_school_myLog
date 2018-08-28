import React,{ Component } from 'react'
import { Breadcrumb } from 'antd';
import { connect } from 'react-redux';


class BreadCrumb extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>思沃学院</Breadcrumb.Item>
                <Breadcrumb.Item>成长日志</Breadcrumb.Item>
                <Breadcrumb.Item>{this.props.selectedPage}</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}

const mapPropsToDispatch = state => ({
    selectedPage: state.selection
  });
const mapDispatchToState = dispatch => ({});

export default connect(mapPropsToDispatch, mapDispatchToState)(BreadCrumb);