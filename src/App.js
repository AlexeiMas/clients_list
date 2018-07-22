import React, { Component } from 'react';
import {connect} from 'react-redux'
import Details from "./components/Details";

class App extends Component {
    searchValue = () => {
      console.log(this.searchInput.value);
      this.props.onSearch(this.searchInput.value)
    };

  render() {
      const list = this.props.clients.map((client, index) =>
      <li key={index} onClick={()=>this.props.onSelected(client)} style={{border: '1px solid #003569'}}>
          <div className='row'>
              <div className='col col-sm-5 col-md-5 col-lg-5'><img src={client.general.avatar} alt=""/> </div>
              <div className='col col-sm-7 col-md-7 col-lg-7 offset-sm-1 offset-md-0 offset-lg-0'>
                  <h5>{client.general.firstName} {client.general.lastName}</h5>
                  <p title="Job title">{client.job.title}</p>
              </div>
          </div>
      </li> );
      let temp;
      if (!list)temp=<p>List is empty</p>;
    return (
      <div className="App container-fluid">
          <input className='form-control fixed-top col col-sm-5 col-md-5'
                 type='text'
                 placeholder='Search...'
                 ref={input => {this.searchInput = input}}
                 onChange={this.searchValue} autoFocus
          />
        <div className='parent-container' style={{marginTop: '3em'}}>
            <ul>{list}{temp}</ul>
          <Details list={this.props.clients}/>
        </div>
      </div>
    );
  }
}

export default connect(
    state => ({
        // clients: state.clients.filter(contact => (contact.general.firstName).toLowerCase().includes(state.search))
        clients: state.clients.filter((contact)=>{
            for(let category in contact){
              if (contact.hasOwnProperty(category)) //not important
                for(let field in contact[category]){
                  if (contact[category].hasOwnProperty(field)) //not important
                    if(contact[category][field].toLowerCase().indexOf(state.search) > -1){
                        return true; //if there are matches
                    }
                }
            }
                return false;
        })
    }),
    dispatch => ({
        onSearch(value) {
            dispatch({type: 'SEARCH', payload: value.toLowerCase()})
        },
        onSelected(selected) {
            console.log('Index is', selected);
            dispatch({type: 'SELECTED', payload: selected})
        }
    })
)(App);
