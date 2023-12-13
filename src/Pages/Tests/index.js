import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Icon } from "react-native-elements";

const testData = [
  { id: 1, testName: "Test 1", performedBy: "John Doe", result: "Pass" },
  { id: 2, testName: "Test 2", performedBy: "Jane Smith", result: "Fail" },
];

const Tests = ({ navigation }) => {
  const renderTestItem = ({ item, index }) => (
    <View style={styles.item}>
      <View>
        <Text style={styles.title}>Test {item.id}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold" }}>Test Sahibi:</Text>
          <Text>{item.performedBy}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold" }}>Sonuç:</Text>
          <Text>{item.result}</Text>
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
          data={testData}
          keyExtractor={(item) => item.id.toString()}
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
