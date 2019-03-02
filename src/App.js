import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import * as actions from './store/actions/home';

class App extends Component {
  componentDidMount(){
    this.props.onFetchNewStories();
  }

  render() {
    return (
      <Layout />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onFetchNewStories: () => dispatch(actions.newStoriesFetch())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
