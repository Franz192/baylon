import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function LoginForm({ navigation }) {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = () => {
    // Simulate successful login, you should replace this with your actual login logic
    // For now, it will just set loginSuccess to true after a brief delay
    setTimeout(() => {
      setLoginSuccess(true);
      // Clear input fields
      setEmail('');
      setPassword('');
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        error={true}
        theme={{ colors: { primary: "white" } }}
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
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        theme={{ colors: { primary: "red" } }}
      />
      <Button
        icon="login"
        mode="contained"
        style={[styles.button, styles.loginButton]}
        labelStyle={{ color: "black" }}
        onPress={handleLogin}
      >
        Login
      </Button>
      {loginSuccess && (
        <Text style={{ color: "green", marginTop: 10, fontSize: 22 }}>Successfully logged in!</Text>
      )}
      <Button
        onPress={() => navigation.pop()}
        icon="arrow-left"
        mode="contained"
        style={[styles.button, styles.goBackButton]}
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
    marginTop: 10,
    backgroundColor: "white",
    width: "100%", // Adjust the width as needed
  },
  button: {
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: "white",
    height: 50, // Set the height as needed
    width: "100%", // Set the width as needed
  },
  goBackButton: {
    backgroundColor: "white",
    height: 50, // Set the height as needed
    width: "100%", // Set the width as needed
    marginTop: 10,
  },
});
