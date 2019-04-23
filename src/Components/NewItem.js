import React, { Component } from 'react';

class NewItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusButton : true,
            nameInput : this.props.content,
            defaultValue : this.props.content
        }
    }
    
    changeButton = () => {
        this.setState({
            statusButton : !this.state.statusButton
        })
    }

    changeButtonSave = () => {
        if (this.state.nameInput === '') {
            alert('Bạn phải nhập công việc');
        } else {
            this.setState({
                statusButton : !this.state.statusButton,
                nameInput : this.state.nameInput
            })
        }
        
    }

    //change input edit
    changeInput = (event) => {
        this.setState({
            nameInput : event.target.value,
            defaultValue : event.target.value
        })
    }
    // select id to delete
    delete = () => {
        this.props.delete(this.props.id)
    }
    // show button
    showButton = () => {
        // close open button
        if (this.state.statusButton === false) {
            return (
                <React.Fragment>
                    <td>{ this.props.stt + 1 }</td>
                    <td className='px-3'>
                        <input type='text' defaultValue = { this.state.defaultValue } className='form-control '  onChange = { (event) => this.changeInput(event) }/>
                    </td>
                    <td className='py-3'>
                        <button className='btn btn-success' onClick = {() => this.changeButtonSave() }>Save</button>
                    </td>
                </React.Fragment> 
                
                
            )
        } else {
            return (
                <React.Fragment>
                    <td>{ this.props.stt + 1 }</td>
                    <td>{ this.state.nameInput }</td>
                    <td className='py-3'>
                        <button className='btn btn-info mr-3' onClick = {() => this.changeButton() }>Edit</button>
                        <button className='btn btn-danger' onClick = {() => this.delete() }>Delete</button>
                    </td>
                </React.Fragment>
                
                
            )
        }
    }

    render() {
        return (
            <tr>
                
                { this.showButton() }
            </tr>
        );
    }
}

export default NewItem;