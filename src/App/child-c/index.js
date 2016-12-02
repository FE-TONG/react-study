import React from 'react';

require('./index.css')
var ChildC = React.createClass( {
    render() {
        return (
            <div className="child-c">
               child-a
            </div>
        );
    }
})

module.exports = ChildC;