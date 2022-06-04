import { View, Text, SafeAreaView } from "react-native";
import Header from "../components/home/Header";
import Story from "../components/home/Story";

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <Story />
    </SafeAreaView>
  );
};

export default Home;
