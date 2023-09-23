import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const App2 = ({ route, navigation }) => {
  const { itemName, otherParam } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 32, textAlign: "center" }}>
          {JSON.stringify(itemName)}
        </Text>
        <Text style={{ fontSize: 16, textAlign: "center", marginTop: 10 }}>
          {JSON.stringify(otherParam)}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 14,
          width: 350,
          marginLeft: 15,
          marginTop: 15,
          justifyContent: "center",
        }}
      >
        Let’s begin your push-up journey with just 10 push-up. We will help you
        fix your form and count until you did 10 push-ups.
      </Text>
      <View style={styles.content}>
        <View style>
          <Image
            source={require("../../assets/Beginner-Push-Up.png")}
            style={{ width: 200, height: 100, marginLeft: 15, marginTop: 15 }}
          />
        </View>
        <View style>
          <Text
            style={{
              width: 160,
              justifyContent: "center",
              marginLeft: 15,
              fontSize: 12,
              marginTop: 15,
            }}
          >
            If it’s hard to do, we recommend to do Incline Push-Up instead.
          </Text>
        </View>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: "black",
          width: "100%",
          marginTop: 15,
        }}
      ></View>
      <Image
        source={require("../../assets/pushup.png")}
        style={{ width: 360, height: 230, marginLeft: 15, marginTop: 20 }}
      />
      <Text style={{ textAlign: "center", marginTop: 10 }}>
        (Example of the camera capture)
      </Text>
      <View style={{ alignItems: "center" }}>
        <View style={styles.content2}>
          <Text style={{ textAlign: "center" }}>START</Text>
        </View>
      </View>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <View style={styles.content3}>
          <Text style={{ fontSize: 15, marginLeft: 5, marginTop: 5 }}>
            Reminder:
          </Text>
          <Text style={{ fontSize: 15, marginTop: 5, marginLeft: 5 }}>
            Please allow access to the camera so the application can detect your
            body.
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  header: {
    width: "100%",
    height: 90,
    backgroundColor: "#82AAE3",
  },
  content: {
    flexDirection: "row",
  },
  content2: {
    backgroundColor: "#BFEAF5",
    justifyContent: "center",
    width: 100,
    height: 40,
    marginTop: 10,
    borderRadius: 20,
  },
  content3: {
    width: 300,
    height: 80,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginTop: 10,
  },
});

export default App2;
