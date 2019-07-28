import React from "react";
import { Row, Col } from "antd";
import Header from "./component/Header";
import Footer from "./component/Footer";
import NavLeft from "./component/NavLeft";
import './style/common.less'
// import Home from './pages/home'//在这里导入Home组件,以后使用路由进行更改
export default class Admin extends React.Component {
  render() {
    return (
      <Row className="container">
        <Col span="4" className="nav-left">
          <NavLeft />
        </Col>
        <Col span="20" className="main">
          {/* Right */}
          <Header/>
          <Row className="content">
            {/*content*/}
            {/* <Home/> */}
            {this.props.children}
          </Row>
          {/* <Footer>Footer</Footer> */}
        </Col>
      </Row>
    );
  }
}
