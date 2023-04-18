import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  Modal,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState } from "react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import CommonStyles from "../../CommonStyles";

const MyStories = () => {
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
  const [newCommunity, setNewCommunity] = useState({
    title: "",
    description: "",
  });

  return (
    <View>
      <TouchableOpacity
        style={{ ...CommonStyles.actionButton, zIndex: 1 }}
        onPress={() => setModalVisible(true)}
      >
        <FontAwesomeIcon name="plus" size={30} color="#fff" />
      </TouchableOpacity>
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
                  <Text style={CommonStyles.silentText}>
                    {item.description}
                  </Text>
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
              {
                (User = "SSSSSS" && (
                  <View>
                    <TouchableOpacity
                      style={{
                        ...CommonStyles.outlineRedBtn,
                        width: "100%",
                        marginTop: 15,
                      }}
                      onPress={() => DeleteCommunity(item._id)}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "red",
                        }}
                      >
                        Delete
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))
              }
            </View>
          );
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "#00000080",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              padding: 20,
              width: "85%",
              borderRadius: 20,
              elevation: 5,
              shadowColor: "#c6c6c678",
              marginVertical: 5,
              shadowOffset: {
                width: 0,
                height: 2,
              },
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#fff",
                width: "100%",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Add a Blog / Review
              </Text>
              <TouchableOpacity
                style={{ padding: 15, paddingTop: 0 }}
                onPress={() => setModalVisible(false)}
              >
                <FontAwesomeIcon name="close" size={30} color="#000" />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{ ...CommonStyles.inputTitle }}>Title</Text>
              <TextInput
                style={{ ...CommonStyles.input, marginTop: 10 }}
                placeholder="Enter Title"
                onChangeText={(value) =>
                  setNewCommunity({ ...newCommunity, title: value })
                }
              />

              <Text style={{ ...CommonStyles.inputTitle, marginTop: 30 }}>
                Description
              </Text>
              <TextInput
                style={{ ...CommonStyles.input, marginTop: 10 }}
                placeholder="Enter Description"
                onChangeText={(value) =>
                  setNewCommunity({ ...newCommunity, description: value })
                }
              />
            </View>
            <TouchableOpacity
              style={{
                ...CommonStyles.blueBtn,
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#fff", padding: 2 }}>
                Add BLOG
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MyStories;

const styles = StyleSheet.create({});
