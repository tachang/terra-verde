import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, TableRow, TableBody, TableHeader, TableHeaderColumn } from 'material-ui/Table';

import TaskItem from './TaskItem';
import AddTask from '../add-task/AddTask';

const idColStyle = {
  width: '50px'
};

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
            <TableHeaderColumn><div /></TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
            <TableHeaderColumn>Priority</TableHeaderColumn>
            <TableHeaderColumn style={idColStyle}>Id</TableHeaderColumn>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Summary</TableHeaderColumn>
            <TableHeaderColumn>Save/Delete</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody showRowHover>
          <AddTask {...this.props} />
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
