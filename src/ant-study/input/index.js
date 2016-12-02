import React from 'react'



var Input = React.createClass({
    render:function () {
        return (
            <div>
                <input
                    value={this.props.value}
                    onChange={this.props.onChange}
                    onKeyDown={this.keyDown}
                />
            </div>

        )
    },
    keyDown:function (e) {
        if(e.which == 13){
            this.props.onPressEnter(e)
        }
    }
})

export default Input