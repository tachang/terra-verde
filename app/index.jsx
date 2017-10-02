import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import TaskListContainer from './task-list/TaskListContainer';

import './styles/main.scss';
import { connector } from './store/store';
import AddTodo from './add-todo/AddTodo';

const { func } = PropTypes;

// Change event handler
const handleChange = update => (e) => {
  e.preventDefault();
  update(e.target.value);
};

// Click event handler
const handleClick = props => (e) => {
  e.preventDefault();
  // eslint-disable-next-line no-console
  console.log('Click target: ', e.target.offsetParent.id);
  const { postTaskAction, addTodo: { todoFormData, newTask } } = props;

  if (todoFormData && todoFormData.length > 0 && e.target.offsetParent.id === 'save-task') {
    postTaskAction({ ...newTask, name: todoFormData });
  }
};

const App = (props) => {
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
