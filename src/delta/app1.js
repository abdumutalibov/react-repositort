import React, { Component } from "react";

class Item extends Component {
  state = {
    count: this.props.value
  };

  handleIncrement = e => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <div className="card mb-2">
          <h5 className={this.styleCardHeader()}>{this.styleCount()}</h5>
          <div className="card-body">
            <button
              onClick={item => {
                this.handleIncrement({ item });
              }}
              className="btn btn-lg btn-outline-secondary"
            >
              Increment
            </button>

            <button className="btn btn-lg btn-outline-danger ml-4">
              Delete
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  styleCardHeader() {
    let classes = "card-header h4 text-white bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  styleCount() {
    const { count } = this.state;
    return count === 0 ? "No Items!" : count;
  }
}

export default Item; 
 
 
// export default class Menu extends Component{
//   constructor(props){
//       super(props);
//           this.state={
//               lists:data,
//           }
//       }
  
//   render() {
//       return(
//        <div className='menu-con'> 
//         <div className='category'>
//           {this.state.lists.map((value)=>{
//               return (
//               <div>
//                   <h1>{value.catrgory}</h1>
//                   <div className='list'>
//                       {
//                           value?.list.map((item)=>{
//                               return(
//                                   <div className ='list-item'>
//                                      <h1>{item.title}</h1> 
//                                       </div>
//                               )
//                           })
//                       }
//                   </div>
//               </div>
//               );
//           })}
//       </div>
//       </div> 
//       );
//   }
// }
 