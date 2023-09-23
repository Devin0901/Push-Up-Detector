import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const App = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 32, textAlign: "center"}}>Advanced Push-Up</Text>
        <Text style={{fontSize: 16, textAlign: "center"}}>Do Push-Up continuously as many as you can with correct posture</Text>
      </View>
      <Text style={{fontSize: 13, width: 350, marginLeft: 30, marginTop: 10}}>There is no limit to how many push-up you can do in a day.  To maintain a good upper body and overall strength, 50-100 push ups are enough.</Text>
      <Text style={{fontSize: 13, width: 350, marginLeft: 30, marginTop: 15}}>For best result, you can add variety to the push-up type you want to do. Don’t worry, we can still capture your process.</Text>
      <View style={{borderWidth: 1, borderColor: "black", width: "100%", marginTop: 15}}></View>
      <View style={{flexDirection: "row", marginTop: 30, justifyContent: "center"}}>
        <View style={{}}>
          <Text style>SET YOUR PUSH-UP TARGET:</Text>   
        </View>
        <View style={{width: 50, height: 20, borderWidth: 1, borderColor: "black", marginLeft: 10}}></View>
      </View>

      <Image
        source={require("../../assets/pushup.png")}
        style={{ width: 360, height: 230, marginLeft: 15, marginTop: 25}}
      />

      <Text style={{textAlign:"center", marginTop: 10}}>(Example of the camera capture)</Text>
      <TouchableOpacity style={{alignItems: "center"}}>
        <View style={styles.content2}>
          <Text style={{textAlign: "center"}}>START</Text>
        </View>
      </TouchableOpacity>
      <View style={{alignItems: "center"}}>
        <View style={styles.content3}>
          <Text style={{fontSize: 15, marginLeft: 5, marginTop: 5}}>Reminder:</Text>
          <Text style={{fontSize: 15, marginTop: 5, marginLeft: 5}}>Please allow access to the camera so the application can detect your body.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 50,
  },
  header:{
    width: "100%",
    height: 90,
    backgroundColor: "#82AAE3",
  },
  content:{
    flexDirection: "row",
  },
  content2:{
    backgroundColor: "#BFEAF5",
    justifyContent: "center",
    width: 100,
    height: 40,
    marginTop: 10,
    borderRadius: 20,
  },
  content3:{
    width: 300,
    height: 80,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginTop: 10
  }
});


export default App;
