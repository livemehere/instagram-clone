import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { users } from "../../data/user";
import { LinearGradient } from "expo-linear-gradient";

const Story = () => {
  return (
    <View style={{ marginTop: 15 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {users.map((user) => (
          <View style={styles.story}>
            <LinearGradient
              colors={["#CA1D7E", "#E35157", "#F2703F"]}
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 1.0, y: 1.0 }}
              style={{
                height: 67,
                width: 67,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 67 / 2,
              }}
            >
              <Image source={{ uri: user.image }} style={styles.storyImage} />
            </LinearGradient>
            <Text style={styles.userName}>
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
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  userName: {},
});

export default Story;
