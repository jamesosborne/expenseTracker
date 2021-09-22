import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Graph from './Line'

export default function MonthSummary() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Summary</Text>
            <Text style={styles.subtitle}>£1,325</Text>
            <View style={styles.graphContainer}>
                <Graph style={styles.graph}/>
            </View>
            
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 350,
        height: 200,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: '600',
        color: '#333333',
    },
    subtitle: {
        color: '#333333',
        fontSize: 30,
        marginTop: 5,
    },
    graphContainer: {
        width: '100%',
    }
  });