import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://okmeydanitipmerkezi.com/wp-content/uploads/2018/11/Kans%C4%B1zl%C4%B1k-anemi-hastal%C4%B1g%CC%86%C4%B1.jpg",
        }}
        style={[
          styles.image,
          {
            transform: [{ skewY: "-10deg" }],
          },
        ]}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>Anemi</Text>
        <Text style={styles.description}>
          Anemi, vücudunuzun yeterli sağlıklı kırmızı kan hücreleri üretmediği
          veya kaybettiği bir durumdur. Testi başlatmak için devam
          edebilirsiniz.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Name")}
          >
            <Icon
              name="arrow-right"
              size={20}
              color="#fff"
              type="font-awesome-5"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.fixToText}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => navigation.navigate("Tests")}
        >
          <Text style={styles.buttonBackText}>Testlere Göz At</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: "center",
  },
  title: {
    marginTop: 50,
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    textAlign: "justify",
    marginBottom: 20,
    color: "grey",
  },
  button: {
    marginTop: 100,
    backgroundColor: "#BD1A01",
    padding: 15,
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
  fixToText: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default Home;
