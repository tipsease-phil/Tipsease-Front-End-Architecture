import React from "react"
import { connect } from "react-redux"
import { getStaff, addTip, getTips } from "../store/actions"

import Staff from "../Components/Staff/Staff"

class StaffView extends React.Component {

  state ={
    staff: [],
    tipData: {
      tipper_id: '',
      tippee_id: '',
      amount: '',
    },
    blankTip: {
      tipper_id: '',
      tippee_id: '',
      amount: '',
    }
  }

  componentDidMount() {
    if (this.props.staff.length === 0) {
      this.props.getStaff();
    }
    this.props.getTips(this.props.match.params.id);
    const tipperId= localStorage.getItem("userId");
    this.setState({tipData: {...this.state.tipData, tippee_id: this.props.match.params.id, tipper_id: tipperId}})
    console.log(this.props.match.params.id);
  }

  changeHandler = ev => {
    ev.preventDefault();
    this.setState({ tipData: {
      ...this.state.tipData,
      [ev.target.name]: ev.target.value
    }})
  };

  addNewTip = (e, id) => {
    e.preventDefault();
    this.props.addTip(id, this.state.tipData);
    alert(`Thank you for tipping $${this.state.tipData.amount}!`);
    this.setState({ tipData: this.state.blankTip });
  }

  render() {
    return (
      <Staff addNewTip={this.addNewTip} tipData={this.state.tipData} tips={this.props.tips} changeHandler={this.changeHandler} staff={this.props.staff} history={this.props.history} match={this.props.match} />
    )
  }
}

const mapStateToProps = state => ({
  staff: state.staff,
})

export default connect(
  mapStateToProps,
  { getStaff, addTip, getTips }
)(StaffView);