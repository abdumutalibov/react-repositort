import React, {Component} from 'react';
import { data } from '../mock';
import './Order.css'
// import {data } from '../mock'

export default class Order extends Component {
    constructor(props){
        super(props)
        this.state = {
            lists: data,
        }
    }
    render() {

     


        const onDelete=(id)=>{
            console.log(id);
            const newData=this.props.data.filter((value)=> value.id !==id);
            this.setState({data:newData})
        }
        return (
            
            <div className='order-con'>
                <h1>Selected orders list</h1>

              


                    <div className='selected-list'>
                        {this.props?.selected?.map((value)=>(
                        <div >  
                            <h1>{value.title}</h1>
                            <h3>{value.price}</h3>
                            
                            <button onClick={()=>this.props.onDelete(value.id)}>delete</button>


                              {/* <button onClick={()=>pressDelete(this.props.id)}>delete</button> */}
                        </div>  
                        ))}
                    </div>
                <div className='total'>
                    
                    <h1>Total: {this.props.total} sum</h1>
                    
                </div>
            </div>
        )
    }
}
