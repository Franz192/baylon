import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleResetPassword = () => {
    // Simulate password reset, you should replace this with your actual reset logic
    // For now, it will just set resetSuccess to true after a brief delay
    setTimeout(() => {
      setResetSuccess(true);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        theme={{ colors: { primary: "red" } }}
      />
      <Button
        icon="email"
        mode="contained"
        style={styles.button}
        labelStyle={{ color: "white" }}
        onPress={handleResetPassword}
      >
        Reset Password
      </Button>
      {resetSuccess && (
        <Text style={{ color: "green", marginTop: 10, fontSize: 18 }}>
          Password reset instructions sent to your email.
        </Text>
      )}
      <Button
        onPress={() => navigation.pop()}
        icon="arrow-left"
        mode="contained"
        style={styles.button}
        labelStyle={{ color: "white" }}
      >
        Go Back
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "white",
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    width: "90%",
    marginTop: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: "red",
  },
});
