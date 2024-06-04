import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";

// MainScreen Component
const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar  backgroundColor='#0b053f'barStyle="default" />
      <ImageBackground
        source={require("../assets/images/blue_main.png")}
        style={styles.background}
      >
        <View style={styles.buttonWrapper}>
          <View style={styles.buttonContainer}>
            {/* Handling the Tap to login button */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.buttonText}>Tap to Log In</Text>
            </TouchableOpacity>
            {/* Handling the forget password button */}
            <TouchableOpacity
              style={styles.forgetPasswordButton}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.forgetPasswordText}>Forget Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

// StyleSheet for the various components
const styles = StyleSheet.create({
  // Style for the main container
  container: {
    flex: 1,
    backgroundColor: "#0b053f",
    paddingTop: StatusBar.currentHeight || 0, // Add padding to the top to account for the status bar
  },
  // Style for the background image
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // Style for the View component that holds the buttons
  buttonWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    minHeight: "25%",
  },
  // Style for the button container
  buttonContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 39,
    alignItems: "center",
    shadowColor: "#000",
  },
  // Style for the login button
  button: {
    backgroundColor: "#e0a828",
    paddingVertical: 9,
    paddingHorizontal: 60,
    borderRadius: 10,
    elevation: 5, // Add elevation for Android
    shadowColor: "#000", // Shadow properties for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow properties for iOS
    shadowOpacity: 0.25, // Shadow properties for iOS
    shadowRadius: 3.84, // Shadow properties for iOS
  },
  // Style for login text
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  // Style for the forget password button
  forgetPasswordButton: {
    marginTop: 10,
    paddingHorizontal: 60,
    paddingVertical: 9,
    borderColor: "#e0a828",
    borderWidth: 2,
    borderRadius: 10,
  },
  // Style for forget password text
  forgetPasswordText: {
    color: "#e0a828",
    fontSize: 14,
  },
});

export default MainScreen;
