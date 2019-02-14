import React from "react";
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { connect } from "react-redux"
import { withRouter } from "react-router";

import { getUserType } from "../../store/actions/index"

class PatronNavBar extends React.Component {

  state = {
    userType: ''
  }

  handleLogout = (e) => {
    localStorage.clear();
  }

  render () {

    const StyleNavBar = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
  `

    return (
    
        <StyleNavBar>
        <NavLink className="nav-link" onClick={this.handleLogout} to="/">Logout</NavLink>
        <NavLink className="nav-link"  to={`/patron-profile/${localStorage.getItem('userId')}`}>Profile</NavLink>
        <NavLink className="nav-link" exact to="/staff-list">Staff List</NavLink>
        </StyleNavBar>
      
    )
  }
  
}

const mapStateToProps = state => ({
  userType: state.userType
})

export default withRouter(connect(
  mapStateToProps,
  { getUserType }
)(PatronNavBar))