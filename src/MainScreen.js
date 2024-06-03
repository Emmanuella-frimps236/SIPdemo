import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";
// MainScreen Component
const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("../assets/images/blue_main.png")} // Update the path to your background image
        style={styles.background}
      >
        <View style={styles.buttonWrapper}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.buttonText}>Tap to Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
// StyleSheet for the various component
const styles = StyleSheet.create({
  //style for the safe area
  safeArea: {
    flex: 1,
  },
  //style for the background image
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  //style for the View component that holds the bottom
  buttonWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    minHeight: "20%",
  },
  //style for the bottom component
  buttonContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
  },
  //style for the button
  button: {
    backgroundColor: "#e0a828",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  //style for botton text
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default MainScreen;
