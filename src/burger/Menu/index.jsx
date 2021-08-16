import React, { Component } from 'react'
import './Menu.css'
import {data} from '../../Foods/mock'
import Order from '../Order'


export default class menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            lists: data,
            selected:[],
            total: 0
        }
    }
    render() {
        const onselect = (item)=>{
            const selected = [...this.state.selected, item]
            this.setState({selected})  
            selected.forEach(item=>{
                this.setState({total:this.state.total + item.price})
            })
        }

        const onDelete=(id)=>{
            console.log(id, 'select');
        }

        return (
            <div className='menu-con'>
                <div className='category'>
                    {this.state.lists.map((value)=>{
                     return(
                 <div>
                 <h1>{value.category}</h1>
                  <div className='list'>
                     {
                 value?.list.map((item)=>{
                 return(
                   <div onClick={()=>onselect(item)} className='list-item'>
                <img src={item.img} alt="" />
                   <h1>{item.title}</h1>
                        <h3>{item.price}sum</h3>
                   </div>
                )
                                        })
                                    }
                                </div>

                            </div>
                        ) 
                    })}
                </div>
                <Order 
                onDelete = {(id)=>onDelete(id)}
                total = {this.state.total} selected = {this.state.selected} />
            </div>
        )
    }
}
