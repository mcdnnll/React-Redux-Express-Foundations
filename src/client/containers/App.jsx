import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const propTypes = {};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

   /*
   * Unused at the moment, but likely to be required for fetching
   * any initial data that may be needed app-wide or on first load.
   * Best approach is to have the retrieve data maintained in redux's
   * store, then have lower-level containers connect/listen to the store.
   * Avoids needing to map the props directly to children components/containers.
   */
  componentDidMount() {
    const { dispatch } = this.props;
  }

  // Render child components as outlined in ../routes.jsx
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = propTypes;

export default connect()(App);
