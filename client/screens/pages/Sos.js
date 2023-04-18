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
import Styles from "../../CommonStyles";
import * as SMS from "expo-sms";
import call from "react-native-phone-call";
import StateContext from "../../context/StateContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { SERVER_URL } from "../../config";

const SOS = () => {
  const { socket, Logout, User, isSocketConnected } = useContext(StateContext);
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSOS, setIsSOS] = useState(false);

  const [accepted_count, setAccepted_count] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const user = await JSON.parse(await AsyncStorage.getItem("user"));
        const { data } = await axios.get(
          `${SERVER_URL}/api/sos_accepted_count/${user.user_id}`
        );
        setAccepted_count(data);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    })();
  }, [socket.connected]);

  const refreshStatus = async () => {
    try {
      const user = await JSON.parse(await AsyncStorage.getItem("user"));
      const { data } = await axios.get(
        `${SERVER_URL}/api/sos_accepted_count/${user.user_id}`
      );
      setAccepted_count(data);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const Is_SOS = async () => {
    try {
      const user = await JSON.parse(await AsyncStorage.getItem("user"));
      const { data } = await axios.get(
        `${SERVER_URL}/api/is_sos/${user.user_id}`
      );
      setIsSOS(data);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  useEffect(() => {
    Is_SOS();
  }, [socket.connected]);

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

  const SendSMS = (emergency_contact, message) => {
    SMS.sendSMSAsync(emergency_contact, message).catch((err) =>
      console.error(err)
    );
  };

  const OnSOS = async (description) => {
    if (!isSocketConnected) return;
    setIsSOS(!isSOS);
    const { emergency_contact } = User;
    if (isSOS) {
      setAccepted_count("0");
      return socket.emit("SOS_Cancel", (data) => {
        if (data.err) return alert(data.msg);
        const message = `I am ${data} and I am not in danger anymore.`;
        SendSMS(emergency_contact, message);
      });
    }
    socket.emit("On_SOS", description, (data) => {
      if (data.err) return alert(data.msg);
      const message = `I am ${
        data.name
      } and I am in danger. Please help me. My location is https://www.google.com/maps/search/?api=1&query=${
        data.coordinates.latitude
      },${data.coordinates.longitude}.\n Send at ${new Date(
        data.time
      ).toLocaleString()}`;
      SendSMS(emergency_contact, message);
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.pseduo}>
        <Text style={styles.pseduoText}>
          {!isSOS && "No "}SOS Active{" "}
          {isSOS &&
            parseInt(accepted_count) > "0" &&
            `(${accepted_count} Accepted)`}
        </Text>
        <TouchableOpacity onPress={refreshStatus}>
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
          <TouchableOpacity
            style={styles.sosButton}
            onPress={() => OnSOS("general")}
          >
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
            onPress={() => OnSOS("accident")}
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
            onPress={() => OnSOS("medical")}
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
            onPress={() =>
              call({
                number: User.emergency_contact[0],
                prompt: true,
              }).catch(console.error)
            }
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
    fontFamily: Styles.bold.fontFamily,
  },
  onlySosButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: Styles.medium.fontFamily,
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
    fontFamily: Styles.bold.fontFamily,
  },
});

export default SOS;
