import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const backgroundImage = require("../../image/background.jpg");
const logoImage = require("../../image/logo4.png");

export default function LandingPage() {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  const navigateToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View style={{ alignItems: "center" }}>
        <Image source={logoImage} style={{ width: 200, height: 200, marginBottom: 10, marginTop: 10}} />
        <Text style={{ fontSize: 28, color: "white", marginBottom: 20, fontWeight: "bold" }}>
          Frans Szendrei Baylon
        </Text>
        <TouchableOpacity
          style={{ marginBottom: 20, width: 200, height: 60, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}
          onPress={navigateToLogin}
        >
          <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginBottom: 20, width: 200, height: 60, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}
          onPress={navigateToRegister}
        >
          <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
