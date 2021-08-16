import React from 'react';
import './style.css';

// import Order from '../Order';
import Menu from '../Menu';
import Order from '../Order';
import {data} from '../../Foods/mock'
class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
                <>
                
                       <h1>Lotteria</h1>
                    <div className='cont'>
             
              
                <Menu />
                 <Order />
            
            </div>
           </>
        );
    }
}


export default index;
