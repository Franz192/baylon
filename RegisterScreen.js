import React from "react";
import { View } from "react-native";
import SignupForm from "../forms/SignupForm";
import BackgroundContainer from "./BackgroundContainer";

export default function RegisterScreen(props) {
  return (
    <BackgroundContainer>
      <View style={{ padding: 20 }}>
        <SignupForm {...props} />
      </View>
    </BackgroundContainer>
  );
}
