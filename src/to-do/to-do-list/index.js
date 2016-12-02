import React from 'react'


var TodoItem = React.createClass({
    getInitialState:function () {
        return {
            value : this.props.text
        }
    },
    render:function () {
        return (
            <li>

                {this.props.text}
                <button onClick={(e)=>this.props.delete(this.props.o)}>删除</button>
                <button onClick={(e)=>this.props.toggle(this.props.o,this.props.type == 'active' ? 'complete':'active')}>toggle-->{this.props.type}</button>
                <br/>
                <input value={this.state.value} onChange={this.handleChange}/>
                <button onClick={this.handleEdit}>确定</button>
                <button onClick={this.handeCancel}>取消</button>
                <br/><br/>
            </li>
        )
    },
    handeCancel:function () {
        this.setState({
            value:this.props.text
        })
    },
    handleChange:function (e) {
        this.setState({
            value:e.target.value
        })
    },
    handleEdit:function () {
        var obj = {
            id:this.props.id,
            text:this.state.value
        }
        this.props.edit(obj)
    }
})

var TodoList = React.createClass({
    render:function () {
        var that = this
        var nodes = this.props.items.map(function (o) {
            return (
                <TodoItem
                    type={o.type} i
                    d={o.id}
                    edit={that.props.onEdit}
                    o={o}
                    key={o.id}
                    text={o.text}
                    delete={that.props.onDelete}
                    toggle={that.props.onType}
                />
            )
        })
        return (
          <ul>{nodes}</ul>
        )
    }
})
module.exports = TodoList