import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import { connector } from '../store/store';

const { func } = PropTypes;

const handleChange = update => (e) => {
  e.preventDefault();
  update(e.target.value);
};

const AddTodo = (props) => {
  console.log('Logging props: ', props);
  const onChange = handleChange(props.updateInput);

  return (
    <div>
      <Input placeholder="Search..." onChange={onChange} />
      <h1>{props.addTodo.todoFormData}</h1>
    </div>
  );
};

AddTodo.defaultProps = {

};

AddTodo.propTypes = {
  updateInput: func.isRequired
};

export default connector(AddTodo);
