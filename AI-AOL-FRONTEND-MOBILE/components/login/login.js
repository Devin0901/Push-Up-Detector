import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
const LoginPage = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Validate email and password
    // Send a request to the server to log in
    // If successful, navigate to the home screen
    // If unsuccessful, show an error message
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          top: -210,
          left: 0,
          right: 0,
        }}
      ></View>
      <View style={styles.startyourjourney}>
        <Text style={styles.titlelogin}>START YOUR</Text>
        <Text style={styles.titlelogin}> WORKOUT</Text>
        <Text style={styles.titlelogin}> JOURNEY</Text>
      </View>
      <View style={styles.circle}>
        <View style={{ marginLeft: 50, marginTop: 50 }}>
          <Image
            source={require("../../assets/Push-up-Login.png")}
            style={{ width: 120, height: 120 }}
          />
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        // style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder={"Username"}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      {/* <Text style={styles.label}>password</Text> */}
      <TextInput
        style={styles.input}
        placeholder={"Password"}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />

      {/* <Button style={styles.buttonn} title="Continue" onPress={handleLogin} /> */}
      <TouchableOpacity
        style={styles.buttonn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ alignSelf: "center", marginTop: 5, fontSize: 20 }}>
          Continue
        </Text>
      </TouchableOpacity>
      <Text Style={styles.label2}>Don't Have Account?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonn: {
    backgroundColor: "#82AAE3",
    width: 220,
    height: 40,
    // marginTop: 100,
    borderRadius: 20,
  },
  circle: {
    width: 220,
    height: 220,
    borderRadius: 360,
    backgroundColor: "#91D8E4",
    marginBottom: 40,
  },
  startyourjourney: {
    marginTop: 50,
    textAlign: "center",
  },
  titlelogin: {
    fontSize: 30,
    fontWeight: "500",
  },
  container: {
    marginTop: 40,
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    // justifyContent: "center",
  },
  startyourjourney: {
    marginBottom: 10,
    marginTop: 25,
  },
  titleLabel: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 20,
    marginBottom: 50,
    marginTop: 60,
    width: 240,
    marginLeft: 130,
    flexDirection: "row",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: "60%",
    height: 40,
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 20,
    padding: 8,
  },
  title: {
    width: "60%",
    height: 40,
    backgroundColor: "black",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  label2: {
    marginTop: 40,
    fontSize: 30,
  },
});

export default LoginPage;
