import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import { Save, Delete } from 'material-ui-icons';

import { idColStyle, textStyles } from './styles/componentStyles';

const { shape, object } = PropTypes;

const AddTask = (props) => {
  const { addTask: { inputs } } = props;
  const { priority, name, description } = inputs;

  return (
    <TableRow>
      <TableRowColumn><div>Add Task:</div></TableRowColumn>
      <TableRowColumn><Chip>incomplete</Chip></TableRowColumn>
      <TableRowColumn>
        <TextField
          type="number"
          id="priority"
          className="task-input"
          style={textStyles}
          placeholder="0"
          value={priority}
        />
      </TableRowColumn>
      <TableRowColumn style={idColStyle}>100</TableRowColumn>
      <TableRowColumn>
        <TextField
          id="name"
          type="text"
          value={name}
          className="task-input"
          placeholder="Title..."
        />
      </TableRowColumn>
      <TableRowColumn>
        <TextField
          id="description"
          value={description}
          className="task-input"
          placeholder="Descr..."
        />
      </TableRowColumn>
      <TableRowColumn><Save id="save-task" /><Delete id="delete-task" /></TableRowColumn>
    </TableRow>
  );
};

AddTask.defaultProps = {
  children: []
};

AddTask.propTypes = {
  addTask: shape({ object }).isRequired
};

export default AddTask;
