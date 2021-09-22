import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native'

export default function LandingScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.brand}>BillBuddy</Text>
            <View style={styles.imageContainer}></View>
            <Image style={styles.image} source={require('../../assets/expenses.png')} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>Expense Tracking</Text>
                <Text style={styles.subtitle}>Track your monthly expenses and get notified when payments are due to be paid.</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Login')}
                    style={styles.login}
                >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
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
        padding: 20,
        backgroundColor: '#4287f5'
    },
    buttonContainer: {
        width: '100%',
        position: 'absolute',
        top: '80%',
        left: '5%'
    },
    textContainer: {
        width: '100%',
        position: 'absolute',
        top: '65%',
        left: '5%'
    },
    image: {
        width: 350,
        height: 300,
        position: 'absolute',
        top: '25%',
        left: '10%'
    },
    brand: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '600',
        position: 'absolute',
        top: '10%',
        left: '5%'
    },
    title: {
        color: '#fff',
        fontSize: 35,
        fontWeight: '500',
        marginBottom: 15
    },
    subtitle: {
        color: '#fff',
        lineHeight: 25
    },
    login : {
        width: '100%',
        height: 60,
        borderRadius: 10,
        backgroundColor: '#def9fa',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        color: '#4287f5',
        fontSize: 18,
        fontWeight: '600'
    },
    registerText: {
        color: '#def9fa',
        fontSize: 18,
        fontWeight: '600'
    },
    register : {
        width: '100%',
        height: 60,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#def9fa',
        justifyContent: 'center',
        alignItems: 'center'
        
    }
})