import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Beginner from "../beginner/Beginner";
const onPress = () => {
  <Beginner />;
};

const App = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image
          source={require("../../assets/Logo.png")}
          style={{ width: 50, height: 50, marginLeft: 20 }}
        />
        <View style={styles.container3}>
          <Text style={styles.header}>PUSH-UP DETECTOR</Text>
          <Text style={styles.header2}>HELLO, USER</Text>
          <Image
            source={require("../../assets/user.png")}
            style={{ width: 50, height: 50, marginLeft: 300, marginTop: -20 }}
          />
          <Text style={styles.header3}>Day Streak: xxx days</Text>
          <Text style={styles.header4}>
            Let’s work out our triceps, pectoral muscles, and shoulder using
            proper form. Push-up is the fastest and most effective way to build
            our strength.
          </Text>
          <Text style={styles.header5}>WE WILL HELP YOU</Text>
        </View>
      </View>
      <View style={styles.container4}>
        <View style={styles.leftBeginner}>
          <Image
            source={require("../../assets/Left-Beginner.png")}
            style={{ width: 50, height: 50, marginLeft: 25 }}
          />
          <Text style={{ textAlign: "center", marginTop: 10 }}>Good Form</Text>
        </View>

        <View style={styles.rightBeginner}>
          <Image
            source={require("../../assets/Right-Beginner.png")}
            style={{ width: 50, height: 50, marginLeft: 25 }}
          />
          <Text style={{ textAlign: "center", marginTop: 10 }}>Count</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.beginner}
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("Beginner", {
            itemName: "Beginner Push-Up",
            otherParam: "Do 10 Push-Ups with correct posture",
          });
        }}
      >
        <View style>
          <Text style={styles.contentB1}>Beginner</Text>
          <Text style={styles.contentB2}>Start as a beginner</Text>
        </View>
        <View style={{ alignSelf: "center", marginLeft: 50 }}>
          <Image
            source={require("../../assets/beginner.png")}
            style={{ width: 70, height: 70 }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.advanced}
        onPress={() => {
          navigation.navigate("Beginner", {
            itemName: "Beginner Push-Up",
            otherParam: "Do 10 Push-Ups with correct posture",
          });
        }}
      >
        <View style>
          <Text style={styles.contentA1}>Advanced</Text>
          <Text style={styles.contentA2}>Train continuously</Text>
        </View>
        <View style={{ alignSelf: "center", marginLeft: 50 }}>
          <Image
            source={require("../../assets/Advanced.png")}
            style={{ width: 70, height: 70 }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    fontFamily: "sans-serif",
  },
  container2: {
    width: "100%",
    height: 280,
    backgroundColor: "#82AAE3",
  },
  container3: {
    width: "100%",
    height: 65,
    backgroundColor: "#EAFDFC",
    marginTop: 15,
  },
  container4: {
    flexDirection: "row",
  },
  leftBeginner: {
    width: 100,
    height: 60,
    backgroundColor: "#91D8E4",
    marginTop: -30,
    borderRadius: 20,
  },
  rightBeginner: {
    width: 100,
    height: 60,
    backgroundColor: "#91D8E4",
    marginLeft: 50,
    marginTop: -30,
    borderRadius: 20,
  },
  header: {
    fontSize: 28,
    marginLeft: 100,
    marginTop: -60,
  },
  header2: {
    fontSize: 16,
    marginTop: 30,
    marginLeft: 20,
    fontFamily: "sans-serif",
  },
  header3: {
    fontSize: 13,
    marginLeft: 20,
    fontFamily: "sans-serif",
    marginTop: -20,
  },
  header4: {
    fontSize: 12,
    width: 350,
    height: 50,
    marginLeft: 20,
    marginTop: 30,
  },
  header5: {
    fontSize: 13,
    textAlign: "center",
    marginLeft: -20,
    marginTop: 10,
  },
  beginner: {
    width: "80%",
    height: 120,
    backgroundColor: "#BFEAF5",
    marginTop: 60,
    borderRadius: 20,
    flexDirection: "row",
  },
  contentB1: {
    fontSize: 40,
    marginLeft: 10,
    marginTop: 20,
  },
  contentB2: {
    fontSize: 13,
    marginLeft: 10,
  },
  advanced: {
    width: "80%",
    height: 120,
    backgroundColor: "#BFEAF5",
    marginTop: 50,
    borderRadius: 20,
    flexDirection: "row",
  },
  contentA1: {
    fontSize: 36,
    marginTop: 20,
    marginLeft: 10,
  },
  contentA2: {
    fontSize: 13,
    marginLeft: 10,
  },
});

export default App;
