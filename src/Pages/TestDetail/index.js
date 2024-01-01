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
  const { testId, ...data } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Test {testId}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.titles}>Test Sahibi: </Text>
          <Text style={styles.values}>{data.name}</Text>
        </View>
        <View>
          <View style={styles.table}>
            <View style={styles.table_head}>
              <View style={{ width: "15%" }}>
                <Text style={styles.table_head_captions}>No</Text>
              </View>
              <View style={{ width: "45%" }}>
                <Text style={styles.table_head_captions}>Hormonlar</Text>
              </View>
              <View style={{ width: "45%" }}>
                <Text style={styles.table_head_captions}>Değerler</Text>
              </View>
            </View>
            {list.map((item, idx) => (
              <View style={styles.table_body_single_row} key={idx}>
                <View style={{ width: "15%" }}>
                  <Text style={styles.table_data}>{idx + 1}</Text>
                </View>
                <View style={{ width: "45%" }}>
                  <Text style={styles.table_data}>{item.label}</Text>
                </View>
                <View style={{ width: "45%" }}>
                  <Text style={styles.table_data}>
                    {data[item.value] || "-"}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.result}>
            Bu değerler sonucunda{" "}
            {data.result
              ? "kansızlığınızın olduğu görülmüştür."
              : "kansızlığınızın olmadığı görülmüştür "}
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
    color: "#BD1A01",
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
    fontWeight: "bold",
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
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  table_head: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    padding: 7,
    backgroundColor: "#BD1A01",
    borderRadius: 5,
  },
  table_head_captions: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  table_body_single_row: {
    backgroundColor: "#fff",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    padding: 7,
  },
  table_data: {
    fontSize: 15,
  },
  table: {
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    backgroundColor: "#fff",
  },
});

export default TestDetail;
