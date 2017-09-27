import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { connect } from 'react-redux';

import appReducer from '../reducers';
import * as actions from '../actions/app_actions';

export const store = createStore(appReducer, applyMiddleware(thunkMiddleware));

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export const connector = connect(mapStateToProps, mapDispatchToProps);
