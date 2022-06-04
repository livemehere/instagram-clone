import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts } from "@expo-google-fonts/inter";

const Header = () => {
  const [loaded] = useFonts({
    "Lobster-Regular": require("../../assets/fonts/Lobster-Regular.ttf"),
  });

  if (!loaded) return <Text>font loading..</Text>;

  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Text style={styles.logo}>Kongstagram</Text>
      </TouchableOpacity>
      <View style={styles.icons}>
        <TouchableOpacity>
          <AntDesign
            name="plussquareo"
            size={25}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            name="hearto"
            size={25}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadCount}>
            <Text style={styles.unreadText}>13</Text>
          </View>
          <Feather
            name="message-circle"
            size={25}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  icons: {
    flexDirection: "row",
  },
  logo: {
    fontFamily: "Lobster-Regular",
    fontSize: 25,
  },
  icon: {
    marginLeft: 15,
  },
  unreadCount: {
    backgroundColor: "#FF3250",
    position: "absolute",
    right: -10,
    top: -4,
    borderRadius: 10,
    width: 25,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Header;
