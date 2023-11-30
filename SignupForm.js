import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function RegisterForm({ navigation }) {
  const [showPass, setShowPass] = useState(false);
  const [showRePass, setShowRePass] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegister = () => {
    // Simulate successful registration, you should replace this with your actual registration logic
    // For now, it will just set registrationSuccess to true after a brief delay
    setTimeout(() => {
      setRegistrationSuccess(true);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={[styles.input, styles.inputColor]}
        error={true}
        theme={{ colors: { primary: "red", text: "white" } }}
      />
      <TextInput
        mode="outlined"
        placeholder="Password"
        label="Password"
        secureTextEntry={showPass}
        right={
          <TextInput.Icon
            icon={!showPass ? "eye" : "eye-off"}
            onPress={() => setShowPass(!showPass)}
          />
        }
        style={[styles.input, styles.inputColor, { marginTop: 10 }]}
        theme={{ colors: { primary: "red", text: "white" } }}
      />
      <TextInput
        mode="outlined"
        placeholder="Re-type Password"
        label="Re-type Password"
        secureTextEntry={showRePass}
        right={
          <TextInput.Icon
            icon={!showPass ? "eye" : "eye-off"}
            onPress={() => setShowRePass(!showRePass)}
          />
        }
        style={[styles.input, styles.inputColor, { marginTop: 10 }]}
        theme={{ colors: { primary: "red", text: "white" } }}
      />
      <Button
        icon="account-plus"
        mode="contained"
        style={[styles.button, styles.buttonColor]}
        labelStyle={{ color: "black" }}
        onPress={handleRegister}
      >
        Register
      </Button>
      {registrationSuccess && (
        <Text style={{ color: "green", marginTop: 10, fontSize: 22 }}>
          Successfully registered!
        </Text>
      )}
      <Button
        onPress={() => navigation.pop()}
        icon="arrow-left"
        mode="contained"
        style={[styles.button, styles.buttonColor, { marginTop: 10 }]}
        labelStyle={{ color: "black" }}
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
  inputColor: {
    backgroundColor: "white",
  },
  button: {
    marginTop: 10,
  },
  buttonColor: {
    backgroundColor: "white",
  },
});
