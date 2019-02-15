import React from "react";
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  margin: 48px 0 64px;
  border-top: 2px solid lightgray;
  padding: 48px 0 0;
  align-items: space-between;
  justify-content: center;
  width: 100%;
  background-color: white;
  flex-direction: column
  background-color: #fffffd;
`

const SearchForm = styled.form`
  width: 80%;
  margin: 0 auto;
`

const SearchInput = styled.input`
  width: 40%;
  margin: 82px auto 48px;
  padding: 20px 20px;
  text-align: center;
  font-size: 1.6rem;
  
`

const StaffHeader = styled.p`
  font-size: 4rem;
  margin: 24 auto 24px;
`

function SearchBar(props) {
  return (
    <SearchContainer>
      
      <StaffHeader>Staff Members</StaffHeader>
      <SearchForm onChange={props.search}>
        <SearchInput autoComplete="off" name="searchText" onChange={props.handleSearch} type="text" placeholder="Search" />
      </SearchForm>
      
    </SearchContainer>
  )
}

export default SearchBar