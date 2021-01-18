import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'; // import all action creators

// create some components
import Header from './Header';
import Landing from './Landing'; // import 需要放在前面
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

// create a component
class App extends Component {
  // add life cycle method
  componentDidMount() {
    this.props.fetchUser(); // action creators are assigned to App component as props
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
