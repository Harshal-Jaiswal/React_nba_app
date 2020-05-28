
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { RootNavigator } from './routes';


//npm install --save axios redux react-redux redux-promise moment 
//
// npm i react-native-gesture-handler
class App extends Component {
  render() {
    const Nav = RootNavigator();
    return (
      <View style={styles.container}>
        <Nav />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default App;
