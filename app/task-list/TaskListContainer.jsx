import React from 'react';
// import PropTypes from 'prop-types';
import { Table, TableRow, TableBody, TableHeader, TableHeaderColumn } from 'material-ui/Table';

import TaskItem from './TaskItem';

// const { func } = PropTypes;

const TaskListContainer = (props) => {
  console.log('Container props: ', props);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Title</TableHeaderColumn>
          <TableHeaderColumn>Summary</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TaskItem {...props} />
      </TableBody>
    </Table>
  );
};

export default TaskListContainer;
