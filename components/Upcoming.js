import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function UpcomingBill(props) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.label}>{props.duration}</Text>
                <Text style={styles.amount}>{props.amount}</Text>
            </View>
            <View style={styles.iconContainer}>
                <Image style={styles.icon} source={props.path}/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({ 
    container: {
        backgroundColor: '#fff',
        height: 75,
        width: 150,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
        padding: 10,
        flexDirection: 'row',
        marginRight: 30
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        marginRight: 20,
        color: '#616771',
},
amount: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5
},
icon: {
    height: 50,
    width: 50,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 3.84,
    elevation: 5,
},
iconContainer: {
    position: 'absolute',
    left: 125,
    top: 10,
    alignItems: 'center',
    justifyContent: 'center'
}
    
})