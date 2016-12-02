import React from 'react'

import TodoList from './to-do-list'

function id() {
    return Math.random().toString().replace(/\./,'')+'-'+Math.random().toString().replace(/\./,'')
}

var TodoMVC = React.createClass({
    getInitialState:function () {
        return {
            items : [
                {text:'aaa',id:id(),type:'active'},
                {text:'bbb',id:id(),type:'complete'},
                {text:'ccc',id:id(),type:'active'}
            ],
            value:'inp',
            type : 'active'
        }
    }
    ,
    render:function () {
        var items = this.state.items,
            type = this.state.type

        var json = []
        items.map(function (obj) {
            if(obj.type == type || type == 'all'){
                json.push(obj)
            }
        })

        return (
            <div className="todo-mvc">
                <h3>todos</h3>

                <p>
                    <input value={this.state.value} onChange={this.handleChange}/>
                    <button onClick={this.handleAdd}>提交</button>
                </p>
                <TodoList
                    items={json}
                    onDelete={this.handleDelete}
                    onEdit={this.handleEdit}
                    onType={this.handleType}
                />
                <p>
                    <button style={{background:this.state.type == 'all' ? 'red':'#dddddd'}} onClick={(e)=>this.setState({type:'all'})}>all</button>
                    <button style={{background:this.state.type == 'active' ? 'red':'#dddddd'}} onClick={(e)=>this.setState({type:'active'})}>active</button>
                    <button style={{background:this.state.type == 'complete' ? 'red':'#dddddd'}} onClick={(e)=>this.setState({type:'complete'})}>complete</button>
                </p>
            </div>
        )
    },
    handleType:function (obj,type) {
        var items = this.state.items;


        items = items.map(function (o) {
            if(o.id == obj.id){

                o.type = type
            }
            return o
        })

        this.setState({items:items})
    },
    handleEdit:function (obj) {
        var items = this.state.items;
        items = items.map(function (o) {
            console.log(obj.id,o.id)
            if(o.id == obj.id){

                o.text = obj.text
            }
            return o
        })

        this.setState({items:items})
    },

    handleDelete:function (obj) {
        var items = this.state.items,
            json = []
        for(var i=0;i<items.length;i++){
            if(items[i].id != obj.id){
                json.push(items[i])
            }
        }
        this.setState({items:json})
    },
    handleAdd:function () {
        var items = this.state.items,
            text = this.state.value
        items.push({
            text:text,
            id:id()
        })
        this.setState({
            items:items,
            value : ''
        })
    },
    handleChange:function (e) {
        this.setState({
            value:e.target.value
        })
    }
})
module.exports = TodoMVC