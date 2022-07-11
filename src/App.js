import React, {useState} from 'react';
import {Button,  ScrollView, StyleSheet, Text, View } from 'react-native';
import TaskInputField from './TaskInputField';
import TaskItem from './TaskItem';

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task){
    if (task == null) return;
    setTasks([...tasks, task]);
  }

  function deleteTask(deleteIndex){
    setTasks(tasks.filter((value, index) => index !== deleteIndex));
  }

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>TODO LIST</Text>
      <ScrollView style={styles.scrollView}>
        {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <TaskItem index={index + 1} task={task} deleteTask={deleteTask}/>
            </View>
          );
        })
      }
      </ScrollView>
      <TaskInputField addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});