
import React, {Component} from 'react';
import TestAccount from '../axios/testAccount';
import DataTable from '../core-logic/DataTable';
import displayBankAccountcss from '../core-logic/displayBankAccount.css'

export default class displayBankAccount extends React.Component
{

    
    constructor(props) {
        super(props);
        this.state = { AccountsData: [] };
    }

   async componentDidMount()
    {
        await TestAccount.get().then(res => {
            this.setState({ AccountsData: res.data.bankList });
        })  
        .catch(function (error) {
            console.log(error);
        })
    
        
}


dataTable() {
    return this.state.AccountsData.map((data, i) => {
        return <DataTable obj={data} key={i} />;
    });
}
render() {
    return (
        <div className="wrapper-users">
            <div className="container">
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <td>Account Type</td>
                            <td>Bank Aocount Number</td>
                            <td>Bank Routing Number</td>
                            <td>Bank Name </td>
                        </tr>
                    </thead>
                    <tbody className='table-light displayBankAccountcss'>
                        {this.dataTable()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


}