import { createStore, applyMiddleware, compose } from 'redux';
import themeReducer from './reducers/theme';
import actionSplitterMiddleware from './middlewares/core/actionSplitter';
import loggerMiddleware from './middlewares/core/logger';
import themeMiddleware from './middlewares/feature/theme';

// const rootReducer = combineReducers({
//   ui: uiReducer,
//   auth: authReducer,
// });

const rootReducer = themeReducer;

const featureMiddlewares = [themeMiddleware];
const coreMiddlewares = [actionSplitterMiddleware, loggerMiddleware];

const composeEnhancers = compose;

const enhancer = composeEnhancers(applyMiddleware(...featureMiddlewares, ...coreMiddlewares));

export default createStore(rootReducer, {}, enhancer);
