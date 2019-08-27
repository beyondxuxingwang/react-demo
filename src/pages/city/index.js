import React from 'react';
import { Card, Button, Table, Form, Select } from 'antd';

import { api } from '../../api/api.js'

const FormItem = Form.Item
const Option = Select.Option
export default class City extends React.Component {
    render() {
        return (
            <div>
                <Card >
                    <FilterForm></FilterForm>
                </Card>

            </div>
        )
    }
}

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
                    <Button>查詢</Button>
                    <Button>充值</Button>
                </FormItem>

            </Form>

        )
    }
}

FilterForm = Form.create({})(FilterForm);