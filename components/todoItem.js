import React from "react";
import {Text, StyleSheet, TouchableOpacity, View} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';




export default function TodoItem({item ,pressHandler}){
    return(
        <TouchableOpacity onPress={()=> pressHandler(item.key)}>
            <View style={style.item} >
                <MaterialIcons name={"delete"} size={24}/>
            <Text style={style.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}
const style = StyleSheet.create(
    {
        item: {
            flexDirection: "row",
            padding:16,
            marginTop:16,
            borderColor:'#bbb',
            borderWidth:1,
            borderStyle:'dashed',
            borderRadius:10,
        },
        itemText: {
            marginLeft:10,
        }
    }
)