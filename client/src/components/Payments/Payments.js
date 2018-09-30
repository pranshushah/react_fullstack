import React, { Component } from 'react';
import StripCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Payments extends Component {
  render() {
    return (
      <StripCheckout
        name="Emaily"
        description="$5 for 5 surveys credit"
        amount={500}
        token={token => this.props.onUpdateCredit(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credit</button>
      </StripCheckout>
    );
  }
}

// const mapStateToProps = state => {};

const mapDispatchToprops = dispatch => {
  return {
    onUpdateCredit: token => {
      dispatch(actions.updateCredit(token));
    }
  };
};

export default connect(
  null,
  mapDispatchToprops
)(Payments);
