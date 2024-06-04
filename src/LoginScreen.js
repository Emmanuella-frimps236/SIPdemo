import React, { useState } from "react";
import {  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [indexNumber, setIndexNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    // You can navigate to another screen after successful login
  };

  return (
    <ImageBackground
      source={require("../assets/images/blue_Splash.png")} // Update the path to your background image
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 0}
          style={styles.container}
        >
          <Image
            source={require("../assets/images/Gctu_logo.png")} // Update the path to your logo image
            style={styles.logo}
          />
          <TextInput
            style={styles.input}
            placeholder="Index Number"
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
          />
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 60,
  },
  input: {
    width: 360,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    borderColor: "#e0a828",
    borderWidth: 3,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#e0a828",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPasswordButton: {
    marginBottom: 20,
    marginTop: 20,
  },
  forgotPasswordText: {
    color: "#e0a828",
    fontSize: 16,
    textDecorationLine: "",
  },
});

export default LoginScreen;
