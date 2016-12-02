import React from 'react';

import './index.css'

var ChildA = React.createClass( {
    render() {
        return (
            <div className="child-a">
                child-b
            </div>
        );
    }
});

module.exports = ChildA;