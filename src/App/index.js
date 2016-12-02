


var ChildA = require('./child-a'),
    ChildB = require('./child-b'),
    ChildC = require('./child-c'),
    React =require('react'),
    request = require('superagent');

require('./App.css')

var App = React.createClass( {
    getDefaultProps:function () {
        console.log(111,'getDefaultProps')

    },
    getInitialState:function () {
        console.log(222,'getInitialState')
        return {
            name : 'app'
        }
    },
    componentWillMount:function () {
        console.log(333,'componentWillMount')
    },

    render:function () {
        console.log(444,'render')
        return (
            <div className="App">
                <h3>hello {this.state.name}</h3>
            </div>
        );
    },

    componentDidMount:function () {
        request.get('http://101.200.129.112:9527/react1/student/')
            .end(function (err, res) {
                console.log(res.body)
            })
    },

    componentWillReceiveProps:function () {
        console.log(666,'componentWillReceiveProps')
    },
    componentWillUpdate:function () {
        console.log(777,'componentWillUpdate')
    }
})

module.exports = App;
