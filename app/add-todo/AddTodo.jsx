import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const { string, shape, func } = PropTypes;


const AddTodo = (props) => {
  const { addTodo } = props;

  return (
    <div id="add-task">
      <form>
        <TextField id="add-task-input" placeholder="Search..." />
        <RaisedButton id="save-task" label="Save Task" />
      </form>
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
