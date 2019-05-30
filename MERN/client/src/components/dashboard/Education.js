import React, { Component } from 'react'
import {  connect  } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profileActions';

 class Education extends Component {

    onDeleteClick = (id) => {
        this.props.deleteEducation(id,this.props.history);
    }
  render() {
    const Education = this.props.Education.map(edu => {
      <tr key={edu_id}>
      <td>{edu.company}</td>
      <td>{edu.title}</td>
      <td><Moment format="YYYY/MM/DD">{edu.from} </Moment>
       - { edu.to === null ? 'Now' : <Moment format="YYYY/MM/DD">{edu.to} </Moment> } </td>
      <td><button  onClick={ this.onDeleteClick.bind(this,edu_id) } className="btn btn-danger">Delete</button></td>
      </tr>      
    })
    return (
      <div>
        <h4 className="mb-4">Education Credentials</h4>
        <table className="table">
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Title</th>
                    <th>Years</th>
                    <th></th>
                </tr>
                    {education}
            </thead>
        </table>
      </div>
    )
  }
}

Education.propTypes = {
    deleteEducation: PropTypes.func.isRequired
}

export default connect(null, { deleteEducation })(Education);
