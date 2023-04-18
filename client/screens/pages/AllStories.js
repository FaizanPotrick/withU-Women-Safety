import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import CommonStyles from "../../CommonStyles";

const AllStories = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([
    {
      _id: "1",
      title: "My First Blog Post",
      description:
        "This is my first blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      user: {
        _id: "1",
        email_address: "user1@example.com",
      },
    },
    {
      _id: "2",
      title: "My Second Blog Post",
      description:
        "This is my second blog post. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      user: {
        _id: "2",
        email_address: "user2@example.com",
      },
    },
  ]);
  return (
    <FlatList
      refreshControl={<RefreshControl refreshing={false} />}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      style={{ padding: 30 }}
      data={data}
      renderItem={({ item }) => {
        return (
          <View
            style={{
              ...CommonStyles.card,
              minHeight: 300,
            }}
          >
            <View style={CommonStyles.cardRow}>
              <View>
                <Text style={CommonStyles.title}>{item.title}</Text>
                <Text style={CommonStyles.silentText}>{item.description}</Text>
              </View>
            </View>
            <View style={CommonStyles.divider}></View>
            <Text
              style={{
                ...CommonStyles.silentText,
                marginTop: 20,
                fontWeight: "bold",
              }}
            >
              Posted By : {item.user.email_address}
            </Text>
            {(User = "SSSSSS" && <View></View>)}
          </View>
        );
      }}
    />
  );
};

export default AllStories;
