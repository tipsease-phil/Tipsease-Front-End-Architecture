import React from "react"
import { connect } from "react-redux"
import axios from "axios"

import RegisterForm from '../Components/RegisterForm/RegisterForm'
import { addStaff } from '../store/actions'

class FormView extends React.Component {

  state ={
    staff: {
      first_name: '',
      tagline: '',
      photo_url: '',
      company: ''
    },
    isEditing: false,
  }

  changeHandler = ev => {
    this.setState ({
      staff: {
        ...this.state.staff,
        [ev.target.name]: ev.target.value
      }
    });
  };

  addNewStaff = () => {
    this.props.addStaff(this.state.staff);
  }
  
  updateStaff = (id) => {
    axios
      .put(`https://tipsease-david-freitag-backend.herokuapp.com/api/tippees/${id}`, this.state.item)
      .then(res => {
        this.setState({
          staff: res.data,
          isUpdating: false,
        });
        this.props.history.push(`/staff-profile/${id}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <RegisterForm Form addNewStaff={this.addNewStaff} updateStaff={this.updateStaff} changeHandler={this.changeHandler} staff={this.state.staff} />
    )
  }

}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { addStaff }
)(FormView);