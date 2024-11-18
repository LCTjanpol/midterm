import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Link } from 'expo-router';  // Ensure this import is correct

// Replace with your actual logo path
const logoImage = require('../assets/logo.png'); // Adjust path accordingly

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
      <Text style={styles.title}>S.Y.C.O</Text>

      <View style={styles.buttonContainer}>
        <Link href="/auth/login" style={styles.link}>
          <Text style={styles.linkText}>Login</Text>
        </Link>
        <Link href="/auth/signup" style={styles.link}>
          <Text style={styles.linkText}>Signup</Text>
        </Link>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B8BDEF', // Set a solid background color
  },
  logo: {
    width: 150, // Adjust size as needed
    height: 150, // Adjust size as needed
    marginBottom: 20, // Spacing below the logo
  },
  title: {
    fontFamily: 'font-Bold',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff', // Change text color for visibility
  },
  buttonContainer: {
    marginTop: 20, // Add some margin for spacing
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '60%', // Control button width
    alignItems:'center'
  },
  linkText: {
    color: '#fff', // Change text color for visibility
    fontSize: 18,
    backgroundColor: '#B8BDEF', // Set a solid background color
  },
});