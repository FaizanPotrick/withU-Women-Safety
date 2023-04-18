import React, { useEffect, useState, useContext } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { Audio } from "expo-av";
import StateContext from "../../context/StateContext";
import CommonStyles from "../../CommonStyles";

const SOS = () => {
  const { Logout } = useContext(StateContext);
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSOS, setIsSOS] = useState(false);
  const [accepted_count, setAccepted_count] = useState(0);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/sos.mp3")
    );
    setSound(sound);
    if (isPlaying) {
      sound.stopAsync();
    } else {
      await sound.setIsLoopingAsync(true);
      await sound.playAsync();
    }
    setIsPlaying(!isPlaying);
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
    });
  };

  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.pseduo}>
        <Text style={styles.pseduoText}>
          {!isSOS && "No "}SOS Active{" "}
          {isSOS &&
            parseInt(accepted_count) > "0" &&
            `(${accepted_count} Accepted)`}
        </Text>
        <TouchableOpacity onPress={null}>
          <Image
            source={require("../../assets/icons/reload.png")}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.logoutDiv}>
        <TouchableOpacity style={styles.logout} onPress={Logout}>
          <Image
            source={require("../../assets/logout-icon.png")}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View
          style={{
            borderColor: "red",
            borderWidth: 7,
            borderRadius: 200,
            padding: 15,
          }}
        >
          <TouchableOpacity style={CommonStyles.sosButton} onPress={null}>
            <Text style={styles.buttonText}>{isSOS ? "Cancel" : "SOS"}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            marginTop: "5%",
          }}
        >
          <TouchableOpacity
            style={{
              ...styles.additionalSosButton,
            }}
            onPress={null}
          >
            <Image
              source={require("../../assets/icons/accident.png")}
              resizeMode="contain"
              style={{ width: 45, height: 45, zIndex: 1 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.additionalSosButton,
            }}
            onPress={null}
          >
            <Image
              source={require("../../assets/icons/ambulance.png")}
              resizeMode="contain"
              style={{ width: 45, height: 45, zIndex: 1 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 30,
            marginBottom: "15%",
            marginTop: "0%",
          }}
        >
          <TouchableOpacity style={styles.onlySosButton} onPress={playSound}>
            <Text style={styles.onlySosButtonText}>
              {isPlaying ? "Stop Siren" : "Play Siren"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#f75459",
              width: 250,
              height: 60,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              justifyContent: "center",
              marginVertical: 5,
            }}
            onPress={() => null}
          >
            <Text style={styles.onlySosButtonText}>Emergency Call</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "15%",
  },
  sosButton: {
    backgroundColor: "red",
    width: 200,
    height: 200,
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderColor: "red",
  },
  additionalSosButton: {
    width: 90,
    height: 90,
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#ff7575",
    backgroundColor: "#ffdede",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    fontFamily: CommonStyles.bold.fontFamily,
  },
  onlySosButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: CommonStyles.medium.fontFamily,
  },
  onlySosButton: {
    marginBottom: 0,
    backgroundColor: "#f75459",
    width: 250,
    height: 60,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "center",
    marginVertical: 10,
  },
  logoutDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    paddingHorizontal: 30,
  },
  logout: {
    backgroundColor: "#c6b5ff",
    padding: 15,
    borderRadius: 100,
  },
  pseduo: {
    position: "absolute",
    bottom: 70,
    elevation: 0,
    width: "100%",
    backgroundColor: "#7D40FF",
    height: 80,
    padding: 15,
    paddingHorizontal: 35,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 1,
  },
  pseduoText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: CommonStyles.bold.fontFamily,
  },
});

export default SOS;
