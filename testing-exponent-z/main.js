import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={StyleSheet.absoluteFill}>
        <View style={{flex: 1}}>
          <Three />
        </View>
        <One />
        <Two />
      </View>
    );
  }
}

const One = createView(0, 0, 'red', 1);
const Two = createView(50, 50, 'green', 2);
const Three = createView(100, 100, 'purple', 3);

function createView(top, left, backgroundColor, zIndex) {
  class MyView extends React.Component {
    render() {
      return (
        <View style={{position: 'absolute', width: 100, height: 100, backgroundColor, top, left, zIndex, alignItems: 'center', justifyContent: 'center'}}>
          <Text>{zIndex}</Text>
        </View>
      );
    }
  }

  return MyView;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Exponent.registerRootComponent(App);
