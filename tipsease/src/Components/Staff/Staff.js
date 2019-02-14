import React from "react";
import styled from "styled-components"

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
  width: 90%;
`

const StaffName = styled.p`
  font-size: 2rem;
  font-weight: bold;
`

const TipAmount = styled.p`
  font-size: 2rem;
  color: #5CA143;
  font-weight: bold;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`

const TipInput = styled.input`
  padding: 10px 20px 10px;
  text-align: center;
  border-radius: 20px;
  font-size: 1.6rem;
  width: 450px;
  border: 1px solid lightgray;
  color: #5CA143;
  font-weight: bold;
  height: 100px;
`

const TipButton = styled.button`
  padding: 30px 10px 30px;
  border-radius: 20px;
  font-size: 1.8rem;
  width: 450px;
  margin: 12px; auto;
  border-color: lightgray;
  font-weight: bold;

  &:hover {
    background-color: #5CA143
    color: white;
  }
`

function Staff (props) {

  const staffMember = props.staff.find(staff => `${staff.id}` === props.match.params.id);

  if (!staffMember) {
    return <h2>Loading data...</h2>
  }

  return (

    <StaffContainer>
      <IndividualAvatar src={staffMember.photo_url} alt="avatar"/>
      <StaffName>Staff Member: {staffMember.first_name} {staffMember.last_name}</StaffName>

      <StyledForm>
        <TipAmount>Tip Amount $</TipAmount><TipInput type="number" min="0" name="amount" placeholder="Enter Tip Amount" onChange={props.changeHandler} value={props.tipData.amount}/>
        <TipButton type="submit" onClick={(e) => props.addNewTip(e, staffMember.id)}>Tip Staff</TipButton>
      </StyledForm>
          
    </StaffContainer>
  )
}

export default Staff;
