import React from 'react'

import Button from './button'
import Input from './input'
import FormItem from './form-item'
import Table from './table'

var header = [
    {title:'name',dataIndex:'name'},
    {title:'age',dataIndex:'age'},
    {title:'sex',dataIndex:'sex'},
]

var data = [
    {name:'ryan',age:27,sex:'boy'},
    {name:'star',age:32,sex:'boy'},
    {name:'yangyang',age:24,sex:'girl'},
]

var Common = React.createClass({
    getInitialState(){
        return {
            value : '1',
            error : false
        }
    },
    render: function () {
        return (
            <div>
                <Button loading={true} type="info">hello world</Button>
                <Input onPressEnter={this.hello}/>

                <FormItem
                    label='姓名'
                    type="text"
                    errmsg='请输入用户名'
                    error={this.state.error}
                    value={this.state.value}
                    onChange={this.handleChange}
                />

                <FormItem
                    label='密码'
                    type="password"
                    errmsg='请输入密码'
                    error={this.state.error}
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <Table data={data} header={header} borer page/>
            </div>
        )
    },
    hello:function (e) {
       alert('hello world')
    },
    handleChange:function (e) {
        if(e.target.value == 'ryan'){
            this.setState({
                error:true,
                value:e.target.value
            })
        }else {
            this.setState({
                error:false,
                value:e.target.value
            })
        }
    }
})

export default Common