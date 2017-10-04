import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, TableRow, TableBody, TableHeader, TableHeaderColumn } from 'material-ui/Table';

import TaskItem from './TaskItem';

const { func } = PropTypes;

class TaskListContainer extends Component {
  componentDidMount() {
    this.props.getTasksAction();
  }

  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Priority</TableHeaderColumn>
            <TableHeaderColumn>Id</TableHeaderColumn>
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

TaskListContainer.propTypes = {
  getTasksAction: func.isRequired
};

export default TaskListContainer;
