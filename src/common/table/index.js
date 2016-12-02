import React from 'react'
import _ from 'underscore'

var Table = React.createClass({
    render:function () {
        var header = this.props.header.map(function (o) {
            return (
                <td key={o.dataIndex}>{o.title}</td>
            )
        })

        var hea = _.pluck(this.props.header,'dataIndex')
        console.log(hea)

        var nodes = this.props.data.map(function (obj,i) {
            var tr =  hea.map(function (h,j) {
                return (
                    <td key={'td-'+obj[h]+'-'+j}>{obj[h]}</td>
                )
            })
            return (
                <tr key={'tr-'+i}>{tr}</tr>
            )
        })


        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            {header}
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