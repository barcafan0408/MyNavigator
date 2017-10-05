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

class ScreenB extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Screen B
        </Text>    
        <Button
          onPress={() => this.props.navigation.dispatch({ type: 'selectScreenC' }) }
          title="Go to screen C"
        />
      </View>
    );
  }
}

ScreenB.propTypes = {
  navigation: PropTypes.object.isRequired,
};

ScreenB.navigationOptions = {
  title: 'Screen B',
};

export default ScreenB;