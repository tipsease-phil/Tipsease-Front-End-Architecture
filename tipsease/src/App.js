import React from 'react';
import { Route } from "react-router-dom"
import styled from "styled-components";
import { connect } from "react-redux"
import { withRouter } from "react-router";

import PatronNavBar from "./Components/NavBar/PatronNavBar"
import StaffListView from "./views/StaffListView"
import StaffView from './views/StaffView';
import FormView from './views/FormView';
import Login from "./Components/Login/Login"
import { getUserType } from './store/actions/index'
import PatronProfileView from "./views/PatronProfileView"
import StaffProfileView from "./views/StaffProfileView"
import UpdateForm from "./Components/UpdateForm/UpdateForm"

import './App.css';

const AppStyled = styled.div`
  height: 100%;
  background-color: #fffffd;
  text-align: center;
`

const Logo = styled.img`
  height: 300px;
  width: auto;
  margin: 24px auto;
`

class App extends React.Component {

  state = {
    userType: ''
  }

  componentDidMount = () => {
    this.props.getUserType();
  }
 
  handleLogout = (e) => {
    localStorage.clear();
  }
  
  render() {
    
      return (
        <AppStyled>          

          <Route exact path="/staff-list" render={props => (
            <div>
              <PatronNavBar />
              <Logo src={require("./tipsease.png")} alt="logo"/>
              <StaffListView {...props} />
            </div>
            )} 
          />

          <Route path="/staff-list/:id" render={props => (
            <div>
               <PatronNavBar {...props} /> 
               <Logo src={require("./tipsease.png")} alt="logo"/>
               <StaffView {...props} />   
            </div>
          )}/>

          <Route path="/register-form" render={props => (
            <div>
              <FormView {...props} /> 
            </div>
            )
          }/>

          <Route exact path="/" component={Login} />

          <Route exact path="/patron-profile/:id" render={props => (
            <div>
              <PatronNavBar /> 
              <Logo src={require("./tipsease.png")} alt="logo"/>
              <PatronProfileView {...props} /> 
            </div>
            )
          }/>

          <Route exact path="/staff-profile/:id/edit" render={props => (
            <div>
              <UpdateForm {...props} /> 
            </div>
            )
          }/>

          <Route exact path="/staff-profile/:id" render={props => <StaffProfileView {...props} />} />

        </AppStyled>
      );
    }
  
}

const mapStateToProps = state => ({
  userType: state.userType
})

export default withRouter(connect(
  mapStateToProps,
  { getUserType }
)(App))


