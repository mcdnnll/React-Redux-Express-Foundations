import React, {PropTypes} from 'react';

const propTypes = {
  handleToggleUpdate: PropTypes.func,
  testToggle: PropTypes.bool,
};

const defaultProps = {
  testToggle: false,
};

class TestToggle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleToggleUpdate, testToggle } = this.props;
    return (
      <div>
        <h3>Hello, World</h3>
        <button onClick={() => handleToggleUpdate(!testToggle)}>Toggle</button>
        {testToggle ? <h4>On</h4> : <h5>Off</h5>}
      </div>
    );
  }
}

TestToggle.propTypes = propTypes;
TestToggle.defaultProps = defaultProps;

export default TestToggle;
