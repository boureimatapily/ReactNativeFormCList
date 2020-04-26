import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import {MaterialIcons, MaterialCommunityIcons, SimpleLineIcons} from '@expo/vector-icons'

export class Contact extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <View style={styles.container}>
        <Image source={require('../assets/logo.jpg')} style={styles.ImagesLogo} />
        <View style={styles.Infos}>
            <Text style={styles.Name}  numberOfLines={1}> {this.props.name} </Text>
            <Text> {this.props.phone} </Text>
        </View>
        <View style={styles.icons}> 
          <MaterialIcons name="local-phone" size={25} color="red" />
        </View>
        <View style={styles.icons}>
          <MaterialCommunityIcons name="message-processing" size={25} color="red" />
        </View>
        <View style={styles.icons}>
        <SimpleLineIcons name="options-vertical" size={25} color="red" />
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    marginHorizontal:20,
    alignItems:"center",
    marginVertical:10
  },
  ImagesLogo:{
    width:50,
    height:50,
    borderRadius:50
  },
  Infos:{
    justifyContent:"center",
    marginHorizontal:15,
    flex:4
  },
  Name:{
    fontWeight:"bold",
    fontSize:18
  },
  icons:{
        flex:1
  },
})

export default Contact
