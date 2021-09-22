import React from 'react'
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'

export default function Bill(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={props.path}/>
            <Text style={styles.label}>{props.name}</Text>
            <Text style={styles.label}>{props.amount}</Text>
        </View>
    )
}


const styles = StyleSheet.create({ 
    container: {
        backgroundColor: '#FFF',
        marginBottom: 20,
        width: 350,
        padding: 20,
        height: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginRight: 20,
    },
    icon: {
        height: 40,
        width: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 3.84,
        
    }
})

