import React, { Component } from 'react'
import { Text, StyleSheet, View,FlatList, Image} from 'react-native'
import Pet from './Components/Pet'


class PetList extends Component {
    contacts =[
        {name:"Hello", type:"Dog", age:"2 years old", 
        location:"03 Kaneshie Presby", image:require('./assets/dog.jpg')},

        {name:"Shugga", type:"Cat", age:"3 years old", 
        location:"05 Osu",image:require('./assets/cat.jpg')}, 

        {name:"COOL", type:"Tiger", age:"8 years old", 
        location:"01 Awudome", image:require('./assets/dog.jpg')},

        {name:"Police", type:"Donkey", age:"7 years old",
         location:"09 Darkuman", image:require('./assets/mouse.jpg')},
         
        {name:"Waou", type:"Lion", age:"5 years old", 
        location:"031 Wineba", image:require('./assets/dog1.jpg')},
        
   ]
   
  render() {
    return (
      <View>
        <FlatList 
            data={this.contacts} 
            renderItem={({item}) =>{ 
              return <Pet name={item.name}
               type={item.type}
               age={item.age}
               location={item.location}
               img={item.image}
               
                                     />
            }} 
            KeyExtractor= {(item) => item.name}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({});

export default PetList