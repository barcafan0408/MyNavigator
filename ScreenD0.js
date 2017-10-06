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

class ScreenD0 extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Screen D0
        </Text>    
        <Button
          onPress={() => this.props.navigation.dispatch({ type: 'Reset' }) }
          title="Reset"
        />
      </View>
    );
  }
}

ScreenD0.propTypes = {
  navigation: PropTypes.object.isRequired,
};

ScreenD0.navigationOptions = {
  title: 'Screen D0',
};

export default ScreenD0;