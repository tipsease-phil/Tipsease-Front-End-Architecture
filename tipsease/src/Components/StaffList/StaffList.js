import React from "react"
import styled from "styled-components";

import { withRouter } from "react-router"

function StaffList(props) {

  function routeToStaff(ev, staff) {
    ev.preventDefault();
    props.history.push(`/staff-list/${staff.id}`);
  }

  const StaffListContainer = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: #fffffd;
  `

  const StaffMember = styled.div`
    width: 400px;
    cursor: pointer;
    margin-bottom: 68px;
    border: 2px solid #8E44AD;
    border-radius: 5px;  
    background-color: white;

    &:hover {
      color: #1B2631  ;
      font-weight: bold;
      background-color: #F8F9F9  
      box-shadow: 5px 5px 5px #85929E;
    }
  `
  const Pictures = styled.img`
    border-radius: 100%;  
    width: 50%;
    height: 210px;
    object-fit: contain;
  `
  const NameBox = styled.div`
    width: 80%;
    margin: 0 auto;

    &:hover {
      background-color: #fef9ff
    }
  `  
  const StaffName = styled.p`
    font-size: 1.5rem;
  `

  return (

    <div>
     
      <StaffListContainer>
      {props.staff.map(staff => (
        <StaffMember onClick={ev => routeToStaff(ev, staff)} key={staff.id}>
          <NameBox>
            <StaffName>{staff.first_name}</StaffName>
          </NameBox>
          <Pictures src={staff.photo_url} />
        </StaffMember>
      
      ))}
      </StaffListContainer>

    </div>
  )
}

export default withRouter(StaffList);