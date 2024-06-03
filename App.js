import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/SplashScreen';
import MainScreen from './src/MainScreen';
import LoginScreen from './src/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const colorScheme = useColorScheme(); // Detect system color scheme

  const handleAnimationEnd = () => {
    setIsSplashVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colorScheme === 'dark' ? '#000' : '#fff'}
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isSplashVisible ? (
            <Stack.Screen name="Splash">
              {props => <SplashScreen {...props} onAnimationEnd={handleAnimationEnd} />}
            </Stack.Screen>
          ) : (
            <>
              <Stack.Screen name="Main" component={MainScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff', // Set a default background color that matches your app theme
  },
});

export default App;