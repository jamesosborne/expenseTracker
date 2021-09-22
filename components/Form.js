import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function Form() {

    return (
        <View style={styles.formWrapper}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.nameInput}></TextInput>
            <Text style={styles.label}>Next Bill Due</Text>
            <TextInput style={styles.billInput}></TextInput>
            <Text style={styles.label}>Frequency</Text>
            <TextInput style={styles.billInput}></TextInput>
            <Text style={styles.label}>Amount</Text>
            <TextInput style={styles.billInput} keyboardType={'numeric'}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    formWrapper: {
        backgroundColor: '#fff',
        marginTop: 20,
        height: '60%',
        padding: 20,
        flexDirection: 'column',
        borderRadius: 5,
        shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,

elevation: 5,
    },
    label: {
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#616771'
    },
    nameInput: {
        borderWidth: 1,
        borderRadius: 6,
        marginVertical: 20,
        padding: 10,
        height: 60,
        borderColor: 'lightgrey'
    },
    billInput: {
        borderWidth: 1,
        borderRadius: 6,
        marginVertical: 20,
        padding: 10,
        height: 60,
        borderColor: 'lightgrey'
    }
});
