import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Table, TableRow, TableBody, TableHeader, TableHeaderColumn } from 'material-ui/Table';

import TaskItem from './TaskItem';

class TaskListContainer extends Component {
  componentDidMount() {
    this.props.getTasksAction();
  }

  render() {
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
          <TaskItem {...this.props} />
        </TableBody>
      </Table>
    );
  }
}

export default TaskListContainer;
