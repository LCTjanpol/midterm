import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useRouter } from 'expo-router';

const user = {
  name: 'John Paul',
  email: 'johnpaul123@gmail.com',
  profileImage: 'https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-6/364602077_1046179369708692_8803945157186909484_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGW-8eFPrYIhiTISV4FtBi81sZyPSazk8jWxnI9JrOTyJS3KMt8Hmj13hXwy8wO8YwzLnqfxaIqJmAdsYTl29u-&_nc_ohc=U0kRdamdf78Q7kNvgFoPFmF&_nc_ht=scontent.fceb3-1.fna&_nc_gid=A4rcCzc2b_g2FAldWRfq-NN&oh=00_AYBQaTRRYWdlcgtkcRZF-kbnD8NVp_2ZF2OqzM-K34GrKA&oe=67082565',
};

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login'); // Redirect to the login screen
  };

  return (
    <View style={styles.container}>
      {/* User Profile Image */}
      <Image source={{ uri: user.profileImage }} style={styles.profileImage} />

      {/* User Info */}
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      {/* Profile Details */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Membership: Premium</Text>
        <Text style={styles.infoText}>Joined: January 2022</Text>
      </View>

      {/* Log Out Button */}
      <View style={styles.logoutButton}>
        <Button title="Log Out" onPress={handleLogout} color="#FF4D4D" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B8BDEF',
    padding: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Circular image
    borderWidth: 3, // Added border
    borderColor: '#FF4D4D', // Border color to match button
    marginBottom: 20,
  },
  name: {
    fontSize: 28, // Increased font size for better visibility
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center', // Center the name text
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15, // Added margin for spacing
    textAlign: 'center', // Center the email text
  },
  infoContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5, // Space between info texts
  },
  logoutButton: {
    width: '60%',
    marginTop: 20,
  },
});
