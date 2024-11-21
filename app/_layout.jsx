import { SplashScreen, Stack } from 'expo-router';
import React, { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const Rootlayout = () => {
  useEffect(() => {
    SplashScreen.hideAsync(); // Immediately hide the splash screen
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Rootlayout;
