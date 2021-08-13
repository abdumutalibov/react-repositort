import React from 'react';
import './App.css'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected:null,
            title: 'a',
            data: [
                {id: 1, name: 'Jumabek', status:'почталиoн'},
                {id: 2, name: 'Bekzod', status:'уборшик'},
                {id: 3, name: 'Shaxzot', status:'Sotuvchi'},
                {id: 4, name: 'Ozod', status:'programis'},
                {id: 5, name: 'Jasur', status:'povir'},
                
            ],
            name: '',
            status: '',
            editname:'',
            editstatus:''
        };
    }

    render() {
        
        const onDelete=(id)=>{
            console.log(id);
            const newData=this.state.data.filter((value)=> value.id !==id);
            this.setState({data: newData})
        }
        const add = ()=> {
    
         const newData = [
             ...this.state.data, 
             {
                 name: this.state.name,
                 status: this.state.status,
                 id: this.state.data.length+1,
             },
            ];
        console.log(newData,'test');
        this.setState({data: newData, name: '', status:''});

        }
       
         
const onName =(e)=>{
    this.setState({name: e.target.value});
}
const onStatus =(e)=>{
    this.setState({status: e.target.value});
}
///======================================================
const onEdit=(id,name , status)=>{
console.log(id);
this.setState({selected:id,editname:name, editstatus:status})

}
const onChangeName =(e)=>{
    this.setState({editname: e.target.value});
}
const onChangeStatus =(e)=>{
    this.setState({editstatus: e.target.value});
}
const onSave=()=>{
    this.setState({selected:null})
}
      
        return(  
        <div className='main'>
<input value={this.state.name} onChange={onName} placeholder='name' type='text'></input>
<input value={this.state.status} onChange={onStatus} placeholder='status' type='text'></input>
<button onClick={add}>Add</button>
                <table border='1'> 
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>action</th>
                        <th>edit</th>
                    </tr>
                </thead>

                <tbody>
            { this.state.data.map(({id,name,status   } ,index)=>{
                return(

                  <tr key={index}>

                    <td>
                        {id}
                    </td>
                    <td>
                   {this.state.selected ===id ?(      
                    <input
                    onChange={onChangeName}       
                  disabled={this.state.selected!==id}
                     type='text'
                     value={this.state.editname}
                     />
                   ):(
                       <div>{name}</div>
                   )}
                   
                    </td>

                    <td>
                        {this.state.selected ===id?(
                    <input
                 onChange={onChangeStatus}
                     disabled={this.state.selected !==id}
                      type='text' 
                      value={this.state.editstatus}/>
                      ):(
                          <div>{status}</div>
                      )}
                    </td>

                    

                    <td><button onClick={()=>onDelete(id)}>delete</button></td>
                    <td><button onClick={()=>this.state.selected===id ? onSave():onEdit(id,name ,status)}>
                        {this.state.selected === id? 'svee':'edit'}
                    </button></td>

                  </tr>
                )
              })
            } 
            </tbody>
                </table>
            </div>
        )
    }
}



export default Index;
