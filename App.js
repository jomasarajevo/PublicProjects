import { StyleSheet, StatusBar } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './navigation/Navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import Notifikacije from './screens/PushNotification';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <GestureHandlerRootView style={{ flex: 1 }}>
      <Notifikacije/>
        <Navigation />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({});
