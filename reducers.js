import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from './AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('A');
const initialNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('B');
const secondNavState = AppNavigator.router.getStateForAction(secondAction,initialNavState);

function nav (state = initialNavState, action) {
  let nextState;
  switch (action.type) {    
    case 'selectScreenB':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'B' }),
        state
      );      
      break;
    case 'selectScreenC':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'C' }),
        state
      );      
      break;
    case 'selectScreenD':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'D' }),
        secondNavState
      );        
      break;
    case 'Reset':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'A'})
          ]
        }),
        state
      );  
      break;    
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}

const AppReducer = combineReducers({
  nav,  
});

export default AppReducer;