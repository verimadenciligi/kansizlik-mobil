import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { Icon } from "react-native-elements";

const data = {
  id: 1,
  testName: "Test 1",
  performedBy: "John Doe",
  result: "Pass",
  rbc: 1,
  hgb: 1,
  hct: 1,
  mcv: 1,
  mch: 1,
  mchc: 5,
};

const list = [
  { label: "RBC", value: "rbc" },
  { label: "HGB", value: "hgb" },
  { label: "HCT", value: "hct" },
  { label: "MCV", value: "mcv" },
  { label: "MCH", value: "mch" },
  { label: "MCHC", value: "mchc" },
];

const TestDetail = ({ navigation }) => {
  const route = useRoute();
  const { testId } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Test {testId}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.titles}>Test Sahibi: </Text>
          <Text style={styles.values}>{data.performedBy}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.valuesTitle}>Değerler</Text>
          {list.map((item, idx) => (
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.itemTitle}>{item.label}: </Text>
              <Text style={styles.itemValue}>{data[item.value]}</Text>
            </View>
          ))}
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.result}>
            Bu değerler sonucunda herhangi bir hastalığınız olmadığı görülmüştür.
          </Text>
        </View>
        <View style={styles.fixToText}>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.buttonBackText}>Ana Sayfaya Geri Dön</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Name");
            }}
          >
            <Text style={styles.buttonText}>Yeni Test</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 5,
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
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#BD1A01"
  },
  description: {
    textAlign: "justify",
    marginBottom: 20,
    color: "grey",
  },
  titles: {
    fontWeight: "bold",
    fontSize: 20,
  },
  values: {
    fontSize: 20,
    color: "grey",
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
  },
  itemTitle: {
    fontWeight: "bold",
  },
  itemValue: {
    color: "grey",
  },
  valuesTitle: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 10,
  },
  result: {
    textAlign: "justify",
    marginVertical: 30,
    margin: 5,
    color: "grey",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#BD1A01",
    padding: 15,
    margin: 12,
    borderRadius: "50%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonBack: {
    padding: 15,
    margin: 12,
  },
  buttonBackText: {
    color: "#BD1A01",
    fontWeight: "bold",
  },
});

export default TestDetail;
