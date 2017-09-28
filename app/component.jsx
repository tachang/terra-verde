import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import { connector } from './store/store';


const { string } = PropTypes;


// const TestComp = ({ testProp }) => (
//   <div>
//     <h2>{`${testProp} test`}</h2>
//     <Input placeholder="Search..." />
//   </div>
// );

const TestComp = (props) => {
  console.log('Logging props: ', props);
  const onChange = (e) => {
    e.preventDefault();
    props.updateInput(e.target.value);
  };

  return (
    <div>
      <h2>{`${props.testProp} test`}</h2>
      <Input placeholder="Search..." onChange={onChange} />
      <h2>{`${props.inputData}`}</h2>
    </div>
  );
};

TestComp.defaultProps = {
  testProp: ''
};

TestComp.propTypes = {
  testProp: string
};

export default connector(TestComp);
