import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { testToggle, fetchTestText } from '../actions/HomeActions';
import TestToggle from '../components/TestToggle';
import TestText from '../components/TestText';

const propTypes = {
  testToggle: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};

const defaultProps = {};

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleUpdate = this.handleToggleUpdate.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
  }

  handleToggleUpdate(newToggleState) {
    const { dispatch } = this.props;
    dispatch(testToggle(newToggleState));
  }

  handleRequest() {
    const { dispatch } = this.props;
    dispatch(fetchTestText());
  }

  render() {
    return (
      <div>
        <TestToggle
          handleToggleUpdate={this.handleToggleUpdate}
          testToggle={this.props.testToggle}
        />
        <TestText
          handleRequest={this.handleRequest}
          testText={this.props.testText}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    testToggle: state.home.testToggle,
    testText: state.home.testText,
  };
};

HomeContainer.propTypes = propTypes;
HomeContainer.defaultProps = defaultProps;

export default connect(mapStateToProps)(HomeContainer);
