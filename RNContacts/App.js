/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState('Simon');
  const onClickHandler = () => {
    setName('Programming with Simon');
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <Button title="Press Me!" onPress={onClickHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
