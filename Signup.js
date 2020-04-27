import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,TextInput  } from 'react-native'
import {AntDesign} from '@expo/vector-icons'


class Signup extends React.Component {
    render() {
        return (
            <ScrollView  showsVerticalScrollIndicator={false}>
                <AntDesign name="plus" size={20} color="red" style={styles.plus} />
                <View style={styles.container}>

                <View style={styles.LoginTextContainer}>
                    <Text style={styles.LoginText}> Sign up  </Text>
                </View>
                <View>
                    <TextInput placeholder="Username" placeholderTextColor="#aaaaaa" style={styles.input} />
                    <TextInput placeholder="Email" placeholderTextColor="#aaaaaa" style={styles.input} />
                    

                    <TextInput placeholder="Password" placeholderTextColor="#aaaaaa" style={styles.input}
                            secureTextEntry={true}  />
                     
                     <TextInput placeholder="Password Again" placeholderTextColor="#aaaaaa" style={styles.input}
                            secureTextEntry={true}  />
                    
                </View>

                <TouchableOpacity style={styles.ButtonContainer}>
                    <Text style={styles.ButtonText}>Sign up</Text>
                </TouchableOpacity>

                <View style={styles.noAccountContaier}>
                    <Text style={styles.noAccountText}>Alredy have an account ? </Text>
                    <Text style={styles.signupText}>Login</Text>
                </View>
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 50
    },
    LoginText: {
        fontSize: 50,
        color: "red",
    },
    LoginTextContainer: {
        marginBottom: 30
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: "red",
        fontSize: 20,
        height: 50,
        marginTop: 20
    },
    ForgotPassword: {
        alignSelf: "flex-end",
        marginVertical: 3,
        color: "#323ca8"
    },
    ButtonContainer: {
        height: 50,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginVertical: 50
    },
    ButtonText: {
        fontSize: 25,
        color: "white"
    },
    noAccountContaier: {
        flexDirection: "row",
        justifyContent: "center"
    },
    noAccountText: {
        marginRight: 10,
        fontSize: 16
    },
    signupText: {
        fontSize: 16,
        color: "red"
    },
    plus:{
        position:"absolute",
       bottom:170,
        left:20,

        marginRight:10
    }


});
export default Signup
