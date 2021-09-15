import React, { Component } from 'react'
import Crucl from './Crucle'
import Card from '../Card'
import icon from '../img/qul.png'
import Bir from '../img/Go1.png'
import ttt from '../img/bal.png'
import tok from '../img/tok.png'
import Mot from '../img/mot.png'
import rul from '../img/rul.png'
import right from '../img/on.png'
import left from '../img/chap.png'
import car from '../img/Car.png'
import caat from '../img/caticon.png'
import { BodyContainer, Car, Circle, Infinit, Left, MainCar, MainCon, Right } from './style'
export default class index extends Component {
    render() {
        return (
            <MainCon>
<BodyContainer >
      <Card title='Start' icon={Bir}/>
      <Card title='Drive' icon={rul}/>
      <Card title='Maintinance' icon={Mot}/>
      <Card title='Battery' icon={tok}/>
      <Card title='Tires' icon={ttt}/>
      <Card title='Lock' icon={icon}/>
       
     
</BodyContainer>
<MainCar>
<Infinit>Infinit Renault
 <sup style={{
    paddingRight:'1px' ,
fontFamily: 'Gilroy-Medium',
fontSize: '16px',
lineHeight: '19px',
/* identical to box height */

color: '#000000'
}}>TM</sup>

</Infinit>



<Left><img src={left}/></Left>
<Right><img src={right}/></Right>

<Circle>
<Crucl title='tt' icons={caat}/>
<Crucl title='tt' icons={rul}/>
<Crucl title='tt' icons={rul}/>
<Crucl title='tt' icons={rul}  />

</Circle>

</MainCar>
<Car><img src={car}/></Car>
          </MainCon>
          
        )
    }
}




