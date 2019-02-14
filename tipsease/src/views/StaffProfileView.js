import React from 'react';
import { connect } from "react-redux"

import StaffProfile from "../Components/StaffProfile/StaffProfile";
import { getStaff } from "../store/actions/index"

class StaffProfileView extends React.Component {

  state = {
    staff: [],
  }

  componentDidMount() {
    if (this.props.staff.length === 0) {
      this.props.getStaff();
    }
    this.props.getStaff();
  }

  render() {

    return (
      <div>
        <StaffProfile staff={this.props.staff}/>
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
)(StaffProfileView)