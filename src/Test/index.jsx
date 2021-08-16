import React, {Component} from 'react';

export default class Table extends Component {
    state={
        data:[
            {id:1, name: 'Gulxan', status:'test'},
            {id:1, name: 'Gulxan', status:'test'},
            {id:1, name: 'Gulxan', status:'test'},
            {id:1, name: 'Gulxan', status:'test'},
            {id:1, name: 'Gulxan', status:'test'},
            {id:1, name: 'Gulxan', status:'test'},
            {id:1, name: 'Gulxan', status:'test'},
        ]
    };
    render(){
        return (
            <div>

<input type='text ' placeholder='Enter text'/>
<table b>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
{
    this.state.data.map((id,name,status)=>(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{status}</td>
        </tr>
    ))
}
    </tbody>
    
</table>
            </div>
        )
    }
}
