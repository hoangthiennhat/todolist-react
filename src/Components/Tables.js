import React, { Component } from 'react';
// import Db from '../db.json';
import NewItem from './NewItem.js';

class Tables extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            work : this.props.data
        }
    }

    render() {
        
        let { data, findSearch} = this.props;
        console.log(findSearch)
        
        var itemWork = this.state.work.map((value,index) => {
            return (
                <NewItem key={index} 
                        content={ value.name } 
                        stt = { index } 
                        id={ value.id } 
                        delete = { this.props.delete} />
                );
            })
            // filter follow input text
            if (findSearch !== '') {
                let filterTable = this.state.work.filter((val) => {
                    return val.name.toLowerCase().indexOf(findSearch.toLowerCase()) !== -1;
                })
                itemWork = filterTable.map((value,index) => {
                    return (
                        <NewItem key={index} 
                                content={ value.name } 
                                stt = { index } 
                                id={ value.id } 
                                delete = { this.props.delete} />
                        );
                    })
            
            }
            localStorage.setItem('work',JSON.stringify(data));    
        return (
            <div className='show col-8 '>
              <table className='w-100'>
                <thead>
                    <tr>
                        <td>Stt</td>
                        <td>Công việc</td>
                        <td>Hành động</td>
                    </tr>
                </thead>
                <tbody>
                    { itemWork }
                </tbody>
                

              </table>
            </div>
        );
    }
}

export default Tables;