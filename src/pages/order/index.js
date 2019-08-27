import React from 'react';
import { Card, Button, Table, Form, Select, Modal, message } from 'antd';
import { api } from '../../api/api.js'

const FormItem = Form.Item;
const Option = Select.Option



export default class Order extends React.Component {
    state = {
        isModal: false
    }
    render() {
        const columns = [{
            title: '订单编号',
            dataIndex: 'order_sn'
        }, {
            title: '车辆编号',
            dataIndex: 'bike_sn',
            width: 100,
        }, {
            title: '用户名',
            dataIndex: 'user_name'
        }, {
            title: '手机号',
            dataIndex: 'mobile'
        }, {
            title: '里程',
            dataIndex: 'distance',
            render(distance) {
                return (distance / 1000) + " " + "km";
            }
        }, {
            title: '行程时长',
            dataIndex: 'total_time'
        }, {
            title: '状态',
            dataIndex: 'status',
            render(status) {
                return status == 1 ? '进行中' : '行程结束';
            }
        }, {
            title: '开始时间',
            dataIndex: 'start_time'
        }, {
            title: '结束时间',
            dataIndex: 'end_time'
        }, {
            title: '订单金额',
            dataIndex: 'total_fee'
        }, {
            title: '实付金额',
            dataIndex: 'user_pay'
        }];
        const selectedRowKeys = this.state.selectedRowKeys;

        const rowSelection = {
            type: 'radio',
            selectedRowKeys,
            onChange: this.onSelectChange
        };
        return (
            <div>
                <Card>
                    <FilterForm />
                </Card>
                <Card style={{ marginTop: 10 }} >
                    <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
                    <Button type="primary" style={{ marginLeft: 20 }} onClick={this.handleConfirm}>结束详情</Button>
                </Card>
                <div style={{ background: '#fff' }}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.list}

                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index);
                                }
                            };
                        }}
                    // pagination={this.state.pagination}
                    />

                </div>
                <Modal
                    title="结束订单"
                    visible={this.state.isModal}
                    onCancel={
                        () => {
                            this.setState({
                                isModal: false
                            })
                        }
                    }
                    onOk={this.handleFinishOrder}
                    width={600}
                >
                    <Form>
                        <FormItem label='车辆编号'></FormItem>
                        <FormItem label='车辆编号'></FormItem>
                        <FormItem label='车辆编号'></FormItem>
                        <FormItem label='车辆编号'></FormItem>
                        <FormItem label='车辆编号'></FormItem>
                    </Form>
                </Modal>


            </div>
        )
    }
    componentWillMount() {
        this.requestList();
    }
    // 初始化订单列表
    requestList = () => {
        console.log(111);
        let params = {
            page: 1
        }
        api('order/list', 'get', params).then(res => {
            console.log(res);

            // let list = res.data.result.item_list.map((item, index) => {
            //     item.key = index;
            //     return item;
            // });
            this.setState({
                list: res.data.result.item_list,
                // pagination: Utils.pagination(res, (current) => {
                //     _this.params.page = current;
                //     _this.requestList();
                // })
            });

        })
    }
    // 点击结束订单
    handleConfirm = () => {
        console.log(222);
        let params = {

        }
        api('/order/ebike_info', 'get', params).then(res => {
            console.log(res);

        })
        this.setState({
            isModal: true,
        })

    }
    onRowClick = (record, index) => {
        let selectKey = [index];
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        });
    };

    onSelectChange = (selectedRowKeys, selectedItem) => {
        const record = selectedItem[0];
        this.setState({
            selectedRowKeys: selectedRowKeys,
            selectedItem: record
        });
    };

}
// -----

class FilterForm extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout='inline'>
                <FormItem label="城市">
                    {
                        getFieldDecorator('city_id')(
                            <Select
                                style={{ width: 100 }}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                                <Option value="3">深圳市</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button>查询</Button>
                    <Button>重置</Button>
                </FormItem>

            </Form>

        )
    }
}

FilterForm = Form.create({})(FilterForm);