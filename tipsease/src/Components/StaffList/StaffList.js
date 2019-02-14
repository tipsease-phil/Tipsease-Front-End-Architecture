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
    font-weight:bold;
    border: 2px solid #86A38C;
    border-radius: 5px;  
    background-color: white;

    &:hover {
      color: #67AB4C;
      background-color: #EEF1E3
      box-shadow: 5px 5px 5px #86A38C;
    }
  `
  const ListPic = styled.img`
    border-radius: 100%;  
    width: 50%;
    height: 210px;
    object-fit: contain;
  `
  const NameContainer = styled.div`
    width: 80%;
    margin: 0 auto;

    &:hover {
      background-color: #EEF1E3
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
          <NameContainer>
            <StaffName>{staff.first_name}</StaffName>
          </NameContainer>
          <ListPic src={staff.photo_url} />
        </StaffMember>
      
      ))}
      </StaffListContainer>

    </div>
  )
}

export default withRouter(StaffList);