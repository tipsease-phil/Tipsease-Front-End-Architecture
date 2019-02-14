import React from "react";
import styled from "styled-components"

import { withRouter } from "react-router";

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
  padding: 48px;
  border-radius: 100%;
  border: 1px solid #5CA143;
`

const StaffName = styled.p`
  padding: 0 12px;
  font-size: 2rem;
  margin: 24px auto 12px;
  word-break: break-all;

  &:last-of-type {
    margin-bottom: 36px;
  }
`

// const FormButton = styled.button`
//   padding: 30px 10px 30px;
//   border-radius: 20px;
//   font-size: 1.8rem;
//   width: 450px;
//   margin: 12px auto;
//   border-color: lightgray;

//   &:hover {
//     background-color: #5CA143
//     color: white;
//   }
// `



function PatronProfile (props) {

  const patronUser = props.patrons.find(patron => `${patron.id}` === props.match.params.id);

  if (!patronUser) {
    return <h2>Loading data...</h2>
}

  return (

    <StaffContainer>
      <IndividualAvatar src={patronUser.photo_url} alt="avatar"/>
      <StaffName><strong>First Name:</strong> {patronUser.first_name} </StaffName>
      <StaffName><strong>Last Name:</strong> {patronUser.last_name}</StaffName>
      <StaffName><strong>Email:</strong> {patronUser.email}</StaffName>
    
    </StaffContainer>
  )

}

export default withRouter(PatronProfile);
