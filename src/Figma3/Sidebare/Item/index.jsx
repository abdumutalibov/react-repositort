import React, { Component } from "react";
import { Crucl, Item, NavImg, Text1 } from "./style";
import uy from "../../img/uy.png";
export default class index extends Component {
  render() {
    return (
      //             <div className='item'>
      //                 <img className='nav-img' src={this.props.icon}/>

      // <p className='nav-title'>{this.props.title} </p>
      //             </div>

      <Item>
        <NavImg>
          <img src={this.props.icon} />
        </NavImg>
        <Text1>{this.props.title}</Text1>
        
      </Item>
      
    );
  }
}
