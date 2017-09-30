import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableRowColumn, TableBody } from 'material-ui/Table';

const TaskItem  = (props) => {
  console.log(props);
  const { id, priority, description, inspect, is_complete } = props;

  return (
    <TableBody>
      <TableRow {...props}>
        <TableRowColumn>{id}</TableRowColumn>
        <TableRowColumn>{priority}</TableRowColumn>
        <TableRowColumn>{description}</TableRowColumn>
      </TableRow>
    </TableBody>
  );
};

export default TaskItem;
