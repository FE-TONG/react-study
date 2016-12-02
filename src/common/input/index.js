
import React from 'react'
var Input = React.createClass({
    render:function () {
        return (
            <input onChange={this.props.onChange} onKeyDown={this.handleInput} type={this.props.type}/>
        )
    },
    handleInput:function (e) {
        if(e.which == 13){
            this.props.onPressEnter(e)
        }
    }
})
export default Input