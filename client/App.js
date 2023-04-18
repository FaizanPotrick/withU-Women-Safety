import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./screens/MainScreen";
import Auth from "./screens/auth/AuthScreen";

export default function App() {
  const isLogin = false;
  return (
    <View style={styles.container}>{isLogin ? <MainScreen /> : <Auth />}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
