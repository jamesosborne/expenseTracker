import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView} from "react-native";
import MonthSummary from '../components/Month';
import Bill from '../components/Bill';
import UpcomingBill from "../components/Upcoming";

export default function OverviewScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.topPanel}>
                <TouchableOpacity style={styles.menu}>
                    <Image
                    style={styles.menuImage}
                    source={require("../assets/menu.png")}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Overview</Text>
                <MonthSummary />
            </View>
            <Text style={styles.billsLabel}>My Bills</Text>
            <View style={{height: 395}}>
                <ScrollView style={styles.billContainer}>
                    <Bill path={require("../assets/netflix.png")} amount={'£9.99'} name={'Netflix'}/>
                    <Bill path={require("../assets/amazon.png")} amount={'£4.99'} name={'Amazon'}/>
                    <Bill path={require("../assets/britishgas.png")} amount={'59.99'} name={'British Gas'}/>
                    <Bill path={require("../assets/disney.png")} amount={'£7.99'} name={'Disney+'}/>
                    <Bill path={require("../assets/spotify.png")} amount={'£14.99'} name={'Spotify'}/>
                </ScrollView>
            </View>
            <Text style={styles.upcomingLabel}>Coming Up</Text>
            <ScrollView style={styles.upcomingContainer} horizontal={true}>
                <UpcomingBill path={require("../assets/netflix.png")} amount={'£9.99'} duration={'Tomorrow'}/>
                <UpcomingBill path={require("../assets/spotify.png")} amount={'£14.99'} duration={'2 Days'}/>
                <UpcomingBill path={require("../assets/disney.png")} amount={'£7.99'} duration={'5 Days'}/>
            </ScrollView>
            
        </View>
    )}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7f3f2",
    },
    title: {
        fontSize: 32,
        color: "#FFF",
        paddingTop: 120,
        marginBottom: 20,
    },
    topPanel: {
        width: '100%',
        backgroundColor: '#4287f5',
        height: 275,
        overflow: 'visible',
        paddingLeft: 38
    },
    menu: {
        height: 20,
        width: 20,
        position: "absolute",
        top: 60,
        right: 40,
    },
    menuImage: {
        width: 30,
        height: 30,
    },
    billContainer: {
        marginHorizontal: 30,
        marginTop: 150,
        padding: 10,
    },
    billsLabel: {
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#616771',
        position: 'absolute',
        top: 400,
        left: 40
    },
    upcomingLabel: {
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#616771',
        marginLeft: 40,
        marginTop: 5,
    },
    upcomingContainer: {
        marginHorizontal: 30,
        marginTop: 10,
        padding: 10,
    },
})