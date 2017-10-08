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

  // console.dir(target);
  // console.log('On change props: ', classList);
  // console.log('Input target: ', target.id);
  if (offsetParent.className === 'task-input') {
    const inputData = { inputField: target.id, inputValue: target.value };

    props.updateInputAction(props.addTask.inputs, inputData);
  }
};

// Click event handler
const handleClick = props => (e) => {
  e.preventDefault();
  const { offsetParent } = e.target;
  // const { addTask:  }
  // console.log('index props: ', props);
  // console.dir(e.target);
  // eslint-disable-next-line no-console
  // console.log('New Task');
  // console.dir(e.target);
  if (e.target.dataset.chkid) {
    props.selectTaskAction(Number(e.target.dataset.chkid));
  }

  console.log('Element: ', e.target);
  if (e.target.parentNode.id === 'save-task' || e.target.id === 'save-task') {
    console.log('Save clicked');
    // props.saveTaskAction(props.addTask.inputs, props.addTask.newTask);
    props.postTaskAction(props.addTask.newTask);
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
  updateInputAction: func.isRequired
};

export default connector(App);
