import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

import firebase from 'firebase'

export default function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignup = () => {
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
            <TextInput 
                placeholder='email'
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput 
                placeholder='password'
                secureTextEntry={true}
                onChangeText={(password) => setPassword(pasword)}
            />
            <Button 
                onPress={() => onSignup()}
                title='Sign In'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})