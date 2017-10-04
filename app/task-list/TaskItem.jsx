import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const TaskItem = (props) => {
  const { children, addTask: { taskList } } = props;
  const [checkBox] = children;

  return taskList.map((task) => {
    const { id, priority, description, name } = task;

    return (
      <TableRow id={id} key={id}>
        {checkBox}
        <TableRowColumn>{priority}</TableRowColumn>
        <TableRowColumn>{id}</TableRowColumn>
        <TableRowColumn>{name}</TableRowColumn>
        <TableRowColumn>{description}</TableRowColumn>
      </TableRow>
    );
  });
};

export default TaskItem;
