import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, BackHandler } from 'react-native';
import { addNavigationHelpers, NavigationActions } from "react-navigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class ScreenD1 extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, navigation } = this.props;
    if (navigation.index === 0) {
      return false;
    }
    navigation.dispatch(NavigationActions.back());
    return true;
  };
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Screen D1
        </Text>    
        <Button
          onPress={() => this.props.navigation.dispatch({ type: 'Reset' }) }
          title="Reset"
        />
      </View>
    );
  }
}

ScreenD1.propTypes = {
  navigation: PropTypes.object.isRequired,
};

ScreenD1.navigationOptions = {
  title: 'Screen D1',
};

export default ScreenD1;