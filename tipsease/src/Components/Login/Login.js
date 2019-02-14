import React from "react";
import { withRouter } from "react-router"
import axios from 'axios';
import { getUserType, getStaff } from "../../store/actions/"
import { connect } from "react-redux";

import styled from "styled-components";

const LoginContainer = styled.div`
  padding-bottom: 64px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center
`

const Logo = styled.img`
  height: 350px;
  width: auto;
  margin: 24px auto;
`

const StyledForm = styled.form`
  margin: 48px auto 0;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  border: 1px solid lightgray;
  box-shadow: 2px 1px 12px 5px #86A38C;
  border-radius: 10px;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const UserInfo = styled.input`
  padding: 30px 10px 20px;
  border-radius: 20px;
  font-size: 1.8rem;
  width: 450px;
  margin: 12px; auto;
  border: 1px solid lightgray;
`

const LoginButtons = styled.button`
  padding: 30px 10px 30px;
  border-radius: 20px;
  font-size: 1.8rem;
  width: 450px;
  margin: 12px; auto;
  border: 1px solid lightgray;
  cursor: pointer;
  &:hover {
    background-color: #5CA143
    color: white;
  }
`

const RadioContainer = styled.div`
  margin: 8px auto 20px;
  display: flex;
  justify-content: center;
`

const RadioButton = styled.input`
cursor: pointer;
  padding: 16px;
  width: 16px;
  height: 16px;
  margin: 0 5%;
`

const RadioFont = styled.label`
  font-size: 1.6rem;
`

class Login extends React.Component {
  
  state = {
    email: '',
    password: '',
    tipperBoolean: false,
    userType: '',
  }

  handleRegister = (e) => {
    e.preventDefault();
    this.props.history.push("/register-form")

  }

  handleChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = event => {

    event.preventDefault();
    const endpoint = 'https://tipsease-backend.herokuapp.com/api/login'; 

    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
        localStorage.setItem('userId', res.data.user.id);
        localStorage.setItem('userType', res.data.user.role)

        this.setState({ userType: localStorage.getItem('userType') })
        this.props.getUserType(this.state.userType);
        this.props.getStaff();
        if (this.state.userType === "tippee") {       //if employee
          return this.props.history.push(`/staff-profile/${localStorage.getItem('userId')}`);
        } else {
          return this.props.history.push(`/patron-profile/${localStorage.getItem('userId')}`)
        }
      })
      .catch(err => console.log(err));     
  };

  render() {
    return (
      <LoginContainer>
        <Logo src={require("../../tipsease.png")} alt="logo"/>
        <StyledForm>

          <UserInfo type="text" autoComplete="off" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}  />
          <UserInfo type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}  />

          <ButtonContainer>

            <div>

              <RadioContainer>
                <RadioButton type="radio" id="employee"
                name="tipperBoolean" value={false} onChange={this.handleChange} defaultChecked />
                <RadioFont>Employee</RadioFont>

                <RadioButton type="radio" id="patron"
                name="tipperBoolean" value={true} onChange={this.handleChange}  />
                <RadioFont>Patron</RadioFont>
              </RadioContainer>

              <LoginButtons onClick={this.handleSubmit}>Log In</LoginButtons>

            </div>
            
            <LoginButtons onClick={this.handleRegister}>Register</LoginButtons>
          </ButtonContainer>

        </StyledForm>


      </LoginContainer>
    )
  }
}

const mapStateToProps = state => ({
  isPatron: state.isPatron
})

export default withRouter(connect(
  mapStateToProps,
  { getUserType, getStaff }
)(Login))

