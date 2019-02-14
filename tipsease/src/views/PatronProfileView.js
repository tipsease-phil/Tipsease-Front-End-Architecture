import React from 'react';
import { connect } from "react-redux"

import PatronProfile from "../Components/PatronProfile/PatronProfile";
import { getPatrons } from "../store/actions/index"

class PatronProfileView extends React.Component {

  state = {
    patrons: [],
  }

  componentDidMount() {
    if (this.props.patrons.length === 0) {
      this.props.getPatrons();
    }
    this.props.getPatrons();
    
  }

  render() {

    return (
      <div>
        <PatronProfile patrons={this.props.patrons}/>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  patrons: state.patrons
})

export default connect(
  mapStateToProps,
  { getPatrons }
)(PatronProfileView)

