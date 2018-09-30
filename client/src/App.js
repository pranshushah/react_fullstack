import React from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';

const DashBoard = () => <h2>DashBoard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends React.Component {
  componentDidMount() {
    this.props.onFetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header auth={this.props.auth} credit={this.props.credit} />
            <Route path="/" exact component={Landing} />
            <Route path="/surveys" exact component={DashBoard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.authenticate,
    credit: state.auth.credit
  };
};

const mapDispatchToprops = dispatch => {
  return {
    onFetchUser: () => {
      dispatch(actions.fetchUser());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(App);
