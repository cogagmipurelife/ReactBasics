import React from 'react';
import { Link } from "react-router-dom";
import DisplayBankAccount from '../core-logic/displayBankAccount'

class aboutReact extends React.Component {
  render() {
    
    return(
      <div>
        <br/>
        <br/>
        <br/>
        <h3>
       <span style={{color: '#1E90FF'}}>During this react demo </span>
       <span style={{color:'#1E90FF'}}>following topics will be explained </span>
       </h3>   
         <br/>
       <br/>
       
           <h4 style={{color: '#FFA500'}}> <li>JSON api call using axios</li> <br/>
           <li> Routing and rendering </li><br/>
           <li> Testing using Jest and Enzyme </li> <br/>
           <li> PCF deployment </li><br/>
           <li> Link to demo - <Link style={{color: '#FF4500', textDecoration:'underline'}} to="/DisplayBankAccount">Bank Details</Link> </li>
           </h4>
            </div>
    );
  }
}

export default aboutReact;