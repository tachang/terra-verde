import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import { connector } from './store/store';


const { string } = PropTypes;

const TestComp = ({ testProp }) => (
  <div>
    <h2>{`${testProp} test`}</h2>
    <Input placeholder="Search..." />
  </div>
);

TestComp.defaultProps = {
  testProp: ''
};

TestComp.propTypes = {
  testProp: string
};

export default connector(TestComp);
