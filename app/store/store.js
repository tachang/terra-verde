import { createStore, applyMiddleware, bindActionCreators, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { connect } from 'react-redux';

// Relative imports
import addTask from '../add-task';

// Creating redux store and connector
const { addTaskReducer, addTaskActions } = addTask;
const actions = { ...addTaskActions };
const rootReducer = combineReducers({
  addTask: addTaskReducer,
});

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
// export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const mapStateToProps = state => state;
export const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export const connector = connect(mapStateToProps, mapDispatchToProps);
