import React from 'react';
import { View, StyleSheet } from 'react-native';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryScatter } from 'victory-native'

let data = [
    {
        x: 1,
        y: 0
    },
    {
        x: 2,
        y: 0
    },
    {
        x: 3,
        y: 0
    },
    {
        x: 4,
        y: 70
    },
    {
        x: 5,
        y: 70
    },
    {
        x: 5,
        y: 70
    },
    {
        x: 5,
        y: 70
    },
    {
        x: 5,
        y: 73,
        size: 7
    }
]

export default function Graph() {
    return (
    
    <VictoryChart height={150} width={350}>
        <VictoryAxis style={{ 
        axis: {stroke: "transparent"}, 
        ticks: {stroke: "transparent"},
        tickLabels: { fill:"transparent"} 
      }} />
        <VictoryLine style={styles.graph} data={data} style={{data: {stroke: 'orange', strokeWidth: 2.5}}} />
        <VictoryScatter data={[data[data.length-1]]}
        size={5}
        style={{ data: { fill: "orange", stroke: '#f5f3f2', strokeWidth: 6} }}
      />
    </VictoryChart>
    
    )
}

const styles = StyleSheet.create({
    graph: {
        marginRight: 0
    }
})