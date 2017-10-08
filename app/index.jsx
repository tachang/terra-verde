import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import TaskListContainer from './task-list/TaskListContainer';

import './styles/main.scss';
import { connector } from './store/store';

const { func } = PropTypes;

// Change event handler
const handleChange = props => (e) => {
  e.preventDefault();
  if (e.type !== 'change') return;

  const { target } = e;
  const { offsetParent } = target;

  // Update inputs on change
  if (offsetParent.className === 'task-input') {
    const inputData = { inputField: target.id, inputValue: target.value };

    props.updateInputAction(props.addTask.inputs, inputData);
  }
};

// Click event handler
const handleClick = props => (e) => {
  e.preventDefault();

  // Select a task to edit/delete
  if (e.target.dataset.chkid) {
    props.selectTaskAction(Number(e.target.dataset.chkid));
  }

  // Add new or save changes to a task
  if (e.target.parentNode.id === 'save-task' || e.target.id === 'save-task') {
    // props.saveTaskAction(props.addTask.inputs, props.addTask.newTask);
    props.postTaskAction(props.addTask.newTask);
  }
};

// Root component
const App = (props) => {
  const onChange = handleChange(props);
  const onClick = handleClick(props);

  return (
    <div>
      <AppBar title="Task List" />
      <div role="presentation" onChange={onChange} onClick={onClick}>
        <TaskListContainer {...props} />
      </div>
    </div>
  );
};

App.defaultProps = {

};

App.propTypes = {
  updateInputAction: func.isRequired
};

export default connector(App);
