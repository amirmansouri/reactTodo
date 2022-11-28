
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";
export default function App() {
  const [todos , setTodos] = useState([
    {text: 'TO coffe',key:'1'},
    {text: 'create an app',key:'2'},
    {text: 'play GOD OF War',key:'3'},
    {text: 'go to esprims',key:'3'},
  ]);
  const  pressHandler = (key)=> {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }
  const submitHandler =(text)=>{
    setTodos((prevTodos)=>{
      return [
        {text: text,key: Math.random().toString()},

          ...prevTodos]
    })
  }

  return (
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
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  content : {
    padding: 40,

  },
  list: {
    marginTop:20,
  }
});
