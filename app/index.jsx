import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';

import { connector } from './store/store';
import AddTodo from './add-todo/AddTodo';

const { func } = PropTypes;

const handleChange = update => (e) => {
  e.preventDefault();
  update(e.target.value);
};

const App = (props) => {
  const onChange = handleChange(props.updateInput);

  return (
    <div
      onChange={onChange}
    >
      <h1>Testing 123</h1>
      <AddTodo {...props} />
    </div>
  );
};

App.defaultProps = {

};

App.propTypes = {
  updateInput: func.isRequired
};

export default connector(App);
