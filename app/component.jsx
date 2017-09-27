import React from 'react';
import PropTypes from 'prop-types';
import { connector } from './store/store';

const { string } = PropTypes;

const TestComp = ({ testProp }) => (
  <div>
    <h2>{`${testProp} update`}</h2>
  </div>
);

TestComp.defaultProps = {
  testProp: ''
};

TestComp.propTypes = {
  testProp: string
};

export default connector(TestComp);
