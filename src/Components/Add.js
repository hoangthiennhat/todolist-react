import React, { Component } from 'react';
const uuidv1 = require('uuid/v1');
class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            closeOpen : true,
            inputValue : {
                id : '',
                name : ''
            }
        }
    }
    
    changeAdd = () => {
        this.setState({
            closeOpen : !this.state.closeOpen
        })
    }

    // Change  input 

    change = (event) => {
        this.setState({
            
            inputValue : {
                id : uuidv1(),
               name : event.target.value  
            }
        })
    }
    // Add wokr to table
    addWork = (event) => {
        event.preventDefault();
        this.props.work(this.state.inputValue);
    }

    hienThiForm = () => {
        if ( this.state.closeOpen === true ) {
            return (
                <div className='edit form-group col-4 '>
                    <button className='btn btn-primary' onClick = {() => this.changeAdd()}>Thêm mới</button>     
                </div>
                
            );
        } else {
            return (
                <form className='edit form-group col-4 '>
                    <button className='btn btn-secondary' onClick = {() => this.changeAdd()}>Đóng lại</button>
                    <div className='content-add p-3 border border-info rounded mt-4'>
                    <h4 className='border-bottom border-info pb-3'>Thêm công việc</h4>
                    <label className='mt-3'>Tên</label>
                    <input type='text' placeholder='Công việc mới' className='form-control' onChange = { (event) => this.change(event) }/>
                    <input type='reset' className='btn btn-primary mt-4' value='Thêm' onClick = { (event) => this.addWork(event) }/>
                    </div>
               
                </form>
            ); 
        }
    }
    render() {
        return (
            this.hienThiForm()    
        )
    }
}

export default Edit;