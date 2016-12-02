import React from 'react'

import './index.css'
var Button = React.createClass({
    render:function () {
        return (
            <button className={this.props.type}>{this.props.children}{this.props.loading?'...':''}</button>
        )
    }
})

export default Button