import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import ScreenC from './ScreenC';
//import ScreenD from './ScreenD';
import ScreenD1 from './ScreenD1';
import ScreenD0 from './ScreenD0';

const DNavigator = StackNavigator({
  D0: { screen: ScreenD0 },
  D1: { screen: ScreenD1 },
});

export const AppNavigator = StackNavigator({
  A: { screen: ScreenA },
  B: { screen: ScreenB },
  C: { screen: ScreenC },
  //D: { screen: ScreenD },
  D: { screen: DNavigator },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);