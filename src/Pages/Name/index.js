import axios from "axios";
import { useEffect, useState } from "react";
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

const Name = ({ navigation }) => {
  const [name, setName] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View>
          <View>
            <Text style={styles.title}>Lütfen ad ve soyadınızı giriniz</Text>
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
              placeholder={"Ad Soyad"}
              placeholderTextColor="#827F83"
            />
            <View style={styles.fixToText}>
              <TouchableOpacity
                style={styles.buttonBack}
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                <Text style={styles.buttonBackText}>Ana Sayfa</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text
                  style={styles.buttonText}
                  onPress={() => {
                    if (!name) {
                      Alert.alert("Uyarı", "Lütfen ad ve soyadınızı giriniz.", [
                        { text: "Tamam" },
                      ]);
                      return;
                    } else {
                      navigation.navigate("AnemiForm", { username: name });
                      setName("");
                    }
                  }}
                >
                  Teste Başla
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
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
});

export default Name;
