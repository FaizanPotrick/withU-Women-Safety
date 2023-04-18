import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Styles from "../../CommonStyles";

const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.mainCon}>
      <View style={styles.textCon}>
        <Text style={[Styles.bold, styles.title]}>withU</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("login")}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: Styles.bold.fontFamily,
              fontSize: 18,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 50,
    marginTop: 10,
  },
  btn: {
    backgroundColor: Styles.bg.backgroundColor,
    paddingVertical: 12,
    borderRadius: 12,
    position: "absolute",
    top: "180%",
    paddingHorizontal: 50,
  },
});

export default GetStarted;
