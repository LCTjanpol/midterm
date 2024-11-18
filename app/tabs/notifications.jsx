import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

// Initial notifications data
const initialNotifications = [
  { id: '1', title: 'Team Meeting Scheduled', date: new Date(), time: 'Today at 3:00 PM' },
  { id: '2', title: 'Project Deadline Approaching', date: new Date(Date.now() + 86400000), time: 'Due Tomorrow' },
  { id: '3', title: 'Birthday Reminder', date: new Date(Date.now() + 172800000), time: 'John\'s Birthday is in 2 days' },
  { id: '4', title: 'Event Location Changed', date: new Date(), time: 'Event at the Library now in Room 204' },
  { id: '5', title: 'Weekly Review Meeting', date: new Date(Date.now() + 604800000), time: 'Next Monday at 10:00 AM' },
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    const notificationInterval = setInterval(() => {
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) => ({
          ...notification,
          time: updateNotificationTime(notification.date),
        }))
      );
    }, 60000);

    return () => clearInterval(notificationInterval);
  }, []);

  const updateNotificationTime = (notificationDate) => {
    const now = new Date();
    const timeDiff = notificationDate - now;

    if (timeDiff < 0) return 'Already passed';
    if (timeDiff < 60000) return 'Just now';
    if (timeDiff < 3600000) return `${Math.floor(timeDiff / 60000)} minutes ago`;
    if (timeDiff < 86400000) return `${Math.floor(timeDiff / 3600000)} hours ago`;

    return notificationDate.toLocaleDateString();
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.notificationItem}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.date}>{item.date.toLocaleDateString()}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>

      <Text style={styles.currentTime}>
        {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}
      </Text>

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
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2F2F2F',
    marginBottom: 24,
    textAlign: 'center',
  },
  currentTime: {
    fontSize: 18, // Increased font size for better visibility
    fontWeight: '600', // Bolder text for emphasis
    color: '#4A4A4A', // Slightly darker color for better contrast
    marginBottom: 16,
    textAlign: 'center',
    backgroundColor: '#FFFFFF', // Adding a background color for emphasis
    padding: 10, // Padding for a cleaner look
    borderRadius: 8, // Rounded corners
    shadowColor: '#000', // Shadow for a subtle elevation effect
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  list: {
    flex: 1,
  },
  notificationItem: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2F2F2F',
  },
  time: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  date: {
    fontSize: 14,
    color: '#777',
    marginTop: 2,
  },
});
