import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,TextInput  } from 'react-native'


class Signup extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.LoginTextContainer}>
                    <Text style={styles.LoginText}> Log in  </Text>
                </View>
                <View>
                    <TextInput placeholder="Username" placeholderTextColor="#aaaaaa" style={styles.input} />
                    <TextInput placeholder="Email" placeholderTextColor="#aaaaaa" style={styles.input} />

                    <TextInput placeholder="Password" placeholderTextColor="#aaaaaa" style={styles.input}
                            secureTextEntry={true}  />
                     <TextInput placeholder="Password Again" placeholderTextColor="#aaaaaa" style={styles.input}
                            secureTextEntry={true}  />
                    <Text style={styles.ForgotPassword}>Forgot Password</Text>
                </View>

                <TouchableOpacity style={styles.ButtonContainer}>
                    <Text style={styles.ButtonText}>Log in</Text>
                </TouchableOpacity>

                <View style={styles.noAccountContaier}>
                    <Text style={styles.noAccountText}>Don't have an account </Text>
                    <Text style={styles.signupText}>Sign up</Text>
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


});
export default Signup
