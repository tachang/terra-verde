import { createStore, applyMiddleware, bindActionCreators, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { connect } from 'react-redux';

import addTodo from '../add-todo';

const { addTodoReducer, addTodoActions } = addTodo;
const actions = { ...addTodoActions };
const rootReducer = combineReducers({
  addTodo: addTodoReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const mapStateToProps = state => state;
export const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export const connector = connect(mapStateToProps, mapDispatchToProps);
