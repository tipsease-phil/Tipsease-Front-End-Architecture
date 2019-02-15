import React from "react"
import { connect } from "react-redux"

import { getStaff } from "../store/actions"

import StaffList from "../Components/StaffList/StaffList"
import SearchBar from "../Components/SearchBar/SearchBar"

class StaffListView extends React.Component {

  constructor() {
    super();
    this.state = {
      staff: [],
      searchText: '',
      searchPosts: [],
    }
  }
  
  componentDidMount() {
    this.props.getStaff();
  }

  handleSearch = ev => {
    this.setState({
      searchText: ev.target.value.toLowerCase(),
    });
  };

  searchUsers = ev => {
    ev.preventDefault();
    const searchedEmployee =this.props.staff.filter(employee => {
      
      return (employee.first_name.toLowerCase().includes(this.state.searchText)); 
        
      
    })

    this.setState({ searchPosts: searchedEmployee })
  }

  render() {

    return (
    
      <div>
        <SearchBar search={this.searchUsers} handleSearch={this.handleSearch} />
        <StaffList history={this.props.history} staff={this.state.searchPosts.length > 0 ? this.state.searchPosts : this.props.staff} />;
      </div>
    )
  }

}

const mapStateToProps = state => ({
  staff: state.staff
})

export default connect(
  mapStateToProps,
  { getStaff }
)(StaffListView)