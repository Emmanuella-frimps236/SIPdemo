import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [indexNumber, setIndexNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    // You can navigate to another screen after successful login
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your index number"
          value={indexNumber}
          onChangeText={setIndexNumber}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#8B0000", // Match your app's background color
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#fff",
  },
  input: {
    width: "80%",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
});

export default LoginScreen;
