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

class ScreenD extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Screen D
        </Text>    
        <Button
          onPress={() => this.props.navigation.dispatch({ type: 'Reset' }) }
          title="Reset"
        />
      </View>
    );
  }
}

ScreenD.propTypes = {
  navigation: PropTypes.object.isRequired,
};

ScreenD.navigationOptions = {
  title: 'Screen D',
};

export default ScreenD;