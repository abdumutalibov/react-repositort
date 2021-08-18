import React from 'react'
import MaterialTable from 'material-table'

export const Table=()=>{
    const data=[
        {id:1, grade:100, title:'pdp'},
        {id:2, grade:50, title:'it'},
        {id:3, grade:40, title:'java'},
        {id:4, grade:87, title:'it'},
        {id:5, grade:70, title:'ultra'},
        {id:5, grade:70, title:'it'},
        {id:5, grade:92, title:'c++'},
        {id:5, grade:70, title:'php'},
        {id:5, grade:90, title:'it'},
        {id:5, grade:70, title:'consumer'},
        {id:5, grade:81, title:'pyhon'},
    ]
    const columns=[
        {
            title:'ID', field:'id'
        },

        {
            title:'Grade', field:'grade'
        },

        {
            title:'Title',field:'title'
        }
    ]
    return(<div className='div'>

        <MaterialTable title="Material Table"
        data={data}
        columns={columns}
        options={{
            // search:false,
            paging:false,
            // filtering:true,
            // exportButton:true
        }}
      />
    </div>)
}