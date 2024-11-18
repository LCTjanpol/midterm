import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants'; // Ensure this path is correct

const TabIcon = ({ icon, color }) => {
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        style={[styles.icon, { tintColor: color }]}
      />
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="remove"
        options={{
          title: 'Remove',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon
              icon={icons.remove} // Ensure this icon is defined in your icons
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon
              icon={icons.notifications}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="plus"
        options={{
          title: 'Plus',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon
              icon={icons.plus} // Ensure this icon is defined in your icons
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: 'User',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon
              icon={icons.user} // Ensure this icon is defined in your icons
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default TabLayout;
