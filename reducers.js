import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from './AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('A');
const initialNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('B');
const secondNavState = AppNavigator.router.getStateForAction(secondAction,initialNavState);

const navigateActionD0 = NavigationActions.navigate({
  routeName: 'D',
  params: {},
  action: NavigationActions.navigate({ routeName: 'D0'})
});

const navigateActionD1 = NavigationActions.navigate({
  routeName: 'D',
  params: {},
  action: NavigationActions.navigate({ routeName: 'D1' })
});

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
    case 'selectScreenD0':
      nextState = AppNavigator.router.getStateForAction(navigateActionD0, state);                 
      break;
    case 'selectScreenD1':
      nextState = AppNavigator.router.getStateForAction(navigateActionD1, secondNavState);        
      break;  
    case 'Reset':
      /*nextState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'A'})
          ]
        }),
        state
      );*/
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: 'A',
          actions: [  
            NavigationActions.reset({
              index: 0,
            })
          ]
        }),
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