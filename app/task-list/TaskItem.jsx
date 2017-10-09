import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import Chip from 'material-ui/Chip';
import { Save, Delete } from 'material-ui-icons';

const idColStyle = {
  width: '50px'
};

const TaskItem = (props) => {
  const { addTask: { taskList } } = props;
  const { uiTasks = [] } = taskList;

  return uiTasks.map((task, index) => {
    const { id, priority, description, name, selected, is_complete: isComplete } = task;
    const status = isComplete ? 'completed' : 'incomplete';
    const striped = index % 2 === 0;

    return (
      <TableRow id={id} key={id} striped={striped} hoverable>
        <TableRowColumn><Checkbox data-chkid={id} checked={selected} /></TableRowColumn>
        <TableRowColumn><Chip id="task-status">{status}</Chip></TableRowColumn>
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
