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

class ScreenC extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Screen C
        </Text>    
        <Button
          onPress={() => this.props.navigation.dispatch({ type: 'selectScreenD' }) }
          title="Go to screen D"
        />
      </View>
    );
  }
}

ScreenC.propTypes = {
  navigation: PropTypes.object.isRequired,
};

ScreenC.navigationOptions = {
  title: 'Screen C',
};

export default ScreenC;