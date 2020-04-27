import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreem from './LoginScreem';
import ContactScreeam from "./ContactScreem";
import Contact from './Components/Contact';
import Signup from './Signup';
import Pet from './Components/Pet';
import PetList from './PetList';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreem /> */}
      {/* <ContactScreeam /> */}
      {/* <Contact /> */}
      {/* <Signup /> */}
      <PetList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:100
  },
});
