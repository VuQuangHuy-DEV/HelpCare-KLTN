import React from "react";

import { useState, useEffect } from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
//config
import { API_ROOT } from "../../config-global";
//axios
import axios from "axios";



export default  ChiTietBaiTimViec = ({ route }) => {
  // Lấy dữ liệu bài đăng từ route
  const { idpost } = route.params;

  const API_CHI_TIET =
  API_ROOT + `rental/post/detail/${idpost}/`;
  const [post, setPost] = useState();

  useEffect(() => {
    const getDetailPost = async () => {
      try {
        const response = await axios.get(API_CHI_TIET);
        setPost(response.data.data);
      
      } catch (error) {
        console.log(error);
      }
    };
    getDetailPost();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: "https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/3-8.png",
        }}
        style={styles.image}
      />
      <View style={styles.content}>
      <Text style={styles.title}>{idpost}</Text>
        <Text style={styles.title}>{post ? post.tieu_de : "Loading..."}</Text>
        <Text style={styles.description}>
          {post ? post.chi_tiet : "Loading..."}
        </Text>
        <Text style={styles.salary}>
          Salary: {post ? post.salary : "Loading..."}
        </Text>
        <Text style={styles.location}>
          Location: {post ? post.location : "Loading..."}
        </Text>
        <Text style={styles.date}>
          Posted on: {post ? post.thoi_gian_dang : "Loading..."}
        </Text>
        <Text style={styles.date}>
          Posted on: {post ? post.ngay_khoi_tao : "Loading..."}
        </Text>


        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  salary: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: "#666",
  },
});

