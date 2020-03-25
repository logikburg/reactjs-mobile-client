import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';
import { setting } from './setting.reducer';
import { storeitem } from './storeitem.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  setting,
  storeitem
});

export default rootReducer;
