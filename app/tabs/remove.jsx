import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert } from 'react-native';

// Initial notifications data
const initialNotifications = [
  { id: '1', title: 'Team Meeting Scheduled' },
  { id: '2', title: 'Project Deadline Approaching' },
  { id: '3', title: 'Birthday Reminder' },
  { id: '4', title: 'Event Location Changed' },
  { id: '5', title: 'Weekly Review Meeting' },
];

export default function RemoveSchedule() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const removeNotification = (id) => {
    Alert.alert(
      "Remove Notification",
      "Are you sure you want to remove this notification?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: () => {
            setNotifications((prevNotifications) =>
              prevNotifications.filter((notification) => notification.id !== id)
            );
          }},
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Button title="Remove" onPress={() => removeNotification(item.id)} color="#FF4D4D" />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Remove Schedule</Text>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
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
    fontSize: 26, // Increased font size for better visibility
    fontWeight: 'bold',
    color: '#2F2F2F',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    flex: 1,
  },
  notificationItem: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    flexDirection: 'row', // Layout for title and button
    justifyContent: 'space-between', // Space between title and button
    alignItems: 'center', // Center align vertically
  },
  title: {
    fontSize: 18,
    color: '#333',
    flex: 1, // Allow title to take up remaining space
  },
  button: {
    backgroundColor: '#FF4D4D', // Button color
    padding: 10,
    borderRadius: 5,
    elevation: 2,
  },
});
