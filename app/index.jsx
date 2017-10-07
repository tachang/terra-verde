import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import TaskListContainer from './task-list/TaskListContainer';

import './styles/main.scss';
import { connector } from './store/store';
import AddTask from './add-task/AddTask';

const { func } = PropTypes;

// Change event handler
const handleChange = props => (e) => {
  e.preventDefault();
  if (e.type !== 'change') return;
  // const { target } = e;
  // const { id, classList } = target;
  // 
  // if () {
  //   
  // }
  // props.updateInput(e.target.value);
};

// Click event handler
const handleClick = props => (e) => {
  e.preventDefault();
  console.log('index props: ', props);
  // console.log(''e.target.firstChild);
  // eslint-disable-next-line no-console
  if (e.target.dataset.chkid) {
    props.selectTask(Number(e.target.dataset.chkid));
  }
  // console.log('Click target: ', e.target.dataset.chkid);
  // const { postTaskAction, addTask: { todoFormData, newTask } } = props;
  // 
  // if (todoFormData && todoFormData.length > 0 && e.target.offsetParent.id === 'save-task') {
  //   postTaskAction({ ...newTask, name: todoFormData });
  // // }
};

const App = (props) => {
  const onChange = handleChange(props);
  const onClick = handleClick(props);

  return (
    <div>
      <AppBar title="Task List" />
      <div
        role="presentation"
        onChange={onChange}
        onClick={onClick}
      >
        {/* <AddTask {...props} /> */}
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
