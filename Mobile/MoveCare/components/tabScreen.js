import React from "react";
import { View, Image, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import DsDichVu from "../components/DatDichVu/DsDichVu";

import LichSu from "../components/LichSu";
import TrangChuTab from "../components/TrangChuTab";
import TrangCaNhan from "./ThongTin/TrangCaNhan";
import PostStackNavigator from "./BaiViet/Post";
import TaiKhoanStack from "./ThongTin/TaiKhoanStack";
import ChatStack from "./Chat/chatStack";

//Thông Báo
import StackThongBao from "./ThongBao/DSThongBao";

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Trang Chủ"
      tabBarOptions={{
        activeTintColor: "#2baf66",
    
      
      }}
      options={{
        headerLeft: null, // Ngăn chặn nút quay trở lại ở màn hình chính
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "DsDichVu":
              iconName = focused ? "cart" : "cart-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            case "Bài Viết":
              iconName = focused ? "create" : "create-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            case "Bài Viêt":
              iconName = focused ? "create" : "create-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            case "Lịch sử":
              return (
                <Ionicons
                  name={focused ? "reader-outline" : "receipt-outline"}
                  size={size}
                  color={color}
                />
              );
            case "Trang Chủ":
              iconName = focused ? "home" : "home-outline";
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                  backgroundColor="white"
                  borderColor="red"
                  padding="5" // Padding để icon không chạm vào viền
                  margin="10"
                />
              );
            case "Đăng Bài":
              iconName = focused ? "create" : "create-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            case "Thông tin":
              iconName = "person-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            case "Thông báo":
              iconName = focused
                ? "notifications-circle-outline"
                : "notifications-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            case "Nhắn tin":
              iconName = focused
              ? "chatbubble-ellipses-outline"
                : "chatbubble-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen
        name="Lịch sử"
        component={LichSu}
        options={{
          headerLeft: null, // Ngăn chặn nút quay trở lại ở màn hình chính
        }}
      />
      <Tab.Screen
        name="DsDichVu"
        component={DsDichVu}
        options={{
          headerLeft: null, // Ngăn chặn nút quay trở lại ở màn hình chính
        }}
      />
      <Tab.Screen name="Thông báo" component={StackThongBao} />
      <Tab.Screen
        name="Trang Chủ"
        component={TrangChuTab}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  borderColor: "#C8FACD",
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  top: -15,
                  borderWidth: 1,
                  paddingVertical: 5,
                  paddingHorizontal: 2,
                  backgroundColor: { focused } ? "#C8FACD" : "#C8FACD",
                }}
              >
                <Image
                  source={require("../assets/favicon-32x32.png")} // Đường dẫn đến hình ảnh
                  style={{ width: 37, height: 37 }} // Kích thước của hình ảnh
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen name="Bài Viết" component={PostStackNavigator} />
      <Tab.Screen name="Nhắn tin" component={ChatStack} />
      <Tab.Screen name="Thông tin" component={TaiKhoanStack} />
    </Tab.Navigator>
  );
};

export default TabScreen;
