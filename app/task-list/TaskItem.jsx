import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import { Save, Delete } from 'material-ui-icons';

const idColStyle = {
  width: '50px'
};

const TaskItem = (props) => {
  const { addTask: { taskList } } = props;
  const { uiTasks = [] } = taskList;

  return uiTasks.map((task) => {
    const { id, priority, description, name, selected } = task;

    return (
      <TableRow id={id} key={id}>

        <TableRowColumn><Checkbox data-chkid={id} checked={selected} /></TableRowColumn>
        <TableRowColumn>{priority}</TableRowColumn>
        <TableRowColumn style={idColStyle}>{id}</TableRowColumn>
        <TableRowColumn>{name}</TableRowColumn>
        <TableRowColumn>{description}</TableRowColumn>
        <TableRowColumn>
          <Save id={`save-${id}`} /><Delete id={`delete-${id}`} />
        </TableRowColumn>
      </TableRow>
    );
  });
};

export default TaskItem;
