import React, {Component} from 'react';
import { data } from '../mock';
import './Menu.css'
import Order from '../Order';
// import {data } from '../mock'

export default class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            lists: data,
            selected:[],
            total: 0
        }
    }
    render() {
        const onselect = (value)=>{
            const selected =[...this.state.selected,{...value, id:this.state.selected.length+1}]
            this.setState({selected})
            selected.forEach(item=>{
                this.setState({total: this.state.total+item.price})
            })
        }
const onDelete =(id)=>{
    const newData = this.state.selected.filter(value=>value.id !==id)
    this.setState({selected:newData})
}

    

        return (
            <div className='menu-con'>
                <div className='category'>
                    {this.state.lists.map((value)=>{
                     return(
                 <div>
                 <h1 className='h1'>{value.catrgory}</h1>
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

   