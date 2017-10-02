import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import AppBar from 'material-ui/AppBar';
import TaskListContainer from './task-list/TaskListContainer';

import './styles/main.scss';
import { connector } from './store/store';
import AddTodo from './add-todo/AddTodo';

const { func } = PropTypes;

const handleChange = update => (e) => {
  e.preventDefault();
  update(e.target.value);
};

const handleClick = props => (e) => {
  e.preventDefault();
  const { postTaskAction, addTodo: { todoFormData, newTask } } = props;

  if (todoFormData && todoFormData.length > 0) postTaskAction({ ...newTask, name: todoFormData });
};

const App = (props) => {
  const { addTodo: { todoFormData } } = props
  const onChange = handleChange(props.updateInput);
  const onClick = handleClick(props);

  return (
    <div>
      <AppBar title="Task List" />
      <div
        role="presentation"
        onChange={onChange}
        onClick={onClick}
      >
        <AddTodo {...props} />
        <TaskListContainer {...props} />
      </div>

    </div>
  );
};

App.defaultProps = {

};

App.propTypes = {
  updateInput: func.isRequired
};

export default connector(App);
