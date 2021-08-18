import React from 'react'
import MaterialTable from 'material-table'

export const Table=()=>{
    const data=[
        {id: 1, name: 'Valibek', status:'Haydovchi'},
            {id: 2, name: 'Alesh', status:'Sotuvchi'},
            {id: 3, name: 'Jumabek', status:'O`quvchi'},
            {id: 4, name: 'Gulxan', status:'kassir'},
            {id: 5, name: 'Vasiya', status:'Quruvchi'},
    ]
    const columns=[
        {
            title:'ID', field:'id'
        },

        {
            title:'Name', field:'name'
        },

        {
            title:'Status',field:'status'
        }
    ]
    return(<div className='div'>

        <MaterialTable title="Material Table"
        data={data}
        columns={columns}
        options={{
            search:false,
            paging:false,
            filtering:true,
            exportButton:true
        }}
      />
    </div>)
}