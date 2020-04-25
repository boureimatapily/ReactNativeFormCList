import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreem from './LoginScreem';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:100
  },
});
