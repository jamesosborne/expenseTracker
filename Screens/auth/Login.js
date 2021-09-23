import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {  SimpleLineIcons } from '@expo/vector-icons'

import firebase from 'firebase'

export default function LoginScreen({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignin = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.backButton}
                onPress={() => navigation.navigate('Landing')}
            >
                <Image style={styles.icon} source={require('../../assets/back.png')} />
            </TouchableOpacity>
            <Image style={styles.kite} source={require('../../assets/kite.png')} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.title}>Back!</Text>
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <SimpleLineIcons name='envelope' size={20} color={'#a3a3a3'}/>
                        <TextInput 
                            placeholder='Email'
                            style={styles.input}
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <SimpleLineIcons name='lock' size={20} color={'#a3a3a3'}/>
                        <TextInput 
                            placeholder='Password'
                            style={styles.input}
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                </View>
                
                <TouchableOpacity 
                    onPress={() => onSignin()}
                    style={styles.login}
                >
                    <Text style={styles.loginText}>Log In</Text>
                </TouchableOpacity>
                <View style={styles.divider}>
                    <View style={{borderBottomWidth: 1, borderBottomColor: '#a3a3a3', width: '45%'}}></View>
                    <Text style={{color: '#a3a3a3'}}>or</Text>
                    <View style={{borderBottomWidth: 1, borderBottomColor: '#a3a3a3', width: '45%'}}></View>
                </View>
                
                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')} 
                    style={styles.register}
                >
                    <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4287f5',
    },
    title: {
        color: '#fff',
        fontSize: 34,
        fontWeight: '600'
    },
    titleContainer: {
        width: '100%',
        position: 'absolute',
        top: '25%',
        left: '5%'
    },
    sectionContainer: {
        width: '100%',
        height: 800,
        backgroundColor: '#fff',
        position: 'absolute',
        top: '52%',
        borderRadius: 10,
        paddingHorizontal: 30
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#a3a3a3',
        marginBottom: 40
    },
    formContainer: {
        marginTop: 20
    },
    input: {
        flex: 1,
        padding: 10,
        fontSize: 18,
        marginLeft: 5
    },
    loginText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600'
    },
    login : {
        width: '100%',
        height: 60,
        borderRadius: 10,
        backgroundColor: '#4287f5',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    registerText: {
        color: '#a3a3a3',
        fontSize: 18,
        fontWeight: '600'
    },
    register : {
        width: '100%',
        height: 60,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#a3a3a3',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    icon : {
        width: 20, 
        height:20
    },
    backButton: {
        position:'absolute', 
        top: '10%', 
        left: '5%'
    },
    kite : {
        height: 210,
        width: 300,
        position: 'absolute',
        top: '25%',
        left: '50%',
       
    }
})