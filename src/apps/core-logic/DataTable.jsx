import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.accountType}
                </td>
                <td>
                    {this.props.obj.bankacctnumber}
                </td>
                <td>
                {this.props.obj.bankRoutingNumber}
                </td>
                <td>
                {this.props.obj.bankname}
                </td>
            </tr>
        );
    }
}

export default DataTable;