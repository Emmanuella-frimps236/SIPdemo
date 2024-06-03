import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  ImageBackground,
  SafeAreaView,
} from "react-native";

const SplashScreen = ({ onAnimationEnd }) => {
  const logoOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(logoOpacity, {
        toValue: 0,
        duration: 1000,
        delay: 1000,
        useNativeDriver: true,
      }),
    ]).start(onAnimationEnd);
  }, [logoOpacity, onAnimationEnd]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("../assets/images/blue_Splash.png")}
        style={styles.background}
      >
        <View style={styles.container}>
          <Animated.Image
            source={require("../assets/images/Gctu_logo.png")}
            style={[styles.logo, { opacity: logoOpacity }]}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#8B0000", // Match your app's background color
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
