import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import Auth from "./screens/auth/AuthScreen";
import MainScreen from "./screens/MainScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/Fonts/Poppins-Bold.ttf"),
    "Poppins-Thin": require(".//assets/Fonts/Poppins-Thin.ttf"),
    "Poppins-Medium": require(".//assets/Fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar barStyle={"auto"} />
      <NavigationContainer>
        <Provider />
      </NavigationContainer>
    </>
  );
}

const Provider = () => {
  const isLogin = true;
  return <>{isLogin ? <MainScreen /> : <Auth />}</>;
};
