import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";

const AnemiForm = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [values, setValues] = useState({});
  const [finished, setFinished] = useState(false);
  const route = useRoute();
  const { username } = route.params;

  const handleSubmit = async () => {
    setFinished(true);

    await axios
      .post("/tests", values)
      .then((response) => {
        console.log(response);
        if (response) {
          setInput("");
        }
      })
      .catch((error) => {
        Alert.alert("Hata", "Bir sorun oluştu, lütfen tekrar deneyin.", [
          { text: "Tamam" },
        ]);
      });
  };

  const list = [
    { label: "RBC", value: "rbc" },
    { label: "HGB", value: "hgb" },
    { label: "HCT", value: "hct" },
    { label: "MCV", value: "mcv" },
    { label: "MCH", value: "mch" },
    { label: "MCHC", value: "mchc" },
  ];

  const selected = list[index];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.welcome}>Hoşgeldin,</Text>
            <Text style={styles.welcomeUser}>{username}</Text>
          </View>
          {finished ? (
            <View>
              <Text style={styles.title}>Değerler:</Text>
              {list.map((item, idx) => (
                <Text key={idx}>{`${item.label}: ${
                  values[item.value] || "-"
                }`}</Text>
              ))}
            </View>
          ) : (
            <View>
              <Text
                style={styles.title}
              >{`Lütfen ${selected.label} değerini giriniz`}</Text>
              <TextInput
                style={styles.input}
                onChangeText={setInput}
                value={input}
                placeholder={selected.label}
                keyboardType="numeric"
                placeholderTextColor="#827F83"
              />
              <View style={styles.fixToText}>
                <TouchableOpacity
                  style={styles.buttonBack}
                  disabled={index === 0}
                  onPress={() => {
                    if (index !== 0) {
                      setIndex((i) => i - 1);
                    }
                  }}
                >
                  <Text style={styles.buttonBackText}>Geri</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={async () => {
                    if (!input) {
                      Alert.alert("Uyarı", "Lütfen bir değer girin.", [
                        { text: "Tamam" },
                      ]);
                      return;
                    } else {
                      setValues({
                        ...values,
                        [selected.value]: input,
                      });
                      setInput("");

                      if (index !== list.length - 1) {
                        setIndex((i) => i + 1);
                      } else {
                        await handleSubmit();
                      }
                    }
                  }}
                >
                  <Text style={styles.buttonText}>
                    {index !== list.length - 1 ? "İlerle" : "Bitir"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
        <View style={styles.quitArea}>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttonBackText}>Testi Bitir</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    paddingTop: 5,
    paddingHorizontal: 12,
  },
  welcomeUser: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    paddingTop: 5,
    color: "#BD1A01",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#F2F1F6",
    fontWeight: "bold",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    paddingTop: 5,
    paddingHorizontal: 12,
    fontWeight: "bold",
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
  quitArea: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default AnemiForm;
