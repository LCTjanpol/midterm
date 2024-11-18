import { StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { Slot, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const MainLayout = () => {
  const [fontsLoaded, error] = useFonts({
    // Add your custom fonts here
    // 'YourFontName': require('../path/to/font.ttf'),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null; // Show nothing until fonts are loaded
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Slot /> {/* Ensure the Slot is included to render child screens */}
    </Stack>
  );
};

export default MainLayout;

const styles = StyleSheet.create({});
