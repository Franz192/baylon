import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import backgroundImage from "../../image/background.jpg";

const BackgroundContainer = ({ children }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BackgroundContainer;
