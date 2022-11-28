import React from "react";

import {StyleSheet, Text, View} from 'react-native';
export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.titel}>mY TODOS</Text>

        </View>
    )
}
const styles = StyleSheet.create(
    {
        header : {
            height:80,
            paddingTop:38,
            backgroundColor: 'blue'

        },
        titel : {

         textAlign:'center',
            color:"#fff",
            fontSize:20,
            fontWeight:"bold"

        }

    }
)