import React from "react";
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { withRouter } from "react-router";


const PatronContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center
  margin: 48px auto 60px;
  padding: 64px 0px 48px;
  border: 2px solid lightgray;
  border-radius: 10px;
  background-color: white;
  box-shadow: 2px 1px 12px 5px #8E44AD;
`

const UserImage = styled.img`
  padding: 48px;
  border-radius: 100%;
  border: 2px solid #8E44AD;
`
const PatronName = styled.p`
  padding: 0 12px;
  font-size: 2rem;
  margin: 24px auto 12px;
  word-break: break-all;

  &:last-of-type {
    margin-bottom: 36px;
  }
`
const Logo = styled.img`
  height: 300px;
  width: auto;
  margin: 0 auto;
`
const StyleNavBar = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

const LinkStyles = styled.div`
  margin-left: 5%;
  display: flex;
  justify-content: flex-start;
`

const Btn = styled.button`
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

/*const handleDeletePatron = (id)=> {
  this.props.deletePatron(id)
} */

function PatronProfile (props) {

  const handleLogout = (e) => {
    localStorage.clear();
  }

  const patronUser = props.patrons.find(patron => `${patron.id}` === props.match.params.id);

  const toEdit = e => {
    props.history.push(`/patron-profile/${patronUser.id}/edit`)
  }
  if (!patronUser) {
    return <h2>Loading...</h2>
}

  return (
    <div>
    <StyleNavBar/>
       <LinkStyles>
        
       </LinkStyles>
    <StyleNavBar/>
    
    <div>
      <Logo src={require("../../tipsease.png")} alt="logo"/>

    <PatronContainer>
      <UserImage src={patronUser.photo_url} alt="user image"/>
      <PatronName>First Name: {patronUser.first_name} </PatronName>
      <PatronName>Last Name: {patronUser.last_name}</PatronName>
      <PatronName>Email: {patronUser.email}</PatronName>
      {/*<Btn onClick={handleDeletePatron.patron}> Delete Profile </Btn> */}
      <Btn onClick={toEdit}>Edit Profile</Btn>   
    
    </PatronContainer>

    </div>

</div>
  )

}

export default withRouter(PatronProfile);
