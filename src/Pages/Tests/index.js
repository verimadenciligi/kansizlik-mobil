import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import axios from "axios";
import { Icon } from "react-native-elements";

const Tests = ({ navigation }) => {
  const [testData, setTestData] = useState([]);

  const handleGet = async () => {
    await axios
      .get(`${process.env.API_PATH}/tests`)
      .then((res) => res.data)
      .then((response) => {
        if (response) {
          setTestData(response);
        }
      })
      .catch((error) => {
        Alert.alert("Hata", "Bir sorun oluştu, lütfen tekrar deneyin.", [
          { text: "Tamam" },
        ]);
      });
  };

  useEffect(async () => {
    await handleGet();
  }, []);

  const renderTestItem = ({ item, index }) => (
    <View style={styles.item}>
      <View>
        <Text style={styles.title}>Test {index + 1}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold" }}>Test Sahibi:</Text>
          <Text>{item.name}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold" }}>Sonuç:</Text>
          <Text>{item.result ? "Kansızlık var" : "Kansızlık yok"}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("TestDetail", {
            testId: item.id,
          })
        }
      >
        <Icon name="search" size={20} color="#BD1A01" type="font-awesome-5" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          key={(testData) => testData._id}
          data={testData}
          keyExtractor={(item) => item._id}
          renderItem={renderTestItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#BD1A01",
  },
  description: {
    textAlign: "justify",
    marginBottom: 20,
    color: "grey",
  },
});

export default Tests;
