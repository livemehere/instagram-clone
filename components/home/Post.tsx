import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ProfileImage from "../common/ProfileImage";
import {
  AntDesign,
  Entypo,
  Feather,
  Octicons,
  FontAwesome5,
} from "@expo/vector-icons";
import { useState } from "react";

interface Props {
  post: any;
}
interface CommentType {
  id: number;
  username: string;
  content: string;
}

const Post = ({ post }: Props) => {
  const [content, setContent] = useState(
    post.content.length > 80
      ? post.content.slice(0, 80) + "...more"
      : post.content
  );

  const handleDisplayAllContent = () => {
    setContent(post.content);
  };

  return (
    <View style={{ marginTop: 10 }}>
      <View style={{ width: "100%", height: 1, backgroundColor: "#D2D2D2" }} />
      <PostHeader post={post} />
      <View>
        <Image
          source={{ uri: post.postImage[0] }}
          style={{ width: "100%", height: 400, resizeMode: "cover" }}
        />
      </View>
      {/*  footer*/}
      <View style={{ marginLeft: 10 }}>
        {/*  icon part */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 5,
            justifyContent: "space-between",
          }}
        >
          {/*  3 icons */}
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <AntDesign
                name="hearto"
                size={28}
                color="black"
                style={[styles.icon, { marginLeft: 0 }]}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather
                name="message-circle"
                size={28}
                color="black"
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Octicons
                name="paper-airplane"
                size={28}
                color="black"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          {/*  book mark icon */}
          <TouchableOpacity>
            <FontAwesome5
              name="bookmark"
              size={28}
              color="black"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 5 }}>
          <Text style={{ marginBottom: 5, fontWeight: "bold" }}>
            {post.like} likes
          </Text>
          <TouchableOpacity onPress={handleDisplayAllContent} activeOpacity={1}>
            <Text>
              <Text style={{ fontWeight: "bold" }}>{post.username + "  "}</Text>
              {content}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 3 }}>
          {!!post.comments.length && (
            <Text style={{ marginBottom: 3, color: "#999" }}>
              view all {post.comments.length} comments
            </Text>
          )}
          {post.comments.slice(0, 2).map((comment: CommentType) => (
            <Text key={comment.id}>
              <Text style={{ fontWeight: "bold" }}>
                {comment.username + " "}
              </Text>
              {comment.content}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginLeft: 10,
  },
});

const PostHeader = ({ post }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        margin: 8,
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <ProfileImage uri={post.userImage} size={35} border={0} />
        <Text style={{ marginLeft: 5 }}>{post.username}</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Entypo name="dots-three-horizontal" size={24} color="#555" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Post;
