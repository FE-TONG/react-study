import React from 'react'

import './index.css'

var Table = React.createClass({
    render:function () {
        var that = this
        var header = this.props.columns,
            data = this.props.dataSource

        var arr = []
        var headerNodes = header.map(function (obj) {
            arr.push(obj.dataIndex)
            return (
                <td key={obj.key}>{obj.title}</td>
            )
        })

        var nodes = data.map(function (obj,i) {
            var tr =  arr.map(function (h,j) {
                return (
                    <td key={'td-'+obj[h]+'-'+j}>{obj[h]}</td>
                )
            })
            return (
                <tr onClick={(e)=>that.props.onRowClick(obj)} className="tr" key={'tr-'+i}>{tr}</tr>
            )
        })

        var page =null
        if(this.props.page){
            page =  (
                <p>
                    <a href="#" >page-pre</a>,
                    <a href="#">page-1</a>,
                    <a href="#">page-2</a>,
                    <a href="#">page-3</a>,
                    <a href="#">page-next</a>
                </p>
            )
        }

        return (
            <div>
                <table >
                    <thead>
                        <tr>
                            {headerNodes}
                        </tr>
                    </thead>
                    <tbody>
                            {nodes}
                    </tbody>
                </table>
                {page}
            </div>
        )
    }
})

export default Table