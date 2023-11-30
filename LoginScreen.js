import React from "react";
import { View } from "react-native";
import LoginForm from "../forms/LoginForm";
import BackgroundContainer from "./BackgroundContainer";


export default function LoginScreen(props) {
  return (
    <BackgroundContainer>
      <View style={{ padding: 20, justifyContent: "center" }}>
        <LoginForm {...props} />
      </View>
    </BackgroundContainer>
  );
}
