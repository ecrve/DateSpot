import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeRoute from '../screens/HomeRoute';
import TermsScreen from '../screens/TermsScreen';

export const AppNavigator = StackNavigator({
        Splash: { screen: SplashScreen},
        Login: { screen: LoginScreen},
        Home: { screen: HomeRoute },
});

const AppNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav
});




export default connect(mapStateToProps)(AppWithNavigationState);
