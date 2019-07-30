import React from 'react'
import { Card, Table, Col } from "antd";

import { api } from '../../api/api.js'

export default class Table2 extends React.Component {
    state = {
        dataSource: []
    }
    componentWillMount() {
        this.getTableList();
    }

    getTableList = () => {
        let params = {};
        api('/tableList', 'get', params).then((res => {
            console.log(res);
            this.setState({
                dataSource: res.data.data.list
            })

        }))
    }
    render() {
        // const dataSource = [
        //     {
        //         id:'1',
        //         name:'1233'
        //     },
        //     {
        //         id:'1',
        //         name:'1233'
        //     },
        // ]
        const columns = [
            {
                title: '序号',
                dataIndex: 'id',
                key: 'id',

            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',

            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                render(sex){
                    return sex == 1 ?'男':'女'
                }
            },
            {
               
                title: '状态',
                dataIndex: 'state',
                key: 'state',
                render(state){
                   let config={
                       '1':'审核中',
                       '2':'未开始',
                       '3':'完结'
                   }
                   return config[state];
                } 
            }
        ]
        return (
            <div>
                <Card
                    title="基础表格"
                >

                    <Table bordered dataSource={this.state.dataSource} columns={columns} />

                </Card>
            </div>
        )
    }

}
