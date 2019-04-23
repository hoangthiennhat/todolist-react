import React, { Component } from 'react';
import './App.scss';
import Search from './Search';
import Tables from './Tables';
import Add from './Add';
import Edit from './Edit';
import Db from '../db.json';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      duLieu : [],
      nameSearch : ''
    }
    
  }
  // if dont't have data in localStorage turn off this function 
  componentWillMount() {
    if (localStorage.getItem('work') !== null) {
      this.setState({
        duLieu : JSON.parse(localStorage.getItem('work'))
      })
    } else {
      this.setState({
        duLieu : Db
      })
    }
  }

  show = (data) => {
      
          if (data.name !== '') {  
          this.state.duLieu.push({
            id : data.id,
            name : data.name
          })
          this.setState({
            duLieu : this.state.duLieu
          })
          localStorage.setItem('work',this.state.duLieu);  
         
        }
  }

  // delete work
  /**
   * issue this is when delete item but don't update if not have reload page
   */
  delete = (id) => {
    let { duLieu } = this.state,

    arrNew = duLieu.filter((val) => {
      return val.id !== id;
     })
    this.setState({
      duLieu : arrNew
    })
    
    localStorage.setItem('work',duLieu);  
    //  shouldn't use window location reload here
    // don't know the error
    window.location.reload();
  }

  // // find work in list
  findSearch = (search) => {
    this.setState({
      nameSearch : search
    })
  }

  render() {
    
    return (
      <div className='jumbotron'>
        <div className=' container'>
          <h1 className='text-center text-success pb-5 border-bottom border-info'>TO DO LIST</h1>
          <main className='mt-5'>
            <Search findSearch = { (search) => this.findSearch(search) } />
            <div className='content form-group row'>
              <Tables data = { this.state.duLieu } findSearch={ this.state.nameSearch }   delete={(id) => this.delete(id) }/>
              <Add work = { (data) => this.show(data) }/>
              <Edit />
            </div>
          </main>
        </div>
        
      </div>
    );
  }
}

export default App;
