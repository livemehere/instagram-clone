import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { users } from "../../data/user";
import ProfileImage from "../common/ProfileImage";
import { Entypo } from "@expo/vector-icons";

const Story = () => {
  return (
    <View style={{ marginTop: 15 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={[styles.story, { marginTop: 6 }]}>
          <ProfileImage uri={users[0].image} size={70} border={0} />
          <View
            style={{
              position: "absolute",
              bottom: 15,
              right: 0,
              backgroundColor: "white",
              borderRadius: 24 / 2,
            }}
          >
            <Entypo name="circle-with-plus" size={24} color="#1B9AF7" />
          </View>
          <Text>Your story</Text>
        </View>
        {users.map((user) => (
          <View style={styles.story} key={user.id}>
            <ProfileImage uri={user.image} size={70} />
            <Text>
              {user.username.length > 11
                ? user.username.slice(0, 8) + "..."
                : user.username}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    marginLeft: 10,
    alignItems: "center",
  },
});

export default Story;
