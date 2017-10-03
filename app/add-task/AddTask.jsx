import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const { string, shape, object } = PropTypes;


const AddTask = (props) => {
  const { addTask } = props;

  return (
    <div id="add-task">
      <form>
        <TextField id="add-task-input" placeholder="Search..." />
        <RaisedButton id={'save-task'} data-mydata="mydata" label="Save Task" />
      </form>
      <h1>{addTask.todoFormData}</h1>
    </div>
  );
};

AddTask.defaultProps = {

};

AddTask.propTypes = {
  addTask: shape({ string, object }).isRequired
};

export default AddTask;
