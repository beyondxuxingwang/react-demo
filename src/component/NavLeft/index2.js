import React from 'react';
import MenuConfig from '../../config/menuConfig'
import { Menu, Icon, Switch, Col } from 'antd';

import { NavLink, withRouter } from 'react-router-dom';
import './index.less'
import { from } from 'rxjs';
const { SubMenu } = Menu;


export default class NavLeft extends React.Component {

    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode
        })
    }
    // 点击logo图标
    homeHandleClick = () => {
        console.log(1111);

        // const {dispatch} = this.props;
        // dispatch(switchMenu('首页'));
        // this.setState({
        //   currentKey: ""
        // });
    };
    GOrouter = (e) => {
        console.log(e);
        // this.props.history.push(e);

    }
    // 菜单渲染  这个地方就是函数
    renderMenu = (res) => {
        return res.map((item) => {
            if (item.childern) {
                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.type} />
                                {item.title}
                            </span>

                        }
                    >
                        {this.renderMenu(item.childern)}
                    </SubMenu>
                )
            }
            return (


                <Menu.Item title={item.title} key={item.key} onClick={this.GOrouter.bind(this, item.key)}>
                    <NavLink to={item.key}>
                        <Icon type={item.type} />
                        <span>


                            {item.title}

                        </span>
                    </NavLink>
                </Menu.Item>
            )

        })
    }
    render() {

        return (
            <div>
                <NavLink to='/logo' onClick={this.homeHandleClick}>
                    <div className="logo" >
                        <img src="/assets/logo.png" alt="" />
                        <h1>Xxw</h1>
                    </div>
                </NavLink>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['home']}
                    defaultOpenKeys={['home']}
                    style={{ height: '100%', borderRight: 0 }}
                    theme={"dark"}
                >

                    {this.state.menuTreeNode}
                </Menu>

                {/* <Menu
                    // style={{ width: 256 }}
                    // defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['sub1']}
                    // mode={this.state.mode}
                    theme={"dark"}
                >
                    {this.state.menuTreeNode}
                </Menu> */}
            </div>
        )
    }
}