import React, { Component } from 'react'
import { Text, StyleSheet, View,FlatList} from 'react-native'
import Contact from './Components/Contact'


class ContactScreem extends Component {
    contacts =[
        {name:"Boureima", number:"001-002-003"},
        {name:"Madani", number:"002-004-004"},
        {name:"Abbas", number:"031-002-005"},
        {name:"Amadou", number:"451-002-006"},
        {name:"Kone", number:"005 253 225"},
        {name:"Sugga Baby", number:"111 225 888"},
        {name:"Kezia", number:"038-002-005"},
        {name:"Joseph", number:"951-002-006"},
        {name:"Boureima", number:"089-002-003"},
        {name:"Madani", number:"098-004-004"},
        {name:"Abbas", number:"489-002-005"},
        {name:"Amadou", number:"123-002-006"},
        {name:"Kone", number:"980 253 225"},
        {name:"Sugga Baby", number:"106 225 888"},
        {name:"Kezia", number:"089-002-005"},
        {name:"Joseph", number:"963-002-006"}
   ]
   
  render() {
    return (
      <View>
        <FlatList 
            data={this.contacts} 
            renderItem={({item}) =>{ 
              return <Contact name={item.name} phone={item.number} />
            }} 
            KeyExtractor= { (item) => item.number}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({});

export default ContactScreem