import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { hotNumber } from "../../config-global";

const TrangCaNhan = ({ navigation }) => {
  const username = "John Doe";
  const accountInfo = "Thay đổi thông tin";
  const appVersion = "1.0.0";

  const handleLogout = () => {
    // Điều hướng trở lại màn hình Đăng nhập khi nhấn nút đăng xuất
    navigation.navigate("DangNhap");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/3-8.png",
          }}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.customerType}>Khách hàng thường</Text>
        </View>
      </View>
      <View style={styles.accountInfoContainer}>
        <Text style={styles.accountInfo}>{accountInfo}</Text>
      </View>

      <View style={styles.appVersionContainer}>
        <Text style={styles.appVersion}>Phiên bản: {appVersion}</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Text style={styles.footerText}>Cam kết của MOVE CARE</Text>
          <Image
            source={require("../../assets/icon/arrow-right.svg")} // Đặt đường dẫn đúng của biểu tượng mũi tên
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Text style={styles.footerText}>Điều khoản và dịch vụ sử dụng</Text>
          <Image
            source={require("../../assets/icon/arrow-right.svg")} // Đặt đường dẫn đúng của biểu tượng mũi tên
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Text style={styles.footerText}>Liên hệ: {hotNumber}</Text>
          <Image
            source={require("../../assets/icon/arrow-right.svg")} // Đặt đường dẫn đúng của biểu tượng mũi tên
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Đăng Xuất</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    marginLeft: 10,
  },
  username: {
    fontSize: 20,
  },
  customerType: {
    fontSize: 16,
    marginTop: 5,
  },
  accountInfoContainer: {
    marginBottom: 20,
  },
  accountInfo: {
    fontSize: 16,
  },
  logoutButton: {
    marginHorizontal:20,
    width: "130",
    backgroundColor: "#FF0000",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    marginTop:250

    
  },
  logoutButtonText: {
    fontSize: 16,
    color: "white",
  },
  appVersionContainer: {
    position: "absolute",
    bottom: 20,
  },
  appVersion: {
    fontSize: 12,
  },
  footer: {
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    paddingVertical: 10,
  },
  footerItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 16,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
});

export default TrangCaNhan;
