import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import {EvilIcons} from '@expo/vector-icons'

export class Pet extends Component {
  constructor(props){
    super(props)
  }
  render() {
      const {img} = this.props
    return (
        <View style={styles.container}>
        <Image style={styles.ImagesLogo} source={img} />
        
        <View style={styles.Infos}>
            <Text style={[styles.Name,styles.space]}  numberOfLines={1}> {this.props.name} </Text>
            <Text style={styles.space} numberOfLines={1}> {this.props.type} </Text>
            <Text  style={styles.space} numberOfLines={1}> {this.props.age} </Text>
            <Text style={[styles.line,styles.space]}  numberOfLines={1}> {this.props.location} </Text>
            <EvilIcons name="location" size={15} color="red" style={styles.icons}/>
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
    height:150,
    borderRadius:10,
    flex:5,
  },
  Infos:{
    justifyContent:"center",
    flex:5,
    paddingLeft:15,
    borderWidth:1,
    borderColor:"gray",
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    height:120,
    backgroundColor:"#e9ebf0"
    
  },
  line:{
      marginLeft:12
  },
  Name:{
    fontWeight:"bold",
    fontSize:18,
    color:"blue"
  },
  icons:{
        position:"absolute",
        left:15,
        bottom:18,
  },
  space:{
      marginBottom:2
  },
})

export default Pet
