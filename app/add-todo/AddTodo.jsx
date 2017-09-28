import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import { connector } from '../store/store';

const { string, shape } = PropTypes;

// const handleChange = update => (e) => {
//   e.preventDefault();
//   update(e.target.value);
// };

const AddTodo = (props) => {
  const { addTodo } = props;

  return (
    <div>
      <Input placeholder="Search..." />
      <h1>{addTodo.todoFormData}</h1>
    </div>
  );
};

AddTodo.defaultProps = {

};

AddTodo.propTypes = {
  addTodo: shape({ string }).isRequired,
};

export default AddTodo;
