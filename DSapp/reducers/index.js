import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import loginReducer from './loginReducer';
import navReducer from './navReducer';
import profileReducer from './profileReducer';
import registerReducer from './registerReducer';
import messageReducer from './messageReducer';

const AppReducer = combineReducers ({
    login: loginReducer,
    nav: navReducer,
    profile: profileReducer,
    register: registerReducer,
    message: messageReducer

});

export default AppReducer;