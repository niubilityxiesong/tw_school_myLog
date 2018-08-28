import React from 'react';
import { Layout, Breadcrumb, Menu, Icon, DatePicker, Input, Button } from 'antd';
import { connect } from "react-redux";
import BreadCrumb from './BreadCrumb';
import Navigation from './Navigation';


const { Content, Sider } = Layout;
const { TextArea } = Input;

class MyLogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text:"",
            date:""
        }
    }

    // handleSelectedPageChange = event => {
    //     this.setState({
    //         selectedPage: event.key
    //     })
    // }

    handleTextChange = event => {
        const text = event.target.value;
        console.log(text)
        if (text !== null) {
          this.setState({
            text: text
          });
        }
      };

    render() {
        return (
            <Content style={{ padding: "0 50px", display: 'flex', flexDirection: 'column' }}>
            <BreadCrumb />
            <Layout style={{ padding: "24px 0", background: "#fff" }}>
                <Navigation />
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                <span>新的日志
                    <br />
                    <label>日期：</label>
                    <DatePicker  onChange={(date, dateString) => {
                        this.setState({date:dateString})
                    }}/>
                    <br />
                    <label>总结内容：</label>
                    <TextArea rows={4} value={this.state.text} onChange={this.handleTextChange}/>
                    <Button type="primary" onClick={() => {
                        this.props.addText(this.state.text)
                        this.setState({text:""})
                    }}>提交</Button>
                    <Button type="primary">取消</Button>
                </span>
                </Content>
                <Content style={{ background: "#fff", padding: 24, margin: 0, minHeight: 280 }}>
                    <span>
                        <label>{this.state.date}的日志</label>
                        {this.props.message.map(element => {
                            return <TextArea defaultValue={element.text} disabled={true} />;
                        })}
                    </span>
                </Content>
            </Layout>
            </Content>
        );
    }
}
const mapPropsToDispatch = state => ({
    message: state.message
  });
const mapDispatchToState = dispatch => ({
    addText: text => {
      dispatch({
        type: "ADD_TEXT",
        data: { text }
      });
    }
  });
  export default connect(mapPropsToDispatch,mapDispatchToState)(MyLogPage);