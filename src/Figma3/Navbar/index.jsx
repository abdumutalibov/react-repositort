import React, { Component } from 'react'
import { Icon, Input, Navbar, Select } from './style'
import Men from '../img/ell.png'
export default class index extends Component {
    render() {
        return (
            <div>
                <Navbar>
                  <Input type='text' placeholder='Your '/>
                  <Select>
                      <option value=''>Uzb</option> 
                      <option value=''>Kaz</option> 
                      <option value=''>Rus</option> 
                  </Select>
                  <Icon><img src={Men} width='26'/></Icon>
                  <Icon><img src={Men} width='26'/></Icon>
                  <Icon><img src={Men} width='26'/></Icon>
                </Navbar>
                
            </div>
        )
    }
}
