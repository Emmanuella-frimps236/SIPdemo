import React, { useState } from "react";
import { StatusBar, StyleSheet, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/SplashScreen";
import MainScreen from "./src/MainScreen";
import LoginScreen from "./src/LoginScreen";
import RegisterScreen from "./src/RegisterScreen";

const Stack = createStackNavigator();

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const colorScheme = useColorScheme(); // Detect system color scheme

  const handleAnimationEnd = () => {
    setIsSplashVisible(false);
  };

  return (
    <SafeAreaView  style={styles.safeArea}>
      <StatusBar
        hidden={false} 
        barStyle="default" 
        backgroundColor="transparent" 
        translucent={true}
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isSplashVisible ? (
            <Stack.Screen name="Splash">
              {(props) => (
                <SplashScreen {...props} onAnimationEnd={handleAnimationEnd} />
              )}
            </Stack.Screen>
          ) : (
            <>
              <Stack.Screen name="Main" component={MainScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
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
  },
});

export default App;
