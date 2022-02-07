/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  ToastAndroid,
  View,
} from 'react-native';

import {localStorage} from './CustomNativeMdule';

const showToastWithGravityAndOffset = (message: string) => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50,
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={async () => {
         await localStorage.setItem('name', 'Nishal');
         showToastWithGravityAndOffset("Name set")
        }}
        title="  SetItem  "
        color="blue"
      />
      <View style={{marginVertical: 20}} />
      <Button
        onPress={async () =>
          showToastWithGravityAndOffset(await localStorage.getItem('name'))
        }
        title="  GetItem  "
        color="green"
      />
      <View style={{marginVertical: 20}} />
      <Button
        onPress={async () => {
          await localStorage.clear();
          showToastWithGravityAndOffset('StoreToken cleared');
        }}
        title="  Clear  "
        color="red"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    padding: 40,
    marginHorizontal: 30,
  },
});

export default App;
