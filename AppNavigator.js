import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import ScreenC from './ScreenC';
import ScreenD from './ScreenD';

export const AppNavigator = StackNavigator({
  A: { screen: ScreenA },
  B: { screen: ScreenB },
  C: { screen: ScreenC },
  D: { screen: ScreenD },
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