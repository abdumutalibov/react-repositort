import React, { Component } from 'react'
import './Navbar.css'
import { Card, Get, Home, Hoow, Img1, Img2, Lets, Lucos, Main, Text1, Text2, Text3, Text4 } from './style'
import Uy from './img/uy.png'
import Rang from './img/rang.png'
import Kres from './img/kres.png'

export default class Navbar extends Component {
    render() {
        return (
            <div className='Main'>
                
                <Card >
                    <Home ><img src={Uy}/></Home>
                    <Lucos>Locus
                        <Text1>Home 
                        <Text2>Contact </Text2>
                        <Text2> Locatin</Text2>
                        <Text2> About Us<Text3>Sign Up</Text3></Text2>
                       
                        </Text1> 
                        
                        </Lucos>
                   
                    </Card >
               <Get>Get the inspiration </Get>
               <Get>of interior design </Get>
               <Get>here 
                   
              
               <Text4>architecture not only about </Text4>
               <Text4>engineering, it even lands to </Text4>
               <Text4>you will get a residentical </Text4>
               <Text4>design with an extrationary  </Text4>
               <Text4>touch of art. </Text4>
               <Lets>Let's go
                     <Img2><img src={ Rang}/></Img2>  

                   <Img1><img src={Kres} />
               </Img1></Lets> 
                
               <Hoow>How it works
              </Hoow>
               </Get>
               
            </div>
        )
    }
}
