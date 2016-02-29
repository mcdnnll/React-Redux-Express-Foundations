import React, {PropTypes} from 'react';

const propTypes = {};

const defaultProps = {
  testText: '',
};

class TestText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={() => this.props.handleRequest()}>AJAX AWAY!</button>
        {this.props.testText ? <h4>{this.props.testText}</h4> : null}
      </div>
    );
  }
}

TestText.propTypes = propTypes;
TestText.defaultProps = defaultProps;

export default TestText;
