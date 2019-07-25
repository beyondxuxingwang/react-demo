import React from 'react';
import {Row ,Col} from 'antd'
import './index.less'
import Utils from '../../utils/utils'
export default class Header extends React.Component{
    state={}
    componentWillMount(){
        this.setState({
            userName:'xxw'
        })
        setInterval(() => {
           let systime =  Utils.formateDate(new Date().getTime())
           this.setState({
               time:systime
           })
        }, 1000);
    }
    render(){
        return(
           <div className="header">
               <Row className="header-top">
                    <Col span="24">
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
               </Row>
               <Row className="breadcrumb">
                   <Col span="4">首页</Col>
                   <Col span="20" className="bc-right">
                       <span className="date">{this.state.time}</span>
                       <span className="weather">晴转多云</span>
                   </Col>
               </Row>
           </div>
        )
    }
}