import React from "react";
import { withRouter } from "react-router"
import axios from 'axios';
import { getUserType, getStaff } from "../../store/actions/"
import { connect } from "react-redux";

import styled from "styled-components";

const LoginContainerStyles = styled.div`
  padding-bottom: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center
`

const Logo = styled.img`
  height: 175px;
  width: auto;
  margin: 15px auto;
`

const FormStyles = styled.form`
  margin: 5px auto 0;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
  border: 2px solid lightgray;
  box-shadow: 2px 1px 12px 5px #8E44AD;
  border-radius: 10px;
`

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const UserInfo = styled.input`
  padding: 10px 10px 10px;
  border-radius: 20px;
  font-size: 1.6rem;
  width: 300px;
  margin: 12px; auto;
  border: 2px solid lightgray;
`

const LoginBtn = styled.button`
  padding: 10px 10px 10px;
  border-radius: 20px;
  font-size: 1.8rem;
  width: 400px;
  margin: 12px; auto;
  border: 2px solid lightgray;
  cursor: pointer;
  &:hover {
    background-color: #8E44AD
    color: white;
  }
`

const RadioBox = styled.div`
  margin: 8px auto 20px;
  display: flex;
  justify-content: center;
`

const RadioBtn = styled.input`
cursor: pointer;
  padding: 16px;
  width: 16px;
  height: 16px;
  margin: 0 5%;
`

const RadioFontStyle = styled.label`
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
      <LoginContainerStyles>
        <Logo src={require("../../tipsease.png")} alt="logo"/>
        <FormStyles>

          <UserInfo type="text" autoComplete="off" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}  />
          <UserInfo type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}  />

          <BtnContainer>

            <div>

              <RadioBox>
                <RadioBtn type="radio" id="employee"
                name="tipperBoolean" value={false} onChange={this.handleChange} defaultChecked />
                <RadioFontStyle>Employee</RadioFontStyle>

                <RadioBtn type="radio" id="patron"
                name="tipperBoolean" value={true} onChange={this.handleChange}  />
                <RadioFontStyle>Patron</RadioFontStyle>
              </RadioBox>

              <LoginBtn onClick={this.handleSubmit}>Log In</LoginBtn>

            </div>
            
            <LoginBtn onClick={this.handleRegister}>Register</LoginBtn>
          </BtnContainer>

        </FormStyles>


      </LoginContainerStyles>
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

