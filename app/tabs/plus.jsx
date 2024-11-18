import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function PlusScreen() {
  const [selectedDate, setSelectedDate] = useState('');
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState({}); // Store tasks by date

  const handleAddTask = () => {
    if (!task) {
      Alert.alert("Please enter a task");
      return;
    }

    // Check if there are already tasks for the selected date
    const newTasks = {
      ...tasks,
      [selectedDate]: [...(tasks[selectedDate] || []), task],
    };

    setTasks(newTasks);
    Alert.alert("Task Added", `Task: "${task}" scheduled for ${selectedDate}`);
    
    // Reset the fields after adding
    setTask('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Your Errands/Schedules</Text>

      <Calendar
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
        }}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, dotColor: 'blue' },
        }}
        style={styles.calendar}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your task"
        value={task}
        onChangeText={setTask}
      />

      <Button title="Add Task" onPress={handleAddTask} color="#4CAF50" />

      <View style={styles.taskContainer}>
        <Text style={styles.taskHeader}>Tasks for {selectedDate}:</Text>
        {(tasks[selectedDate] || []).map((t, index) => (
          <Text key={index} style={styles.taskItem}>{t}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B8BDEF',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  calendar: {
    marginBottom: 20, // Space between calendar and input
    borderRadius: 10, // Rounded corners for calendar
    overflow: 'hidden', // To apply border radius
    elevation: 3, // Shadow effect for elevation
  },
  input: {
    height: 50, // Increased height for better touch
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8, // Rounded corners for input
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff', // White background for better visibility
  },
  taskContainer: {
    marginTop: 20,
    backgroundColor: '#fff', // White background for task list
    borderRadius: 8, // Rounded corners for task container
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  taskHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskItem: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 5, // Added padding for spacing
  },
});
