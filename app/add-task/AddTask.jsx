import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import { Save, Delete } from 'material-ui-icons';

import { idColStyle, textStyles } from './styles/componentStyles';

const { arrayOf, element } = PropTypes;

const AddTask = (props) => {
  const { children } = props;
  const [checkBox] = children;

  return (
    <TableRow>
      <TableRowColumn><div>Add Task:</div></TableRowColumn>
      <TableRowColumn>
        <TextField type="number" id="priority" style={textStyles} placeholder="0" />
      </TableRowColumn>
      <TableRowColumn style={idColStyle}>100</TableRowColumn>
      <TableRowColumn>
        <TextField id="title" className="add-task-input" placeholder="Title..." />
      </TableRowColumn>
      <TableRowColumn>
        <TextField id="descr" className="add-task-input" placeholder="Descr..." />
      </TableRowColumn>
      <TableRowColumn><Save id="save-task" /><Delete id="delete-task" /></TableRowColumn>
    </TableRow>
  );
};

AddTask.defaultProps = {
  children: []
};

AddTask.propTypes = {
  children: arrayOf(element).isRequired
};

export default AddTask;
