import { View, Image, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Sos from "./pages/Sos";
import Map from "./pages/Map";
import Alerts from "./pages/Alerts";
import Story from "./pages/Story";
import Profile from "./pages/Profile";

const MainScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator
        initialRouteName="SOS"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#fff",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            padding: 50,
            height: 100,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.07,
            shadowRadius: 20,
            elevation: 2,
          },
        }}
      >
        <Tab.Screen
          name="MAP"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  top: Platform.OS === "android" ? 0 : -15,
                  padding: 20,
                  borderRadius: 15,
                  aspectRatio: 1,
                }}
              >
                <Image
                  source={require("../assets/icons/map.png")}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </View>
            ),
          }}
          component={Map}
        />
        <Tab.Screen
          name="ALERTS"
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: Platform.OS === "android" ? 0 : -15,
                  padding: 20,
                  borderRadius: 15,
                }}
              >
                <Image
                  source={require("../assets/icons/sos.png")}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </View>
            ),
          }}
          component={Alerts}
        />
        <Tab.Screen
          name="SOS"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: Platform.OS === "android" ? 0 : -15,
                  padding: 25,
                  borderRadius: 40,
                  aspectRatio: 1,
                  backgroundColor: "#f75459",
                }}
              >
                <Image
                  source={require("../assets/icons/alert.png")}
                  resizeMode="contain"
                  style={{
                    width: 35,
                    height: 35,
                    marginBottom: 5,
                  }}
                />
              </View>
            ),
          }}
          component={Sos}
        />
        <Tab.Screen
          name="STORIES"
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: Platform.OS === "android" ? 0 : -15,
                  padding: 20,
                  borderRadius: 15,
                  aspectRatio: 1,
                }}
              >
                <Image
                  source={require("../assets/icons/story.png")}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </View>
            ),
          }}
          component={Story}
        />
        <Tab.Screen
          name="PROFILE"
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: Platform.OS === "android" ? 0 : -15,
                  padding: 20,
                  borderRadius: 15,
                  aspectRatio: 1,
                }}
              >
                <Image
                  source={require("../assets/icons/profile.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </View>
            ),
          }}
          component={Profile}
        />
      </Tab.Navigator>
    </>
  );
};

export default MainScreen;
