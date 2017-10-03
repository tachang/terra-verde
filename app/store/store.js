import { createStore, applyMiddleware, bindActionCreators, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { connect } from 'react-redux';

import addTask from '../add-task';

const { addTaskReducer, addTaskActions } = addTask;
const actions = { ...addTaskActions };
const rootReducer = combineReducers({
  addTask: addTaskReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const mapStateToProps = state => state;
export const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export const connector = connect(mapStateToProps, mapDispatchToProps);
