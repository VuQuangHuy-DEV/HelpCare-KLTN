import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import thư viện điều hướng

import Swiper from "react-native-swiper";

import { PRIMARY } from "../assets/style/style-global";

const { width } = Dimensions.get("window");

const imagesList = [
  "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhi-1--Nang-Tre.jpg",
  "https://file3.qdnd.vn/data/images/0/2023/05/03/vuhuyen/khanhphan.jpg",
  "https://file3.qdnd.vn/data/images/0/2023/05/03/vuhuyen/khanhphan.jpg",
  "https://file3.qdnd.vn/data/images/0/2023/05/03/vuhuyen/khanhphan.jpg",
];

const services = [
  { id: 1, name: "Dọn dẹp hàng tuần", icon: require("../assets/avatar.png"), route: "DonDep" },
  { id: 2, name: "Trông em bé", icon: require("../assets/avatar.png"), route: "TrongEmBe" },
  { id: 3, name: "Giúp việc theo tháng", icon: require("../assets/avatar.png"), route: "GiupViecThang" },
];

const additionalServices = [
  { id: 1, name: "Dọn dẹp nhà", icon: require("../assets/avatar.png"), route: "DonDepNha" },
  { id: 2, name: "Vệ sinh máy giặt", icon: require("../assets/avatar.png"), route: "VeSinhMayGiat" },
  { id: 3, name: "Nấu ăn", icon: require("../assets/avatar.png"), route: "NauAn" },
];

const Slideshow = ({ images }) => {
  return (
    <View style={styles.sliderContainer}>
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        autoplay={true}
        autoplayTimeout={4}
        loop={true}
        paginationStyle={{ bottom: 10 }}
        nextButton={<Text style={styles.nextPrevButtonText}>›</Text>}
        prevButton={<Text style={styles.nextPrevButtonText}>‹</Text>}
      >
        {images.map((image, index) => (
          <View style={styles.slide} key={index}>
            <ImageBackground
              source={{ uri: image }}
              style={styles.image}
              resizeMode="cover"
            >
              <Text style={styles.slideText}>Slide {index + 1}</Text>
            </ImageBackground>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const ServiceItem = ({ item }) => {
  const navigation = useNavigation(); // Lấy đối tượng điều hướng từ hook useNavigation
  return (
    <TouchableOpacity onPress={() => navigation.navigate(item.route)} style={styles.serviceItem}>
      <ImageBackground
        source={item.icon}
        style={styles.serviceIcon}
        resizeMode="cover"
      >
        <Text style={styles.serviceName}>{item.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const AdditionalServiceItem = ({ item }) => {
  const navigation = useNavigation(); // Lấy đối tượng điều hướng từ hook useNavigation
  return (
    <TouchableOpacity onPress={() => navigation.navigate(item.route)} style={styles.additionalServiceItem}>
      <ImageBackground
        source={item.icon}
        style={styles.additionalServiceIcon}
        resizeMode="cover"
      >
        <Text style={styles.additionalServiceName}>{item.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const TrangChuTab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Xin chào HUY, chúc bạn một ngày tốt lành
        </Text>
      </View>
      <Slideshow images={imagesList} />
      <Text style={styles.categoryTitle}>Giúp việc</Text>
      <FlatList
        data={services}
        renderItem={({ item }) => <ServiceItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        contentContainerStyle={styles.servicesContainer}
      />
      <Text style={styles.additionalServicesTitle}>Dịch vụ thẻ</Text>
      <FlatList
        data={additionalServices}
        renderItem={({ item }) => <AdditionalServiceItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        contentContainerStyle={styles.additionalServicesContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginVertical: 5,
  },
  header: {
    backgroundColor: PRIMARY.main,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    color: "#ffffff",
    fontSize: 18,
  },
  categoryTitle: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  additionalServicesTitle: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  sliderContainer: {
    height: 200, // Chiều cao cố định của slider
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  slideText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  nextPrevButtonText: {
    color: "#ffffff",
    fontSize: 50,
  },
  servicesContainer: {
    paddingHorizontal: 10,
  },
  additionalServicesContainer: {
    paddingHorizontal: 10,
  },
  serviceItem: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: PRIMARY.main,
    borderRadius: 50,
    backgroundColor: "#fff",
    elevation: 5,
  },
  additionalServiceItem: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: PRIMARY.main,
    borderRadius: 50,
    backgroundColor: "#fff",
    elevation: 5,
  },
  serviceIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  additionalServiceIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  serviceName: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
  additionalServiceName: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default TrangChuTab;
