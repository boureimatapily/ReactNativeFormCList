import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreem from './LoginScreem';
import ContactScreeam from "./ContactScreem";
import Contact from './Components/Contact';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreem /> */}
      <ContactScreeam />
      {/* <Contact /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:100
  },
});
