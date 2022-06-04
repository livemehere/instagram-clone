import { Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

interface Props {
  uri: string;
  size: number;
  border?: number;
}

const ProfileImage = ({ uri, size, border = 7 }: Props) => {
  return (
    <LinearGradient
      colors={["#CA1D7E", "#E35157", "#F2703F"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
      style={{
        height: size + border,
        width: size + border,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: size + border / 2,
      }}
    >
      <Image
        source={{ uri }}
        style={{
          width: size,
          height: size,
          borderRadius: 50,
        }}
      />
    </LinearGradient>
  );
};

export default ProfileImage;
