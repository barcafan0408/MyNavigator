import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';

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

class ScreenA extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Screen A
        </Text>    
        <Button
          onPress={() => this.props.navigation.dispatch({ type: 'selectScreenB' }) }
          title="Go to screen B"
        />
      </View>
    );
  }
}

ScreenA.propTypes = {
  navigation: PropTypes.object.isRequired,
};

ScreenA.navigationOptions = {
  title: 'Screen A',
};

export default ScreenA;