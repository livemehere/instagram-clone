import { SafeAreaView, ScrollView, View } from "react-native";
import Header from "../components/home/Header";
import Story from "../components/home/Story";
import Post from "../components/home/Post";
import { posts } from "../data/posts";

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Story />
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
