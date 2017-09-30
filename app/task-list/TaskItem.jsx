import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableRowColumn, TableBody } from 'material-ui/Table';

const TaskItem = (props, data) => {
  console.log('Task item props: ', props);
  const { children, addTodo: { taskList } } = props;
  const [checkBox] = children;

  return taskList.map((task, index) => {
    const { id, priority, description } = task;

    return (
      <TableRow id={id} key={id}>
        {checkBox}
        <TableRowColumn>{index}</TableRowColumn>
        <TableRowColumn>{priority}</TableRowColumn>
        <TableRowColumn>{description}</TableRowColumn>
      </TableRow>
    );
  });
};

export default TaskItem;
