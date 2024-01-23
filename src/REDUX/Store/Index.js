import {createStore} from 'redux';
import appReducer from '../Reducer/Index';

const store = createStore(appReducer);

export default store;