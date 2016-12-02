import React from 'react'
import './index.css'

// 需求：得到最外层的组件的数据？

// 1
// card
// getChildContext(){
//     return {
//         current:this.props.current
//     }
// },
//
// childContextTypes:{
//     current:React.PropTypes.number
// }


//2
// contextTypes:{
//     current:React.PropTypes.number
// },


var Card = React.createClass({
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    },
    //设置子组件的上下文
    getChildContext(){
        return {
            current:this.props.current
        }
    },
    //子组件的上下文类型
    childContextTypes:{
        current:React.PropTypes.number
    }
})

var Title = React.createClass({
    contextTypes:{
        current:React.PropTypes.number
    },
    render(){
        var active = ''
        if(this.props.index == this.context.current){
            active = 'active'
        }

        return (
            <div className={active} onClick={this.props.onClick}>{this.props.children}</div>
        )
    }
})
var TitleBar = React.createClass({
    render(){
        return (
            <div className="title-bar">
                {this.props.children}
            </div>
        )
    }
})
var ContentBar = React.createClass({
    render(){
        return (
            <div className="content-bar">
                {this.props.children}
            </div>
        )
    }
})
var Content = React.createClass({
    contextTypes:{
        current:React.PropTypes.number
    },
    render(){
        var display = ''
        if(this.props.index == this.context.current){
            display = 'block'
        }else {
            display = 'none'
        }
        return (
            <div style={{display:display}}>{this.props.children}</div>
        )
    }
})

Card.Title=Title
Card.TitleBar = TitleBar
Card.ContentBar= ContentBar
Card.Content =Content


export default Card