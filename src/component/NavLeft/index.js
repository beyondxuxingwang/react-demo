import React from 'react';
import MenuConfig from '../../config/menuConfig'
import { Menu, Icon, Switch } from 'antd';
import './index.less'
// import MenuConfig from '../../config/menuConfig';

const { SubMenu } = Menu;


export default class NavLeft extends React.Component {
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode
        })
    }

    // 菜单渲染  这个地方就是函数
    renderMenu = (res) => {
        return res.map((item) => {
            if (item.childer) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.childer)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
              <Icon type={item.type} />{item.title}</Menu.Item>
        })
    }
    render() {

        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo.png" alt="" />
                    <h1>Xxw React</h1>
                </div>
                <Menu
                    // style={{ width: 256 }}
                    // defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['sub1']}
                    // mode={this.state.mode}
                    theme={"dark"}
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}