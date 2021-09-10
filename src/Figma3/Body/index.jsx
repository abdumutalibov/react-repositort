import React, { Component } from 'react'
import Card from '../Card'
import icon from '../img/qul.png'
import Bir from '../img/Bir.png'
import ttt from '../img/bal.png'
import { BodyContainer, MainCon } from './style'
export default class index extends Component {
    render() {
        return (
            <MainCon>
<BodyContainer>
      <Card title='eyy' icon={Bir}/>
      <Card title='Drive' icon={icon}/>
      <Card title='Drive' icon={icon}/>
      <Card title='Drive' icon={icon}/>
      <Card title='Drive' icon={ttt}/>
      <Card title='Drive' icon={icon}/>
      
</BodyContainer>
          </MainCon>
          
        )
    }
}
