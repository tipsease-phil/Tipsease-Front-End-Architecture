import React from "react";
import { withRouter } from "react-router"
import styled from "styled-components"
import axios from "axios"
import { NavLink } from "react-router-dom"

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
  border: 1px solid lightgray;
  box-shadow: 2px 1px 12px 5px #86A38C;
  border-radius: 10px;
`

const StyledForm = styled.form`
  margin: 48px auto;
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`

const UserInfo = styled.input`
  padding: 30px 10px 20px;
  border-radius: 20px;
  font-size: 1.8rem;
  width: 450px;
  margin: 12px; auto;
  border: 1px solid lightgray;
`

const FormButton = styled.button`
  padding: 30px 10px 30px;
  border-radius: 20px;
  font-size: 1.8rem;
  width: 450px;
  margin: 12px auto;
  border-color: lightgray;

  &:hover {
    background-color: #5CA143
    color: white;
  }
`

const StyleNavBar = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

const LinkHandle = styled.div`
  position: absolute;
  top: 28px;
  left: 20px;
`

const Logo = styled.img`
  height: 300px;
  width: auto;
  margin: 24px auto;
`

class UpdateForm extends React.Component {

  state = {
    first_name: "",
    last_name: "",
    email: "",  
    photo_url: '',
    tagline: '',
    start_date: ''
  }

  handleChanges = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleLogout = (e) => {
    localStorage.clear();
  }

  handleEdit= event => {
  event.preventDefault();
  axios
    .put(`https://tipsease-backend.herokuapp.com/api/tippees/${localStorage.getItem('userId')}`, {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      photo_url: this.state.photo_url,
      tagline: this.state.tagline,
      start_date: this.state.start_date,
     
    })
    .then(res => {
      this.props.history.push(`/staff-profile/${localStorage.getItem('userId')}`);
    })
    .catch(err => this.setState({ errorMsg: 'This email is already in use' }));
  };

  render() {

    const staffId = localStorage.getItem("userId")

    return (

      <FlexDiv>

        <StyleNavBar/>
          <LinkHandle>
          <NavLink className="nav-link" onClick={this.handleLogout} to="/">Logout</NavLink>
          <NavLink className="nav-link" to={`/staff-profile/${staffId}`}>Profile</NavLink>

          </LinkHandle>
        <StyleNavBar/>

        <Logo src={require("../../tipsease.png")} alt="logo"/>

        <FormContainer>
          <StyledForm>
    
            <UserInfo type="text" name="first_name" onChange={this.handleChanges} placeholder="First Name" />
            <UserInfo type="text" name="last_name" onChange={this.handleChanges} placeholder="Last Name" />
            <UserInfo type="text" name="email" onChange={this.handleChanges} placeholder="Email" />
            <UserInfo type="text" name="photo_url" onChange={this.handleChanges} placeholder="Profile Picture (URL)" />
            <UserInfo type="text" name="tagline" onChange={this.handleChanges} placeholder="Tagline" />
            <UserInfo type="text" name="start_date" onChange={this.handleChanges} placeholder="Job Start Date" />
    
            <div>
            <FormButton onClick={this.handleEdit}>Edit User</FormButton>
            </div>

          </StyledForm>
        </FormContainer>

      </FlexDiv>
    )
  }
  

}

export default withRouter(UpdateForm);