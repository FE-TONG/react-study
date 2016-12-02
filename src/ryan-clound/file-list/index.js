import React from 'react'
import {Icon} from 'antd'
import './index.css'

import Loading from '../loading'
var FileItem = React.createClass({
    render(){
        const {name,onChange,path} = this.props
        return(
            <li className="file-item" onClick={(e)=>onChange(path)}>
                <span className="file-item-icon">
                    <Icon type="folder" />
                </span>
                <span className="file-item-name">{name}</span>
            </li>
        )
    }
})



var FileList = React.createClass({
    render(){
        const {path,file,onChange,loading,Load} = this.props
        var nodes = file.map(function (obj) {
            return (
                <FileItem
                    name={obj.name}
                    path={obj.path}
                    key={path+'-'+obj.name}
                    onChange={onChange}
                />
            )
        })



        if(loading){
            nodes = Load
        }

        return(
            <div className="file-content">
                <ul className="file-list" style={{display:loading?'none':'block'}}>
                    {nodes}
                </ul>

                <div style={{display:loading?'block':'none'}}>
                    <Loading/>
                </div>

            </div>

        )
    }
})
export default FileList