import React, { Component } from 'react';
import {connect} from "react-redux";

class Details extends Component {
  render() {
      let client = this.props.client;
      const list = this.props.list;
      console.log(client, list);

      if (!client || list===[]){
          return (
              <div className="container col-7 d-flex justify-content-center">
                  <div className='position-fixed' style={{top: '40%'}}>
                      <p><i>Choose the contact, please...</i></p>
                  </div>
              </div>)
      }

    return (
      <div className="Details col-7 d-flex justify-content-center">
          <div className='row position-fixed offset-2 offset-sm-1 offset-md-1 offset-lg-1' style={{top: '10%'}}>
              <div className='col-7 col-sm-12 col-md-12 col-lg-5'>
                  {/*<h1>Details:</h1>*/}
                  <img className='img-thumbnail' src={client.general.avatar} alt=''/>
              </div>
              <div className='col-7 col-sm-12 col-md-12 col-lg-7'>
                  <h2>{client.general.firstName} {client.general.lastName}</h2>
                  <p title="Job title">{client.job.title}</p>
                  <p title="Company">{client.job.company}</p>
                  <p title="City Country">{client.address.city} {client.address.country}</p>
                  <p title="Street zip-Code">{client.address.street} {client.address.zipCode}</p>
                  <p title="E-mail">{client.contact.email}</p>
                  <p title="Phone">{client.contact.phone}</p>
              </div>
          </div>
      </div>
    );
  }
}

export default connect(
    state => ({
        client: state.selectedContact.stateSelect
    }),
    dispatch => ({

    })
)(Details);