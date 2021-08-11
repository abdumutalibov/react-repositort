import React from 'react';
import './App.css'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'a',
            data: [
                {id: 1, name: 'Jumabek', status:'почталиoн'},
                {id: 2, name: 'Bekzod', status:'уборшик'},
                {id: 3, name: 'Shaxzot', status:'Sotuvchi'},
                {id: 4, name: 'Ozod', status:'programis'},
                {id: 5, name: 'Jasur', status:'povir'},
                
            ],
            name: '',
            status: ''
        };
    }

    render() {
        
        const onDelete=(id)=>{
            console.log(id);
            const newData=this.state.data.filter((value)=> value.id !==id);
            this.setState({data: newData})
        }
        const add = ()=> {
        //     console.log('added');
        //    const data = {
        //        name: this.state.name,
        //      status: this.state.status,
        //     id: this.state.data.length + 1,
        // }
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
      
        return(  <div className='main'>
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
                        <input type='text' value={id}/>
                    </td>
                    <td>
                    <input type='text' value={name}/>
                    </td>
                    <td>{status}</td>
                    <td><button onClick={()=>onDelete(id)}>delete{id}</button></td>
                    <td><button>edit{id}</button></td>

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
