import React from 'react';
import  './index.css'

class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            cont:0,
          show:true
        };
    }


    render() {
        const  incre=()=>{
            this.setState({cont:this.state.cont+1})
        }
        const  decre=()=>{
            this.setState({cont:this.state.cont-1})
        }


      const  ToggleClick = () => {
            this.setState({ show: !this.state.show });
          }
        // const add = ()=> {
    
        //     const newData = [
        //         ...this.state.incre,
        //         {343
        //             incre: this.state.incre,
        //             decre: this.state.decre,
        //             // id: this.state.data.length+1,
        //         },
        //        ];
        //    console.log(newData,'test');
        //    this.setState({data: newData, incre: '', decre:''});
   
        //    }
        return (
            <div className='box'>
                {/* <button onClick={add}>Add</button> */}
                 <button onClick={incre}>-</button>
                <h1 >{this.state.cont}</h1>
                <button onClick={decre}>+</button>



                <button onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
            </div>
        );
    }
}



export default index;
