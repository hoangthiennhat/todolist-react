import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search : ''
        }
    }
    
    findSearch = (event) => {
        this.props.findSearch(event.target.value);
        
    }
    width = {
        width : '30%'
    }

    render() {
        
        return (
        <div className='form-group search d-flex'>
            <input type='text' 
                    placeholder='Nhập từ khoá' 
                    style={this.width} 
                    className='form-control d-inline' 
                    onChange = { (event) => this.findSearch(event) }
                />
            <input type='submit' value='Search' className='btn btn-info ml-2    '/>
        </div>
        );
    }
}

export default Search;