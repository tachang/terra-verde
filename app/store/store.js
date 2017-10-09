import { createStore, applyMiddleware, bindActionCreators, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { connect } from 'react-redux';

// Reducer imports
import addTask from '../add-task';

// Creating redux store and connector
const { addTaskReducer, addTaskActions } = addTask;
const actions = { ...addTaskActions };
const rootReducer = combineReducers({
  addTask: addTaskReducer,
  // taskList: taskListReducer
  // ...
});

// Redux devtools NOTE: should be conditionally enable based on env
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
// export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// This is a custom pattern where a connector funtion is exported
// for the function and state bindings
const mapStateToProps = state => state;
export const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

// Just invoke connector on the component you want to connect to the store
export const connector = connect(mapStateToProps, mapDispatchToProps);
