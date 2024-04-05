import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
} from "react-native";

import Swiper from "react-native-swiper";

import DangBai from "../components/DangBai";
import { PRIMARY } from "../assets/style/style-global";
imagesList = [
  "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhi-1--Nang-Tre.jpg",
  "https://file3.qdnd.vn/data/images/0/2023/05/03/vuhuyen/khanhphan.jpg",
  "https://file3.qdnd.vn/data/images/0/2023/05/03/vuhuyen/khanhphan.jpg",
  "",
];

const Slideshow = ({ images }) => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        autoplay={true}
        autoplayTimeout={3}
        loop={true}
        paginationStyle={{ bottom: 10 }}
        nextButton={<Text style={{ color: "white" }}>›</Text>}
        prevButton={<Text style={{ color: "white" }}>‹</Text>}
      >
        {images.map((image, index) => (
          <View style={styles.slide} key={index}>
            <Image
              source={{
                uri: "https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/3-8.png",
              }}
              style={styles.image}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const { width } = Dimensions.get("window");

const TrangChuTab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerWelcome}>
          {" "}
          Xin Chào HUY , chúc bạn một ngày tốt lành
        </Text>
      </View>
      <Slideshow images={imagesList} styles={styles.slider} />
      <Text>Giúp việc</Text>

      {/* <View style={styles.post}>
        <Text>Bài thue</Text>
        <DangBai />
      </View> */}

      <TouchableOpacity style={styles.jobItem}>
        <Text style={styles.jobTitle}>Công ty DEF tìm Kiến trúc sư</Text>
        <Text style={styles.jobCompany}>Công ty DEF</Text>
        <Text style={styles.jobLocation}>Đà Nẵng</Text>
      </TouchableOpacity>
      {/* Thêm các mục công việc khác */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginVertical: 5,
  },
  searchInput: {
    height: 40,
    borderColor: "#2baf66",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  jobItem: {
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  jobCompany: {
    fontSize: 16,
    marginBottom: 3,
  },
  jobLocation: {
    fontSize: 14,
  },
  post: {
    width: "auto",
    height: 500,
  },
  header: {
    backgroundColor: PRIMARY.main,
    color: "#fff",
    height: 50,
    display: "flex",
    justifyContent: "center",
  },
  headerWelcome: {
    color: "#fff",
    fontSize: 18,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
    height: 100,
  },
  image: {
    width: width,
    height: 100,
    flex: 1,
  },
  slider: {
    width: 700,
    height: 200,
    backgroundColor: "blue",
  },
});

export default TrangChuTab;
