import React from 'react'

import {Table,Button,Modal,Form,Input,Radio,Row,Col,message} from 'antd'
const FormItem = Form.Item
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
import 'antd/dist/antd.css'

import request from 'superagent'
import FileList from './file-list'

import {getFileList} from './api'
import './index.css'

import {
    Router,
    Route,
    hashHistory
} from 'react-router';

var R = React.createClass({
    render(){
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Cloud}/>
            </Router>
        )
    }
})


var Cloud = React.createClass({
    getInitialState:function () {
        return {
            file:[],
            path:'',
            loading:false
        }
    },
    render(){
        return(
            <div>
                <h3 className="app-title">ryan-云盘</h3>
                <FileList
                    file={this.state.file}
                    path={this.state.path}
                    onChange={this.getFile}
                    loading={this.state.loading}
                />
            </div>
        )
    },
    getFile(path){
        hashHistory.push(path)
        var that = this
        that.setState({
            loading:true
        })
        getFileList(path,function (res) {
            console.log(res)
            that.setState({
                file:res.file,
                path:res.path,
                loading:false
            })
        },function (err) {
            console.log('err',err)
        })
    },
    componentDidMount(){
        this.getFile('/')
    }
})





export default R