import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Image95 from "../../assets/Image 95.png"
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
const Screen1 = ({ navigation }) => {
    const [name, setName] = React.useState("");
  return (
    <View style={styles.container}>
      <Image source={Image95} style={{height: 200, width: 200, marginBottom: 24}}/>
      <Text style={styles.text}>MANAGE YOUR</Text>
      <Text style={styles.text}>TASK</Text>
      <TextInput
      placeholder="Enter your name"
      value={name}
      style={{
        marginTop: 32,
        borderRadius: 12,
        borderWidth: 1,
      }}
      onChangeText={(text) => {
        setName(text);
      }}
      />
      <TouchableOpacity style={{ 
        paddingHorizontal: 20, 
        paddingVertical: 12, 
        marginTop: 60,
        borderWidth: 2,
        borderRadius: 12,
        }}
        onPress={()=>navigation.push("Screen2", {name})}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Text style={styles.text}>Get Started</Text>
          <AntDesign name="arrowright" size={20}/>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: 700,
        color: "purple",
    }
});