import React, {useState} from 'react';
import {  StyleSheet, View, TextInput, TouchableOpacity, Button } from "react-native";


export default function TaskInputField({addTask}){
    const [task, setTask] = useState();

    const handleAddTask = (value) => {
        addTask(value);
        setTask(null);
    }

    return (
        <View 
        style={styles.container}
      >
        <TextInput style={styles.inputField} value={task} onChangeText={text => setTask(text)} placeholder={'Write a task'} placeholderTextColor={'#fff'}/>
        <TouchableOpacity >
          <View style={styles.button}>
              <Button color="black" title="add" onPress={() => handleAddTask(task)}/>
          </View>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#fff',
        backgroundColor: '#3E3364',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20,
    },
    inputField: {
        color: '#fff',
        height: 50,
        flex: 1,
    },
    button: {
        height: 30,
        width: 30,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});