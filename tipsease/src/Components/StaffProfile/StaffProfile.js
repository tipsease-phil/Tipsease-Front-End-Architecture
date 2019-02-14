import React from "react";
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { withRouter } from "react-router";
import { connect } from "react-redux";

import { getStaff } from "../../store/actions/"

const StaffContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center
  margin: 48px auto 60px;
  padding: 64px 0px 48px;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
  box-shadow: 2px 1px 12px 5px #86A38C;
`

const IndividualAvatar = styled.img`
  width: auto;
  max-width: 550px;
  border-radius: 100%;
`

const StaffName = styled.p`
  font-size: 2rem;
`
const Logo = styled.img`
  height: 300px;
  width: auto;
  margin: 0 auto;
`

const FormButton = styled.button`
  padding: 30px 10px 30px;
  border-radius: 20px;
  font-size: 1.8rem;
  max-width: 450px;
  width: 90%;
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
  margin-left: 5%;
  display: flex;
  justify-content: flex-start;
`

function staffProfile (props) {

  const handleLogout = (e) => {
    localStorage.clear();
  }

  const staffUser = props.staff.find(staff => `${staff.id}` === props.match.params.id);

  const toEdit = e => {
    props.history.push(`/staff-profile/${staffUser.id}/edit`)
  }

  if (!staffUser) {
    return <h2>Loading data...</h2>
  }

  return (
    <div>
      <StyleNavBar/>
         <LinkHandle>
          <NavLink className="nav-link" onClick={handleLogout} to="/">Logout</NavLink>
         </LinkHandle>
      <StyleNavBar/>
      
      <div>
        <Logo src={require("../../tipsease.png")} alt="logo"/>
        <StaffContainer>
          
          <IndividualAvatar src={staffUser.photo_url} alt="use image"/>
          <StaffName><strong>Employee:</strong> {staffUser.first_name} {staffUser.last_name}</StaffName>
          <StaffName><strong>Email:</strong> {staffUser.email}</StaffName>
          <StaffName><strong>Start Date:</strong> {staffUser.start_date}</StaffName>
          <StaffName><strong>Tagline:</strong> {staffUser.tagline}</StaffName>
          
          <FormButton onClick={toEdit}>Edit Profile</FormButton>   
      
        </StaffContainer>
      </div>

    </div>
  )

}

const mapStateToProps = state => ({})

export default withRouter(connect(
  mapStateToProps,
  { getStaff }
)(staffProfile))


