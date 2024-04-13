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
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-swiper";

import { PRIMARY } from "../assets/style/style-global";

const { width } = Dimensions.get("window");

const imagesList = [
  "https://file3.qdnd.vn/data/images/0/2023/05/03/vuhuyen/khanhphan.jpg",
  "https://file3.qdnd.vn/data/images/0/2023/05/03/vuhuyen/khanhphan.jpg",
  "https://file3.qdnd.vn/data/images/0/2023/05/03/vuhuyen/khanhphan.jpg",
  "https://file3.qdnd.vn/data/images/0/2023/05/03/vuhuyen/khanhphan.jpg",
];

const services = [
  { id: 1, name: "Dọn dẹp định ki ", icon: require("../assets/imgs/donnha-icon.png"), route: "DonDep" },
  { id: 2, name: "Trông em bé", icon: require("../assets/imgs/trongtre-icon.png"), route: "TrongEmBe" },
  { id: 3, name: "Giúp việc theo tháng", icon: require("../assets/imgs/repeat-icon.png"), route: "GiupViecThang" },
];

const additionalServices = [
  { id: 1, name: "Dọn dẹp nhà", icon: require("../assets/imgs/donnha-icon.png"), route: "DonDepNha" },
  { id: 2, name: "Vệ sinh máy giặt", icon: require("../assets/imgs/maygiat-icon.png"), route: "VeSinhMayGiat" },
  { id: 3, name: "Nấu ăn", icon: require("../assets/imgs/nauan-icon.png"), route: "NauAn" },
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
              <Text style={styles.slideText}></Text>
            </ImageBackground>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const ServiceItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(item.route)} style={styles.serviceItem}>
      <View style={styles.serviceIconContainer}>
        <ImageBackground
          source={item.icon}
          style={styles.serviceIcon}
          resizeMode="cover"
        />
        <Text style={styles.serviceName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const AdditionalServiceItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(item.route)} style={styles.additionalServiceItem}>
      <View style={styles.additionalServiceIconContainer}>
        <ImageBackground
          source={item.icon}
          style={styles.additionalServiceIcon}
          resizeMode="cover"
        />
        <Text style={styles.additionalServiceName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const TrangChuTab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Xin chào, chúc bạn một ngày tốt lành
        </Text>
      </View>
      <Slideshow images={imagesList} />
      <Text style={styles.categoryTitle}>Định kỳ</Text>
      <FlatList
        data={services}
        renderItem={({ item }) => <ServiceItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        contentContainerStyle={styles.servicesContainer}
      />
      <Text style={styles.additionalServicesTitle}>Dịch vụ lẻ</Text>
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
    marginBottom: 8,
  },
  headerText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
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
    height: 200,
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

  nextPrevButtonText: {
    color: "#ffffff",
    fontSize: 50,
  },
  servicesContainer: {
    paddingHorizontal: 5,
  },
  additionalServicesContainer: {
    paddingHorizontal: 5,
    color: PRIMARY.main,
  },
  serviceItem: {
    width: 115,
    height: 115,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: PRIMARY.main,
    borderRadius: 60,
    elevation: 5,
  },
  additionalServiceItem: {
    width: 115,
    height: 115,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: PRIMARY.main,
    borderRadius: 60,
    elevation: 5,
  },
  serviceIconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  additionalServiceIconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  serviceIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8, // Độ mờ
  },
  additionalServiceIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8, // Độ mờ
  },
  serviceName: {
    color: PRIMARY.main,
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
  additionalServiceName: {
    color: PRIMARY.main,
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default TrangChuTab;
