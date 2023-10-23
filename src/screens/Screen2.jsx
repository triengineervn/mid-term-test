import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Avatar from "../../assets/Avatar 31.png"
import { TextInput } from "react-native-paper";

const DATA = [
  {
    id: 1,
    title: "To check email", 
  },
  {
    id: 2,
    title: "UI task web page", 
  },
  {
    id: 3,
    title: "Learn javascript basic", 
  },
  {
    id: 4,
    title: "Learn HTML Advance", 
  },
  {
    id: 5,
    title: "Medical App UI", 
  },
  {
    id: 6,
    title: "Learn Java", 
  },
]

const Screen2 = ({ navigation, route }) => {
  React.useEffect(() => {
    if (route.params?.name) {
    }
  }, [route.params?.name]);
  const [search, setSearch] = React.useState("");
  const filteredData = DATA.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  const ItemData = ({ title }) => (
    <View style={styles.item}>
      <AntDesign name="checksquare" size={30} color={"green"}></AntDesign>
      <Text style={[styles.filter, {marginStart: 24}]}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" 
          size={30} 
          onPress={()=>navigation.goBack()}>

        </AntDesign>
        <Image source={Avatar} style={{height: 60, width: 60, marginStart: 100}}></Image>
        <View style={{marginStart: 12}}>
          <Text style={[styles.text, {fontWeight: 700}]}>Hi {route.params?.name}</Text>
          <Text>Have agrate day a head</Text>
        </View>
      </View>
      <TextInput
          style={styles.searchBar}
          label="Search"
          mode="outlined"
          secureTextEntry={false}
          textColor="black"
          onChangeText={(text) => {
            setSearch(text);
          }}
          right={<TextInput.Icon icon="magnify" color={"purple"} />}
          value={search}
        />
      <FlatList  
        data={filteredData}
        renderItem={({ item }) => <ItemData title={item.title} />}
        keyExtractor={(item) => item.id}
      ></FlatList>
      <View style={{alignItems: "center", marginBottom: 30}}>
        <TouchableOpacity style={{
          height: 60, 
          width: 60, 
          backgroundColor: "purple",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 45,
          }}
          >
          <AntDesign name="plus" size={30} color={"white"}></AntDesign>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  header: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  container: {
    flex: 1,
    backgroundColor: "white",

  },
  text: {
    fontSize: 20,
  },
  searchBar: {
    margin: 8,
    borderRadius: 3,
  },
  item: {
    borderRadius: 5,
    marginRight: 16,
    flexDirection: "row",
    padding: 12,
  },
  filter: {
    paddingVertical: 8,
    fontSize: 14,
    fontWeight: 700,
  },
});