import React from 'react'

import Button from './button'
import Input from './input'
import Table from './table'


const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}];

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}];

import FormItem from './form-item'
var AntStudy = React.createClass({
    getInitialState:function () {
        return {
            value : 'aaa',
            error : false
        }
    },
    render:function () {
        return (
            <div>
                <h3>ant-study</h3>
                <Button size='large' type='info' loading={true}>我是按钮</Button>
                <Input
                    value={this.state.value}
                    onChange={(e)=>this.setState({value:e.target.value})}
                    onPressEnter={this.enter}
                />
                <Table page boder onRowClick={this.handleClick} dataSource={dataSource} columns={columns} />

                <FormItem
                    label='姓名'
                    errmsg='请不要输入敏感字符'
                    error={this.state.error}
                    value={this.state.value}
                    onChange={this.handleChange}
                />

            </div>
        )
    },
    handleChange:function (e) {
        if(e.target.value == 'ryan'){
            this.setState({
                value:e.target.value,
                error : true
            })
        }else{
            this.setState({
                value:e.target.value,
                error : false
            })
        }

    },
    enter:function (e) {
        alert(e.target.value)
    },
    handleClick:function (obj) {
        alert(JSON.stringify(obj))
    }
})

export default AntStudy