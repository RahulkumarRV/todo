import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button} from "react-native";

function TaskItem({index, task, deleteTask}) {
    return (
        <View style={styles.container}>
            <View style={styles.indexContainer}>
                <Text style={styles.index}>{index}</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{task}</Text>
                <TouchableOpacity >
                    <Button style={styles.delete} color='#000' 
                    title="remove" onPress={() => deleteTask(index - 1)}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default TaskItem;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    indexContainer: {
        backgroundColor: '#3E3364',
        borderRadius: 12,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    index: {
        color: '#fff',
        fontSize: 20,
    },
    taskContainer: {
        backgroundColor: '#3E3364',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 50,
    },
    task: {
        color: '#fff',
        width: '90%',
        fontSize: 16,
    },
    delete: {
        marginLeft: 10,
    },
});