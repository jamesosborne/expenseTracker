import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { VictoryPie, VictoryLegend } from 'victory-native';

let data = [
  {x: 'Netflix', y: 9.99},
  {x: 'Spotfiy', y: 14.99},
  {x: 'Amazon', y: 4.99},
  {x: 'Disney+', y: 7.99}
]

export default function ReportScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Report</Text>
            <VictoryPie  height={400} width={435} labels={() => null} innerRadius={100} colorScale={['red', 'green', 'blue', 'orange']} data={data}/>
            <VictoryLegend 
              orientation='horizontal'
              gutter={50}
              style={{ border: { stroke: "black" } }}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f7f3f2",
      
    },
    title: {
      fontSize: 32,
      color: "#616771",
      paddingTop: 120,
      paddingHorizontal: 40,
    }
  });
  