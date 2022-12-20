
import {FlatList, StyleSheet, Text, View,TouchableWithoutFeedback,Keyboard} from 'react-native';
import {useState} from "react";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";
import Alert from "react-native/Libraries/Alert/Alert";
import Sandbox from "./components/sandbox";
export default function App() {
  const [todos , setTodos] = useState([
    {text: 'TO coffe',key:'1'},
    {text: 'create an app',key:'2'},
    {text: 'play GOD OF War',key:'3'},
    {text: 'go to esprims',key:'4'},
  ]);
  const  pressHandler = (key)=> {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }
  const submitHandler =(text)=>{

    if(text.length > 3 ){
      setTodos((prevTodos)=>{
        return [
          {text: text,key: Math.random().toString()},

          ...prevTodos]
      })
    }else {
      Alert.alert('OOOPS !!','ajouter plus que 3 mots ',[{
        text:'fermer',onPress:()=> console.log('alert closed')

      }])
    }

  }

  return (

      <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss();
      }} >
        <View style={styles.container}>
          <Header/>
          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler}/>
            <View style={styles.list}>
              <FlatList data={todos} renderItem={({item})=> (
                  <TodoItem item={item} pressHandler={pressHandler} />
              )}/>
            </View>

          </View>
        </View>
      </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   },
  content : {
    padding: 40,
    flex:1,

  },
  list: {
    flex:1,
    marginTop:20,
    backgroundColor: "white"
  }
});
