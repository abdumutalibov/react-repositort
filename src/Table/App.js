import React from 'react';
import './App.css'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'a',
            selected:null,
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
const onSave =(id)=>{
    console.log(id);
    const newData = this.state.data.map((value)=>{
        return value.id !==id
        ? value
        : {
            ...value,
            name: this.state.editname,
            status: this.state.editstatus,
        }
    });
    this.setState({selected:null, data: newData})
};
      
        return(  
        <div className='main'>
            <input></input>
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
                    autoComplete='off'
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
                    autoComplete='off'
                 onChange={onChangeStatus}
                     disabled={this.state.selected !==id}
                    required  type='text' 
                      value={this.state.editstatus}/>
                      ):(
                          <div>{status}</div>
                      )}
                    </td>

                    

                    <td><button onClick={()=>onDelete(id)}>delete</button></td>
                    <td>
                        <button onClick={()=>this.state.selected === id ? onSave(id)
                    :onEdit(id,name ,status)}
                    disabled={
                        this.state.selected === id &&
                        (this.state.editname.length <=0 ||
                            this.state.editstatus.length<=0)
                    }
                    
                    >
                        {this.state.selected === id? 'save':'edit'}
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
