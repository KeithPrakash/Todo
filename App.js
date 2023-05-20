import { StatusBar } from 'expo-status-bar';
import React ,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform ,TextInput, TouchableOpacity, Keyboard} from "react-native";
import Task from './components/tasks'

export default function App() {
   const [task, setTask] = useState();
   const [taskItems, setTaskItems] = useState([]);

   const handleAddTask = () => {
    Keyboard.dismiss();
     setTaskItems([...taskItems, task]);
     setTask(null);
   };
   const completeTask =(index)=>{
   let itemsCopy =[...taskItems];
   itemsCopy.splice(index,1);
   setTaskItems(itemsCopy)

   }
  return (
    <View style={styles.container}>
      {/* todays taks */}
      <View style={styles.taskwrapper}>
        <Text style={styles.sectionTitle}>Todays tasks</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      {/* write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text styles={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskwrapper: {
    paddingTop: 80,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-around",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderColor: "#C0C0C0",
    width: 250,
    borderRadius: 60,
    borderWidth: 1,
  },
  addWrapper: {
    height: 60,
    width: 60,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#C0C0C0",
    borderRadius:60,
    alignItems:'center',
    justifyContent:'center',
  },
  addText: {
    fontSize:50,
    
  },
});
