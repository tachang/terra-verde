import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import TextField from 'material-ui/TextField';

const { string, shape, func } = PropTypes;

// const handleChange = update => (e) => {
//   e.preventDefault();
//   update(e.target.value);
// };

const AddTodo = (props) => {
  const { addTodo } = props;

  return (
    <div id="add-task">
      <TextField id="add-task-input" placeholder="Search..." />
      <h1>{addTodo.todoFormData}</h1>
    </div>
  );
};

// AddTodo.defaultProps = {
// 
// };
// 
// AddTodo.propTypes = {
//   addTodo: shape({ string }).isRequired,
// };

AddTodo.defaultProps = {
  onMouseUp: () => {},
  onMouseDown: () => {},
  onMouseLeave: () => {},
  onTouchStart: () => {},
  onTouchEnd: () => {},
};

AddTodo.defaultProps = {
  onMouseUp: func,
  onMouseDown: func,
  onMouseLeave: func,
  onTouchStart: func,
  onTouchEnd: func
};

export default AddTodo;
