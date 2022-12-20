import {Text, View,StyleSheet} from "react-native";


export default function Sandbox(){

    return(
        <View style={styles.container}>

            <Text style={styles.boxOne}>etape 1 </Text>
            <Text style={styles.boxTwo}>etape 2</Text>
            <Text style={styles.boxThree}>etape 3 </Text>
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        //flex:1,
        flexDirection:"row",
        justifyContent:"center",
        paddingTop: 40,
        backgroundColor:'#ddd',
    },
    boxOne:{
        paddingTop: 10,
        backgroundColor:'red',
    },
    boxTwo:{

        paddingTop: 10,
        backgroundColor:'green',
    },
    boxThree:{
        paddingTop: 10,
        backgroundColor:'violet',
    },
    boxFour: {
        paddingTop: 10 ,
        backgroundColor: "green",
    }
})