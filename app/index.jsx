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

const App = (props) => {
  const onChange = handleChange(props.updateInput);

  return (
    <div>
      <AppBar title="Task List" />
      <div onChange={onChange}>
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
