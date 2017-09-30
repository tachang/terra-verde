import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableRow, TableBody, TableHeader, TableHeaderColumn } from 'material-ui/Table';

import { tasks } from './task-list.json';
import TaskItem from './TaskItem';

const { func } = PropTypes;
console.log('Task list: ', tasks);

const createTaskList = () =>
  tasks.map((task, index) => <TaskItem key={String(index)} {...task} />);


const TaskListContainer = (props) => {
  console.log(props);
  const data = { ...props, ...tasks };
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Title</TableHeaderColumn>
          <TableHeaderColumn>Summary</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody {...data}>
        {createTaskList()}
      </TableBody>
    </Table>
  );
};

export default TaskListContainer;
