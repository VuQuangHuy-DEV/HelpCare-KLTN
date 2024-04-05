import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ChiTietTB from "./ChiTietTB";

const DSThongBao = () => {
  const [notifications, setNotifications] = useState([
    { id: "1", title: "Thông báo 1", description: "Mô tả ngắn gọn 1", read: true },
    { id: "2", title: "Thông báo 2", description: "Mô tả ngắn gọn 2", read: false },
    { id: "3", title: "Thông báo 3", description: "Mô tả ngắn gọn 3", read: false },
    // Thêm các thông báo khác tại đây
  ]);

  const navigation = useNavigation();

  const handleDetail = (id) => {
    console.log("Da click vao bai post co id " + id);
    navigation.navigate("ChiTietTB", { idpost: id }); // Navigate đến màn hình ScreenB trong cùng một Stack Navigator
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Danh sách thông báo</Text>
      <ScrollView>
        {notifications.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.notificationItem,
              { backgroundColor: item.read ? "#e0e0e0" : "#ffffff" },
            ]}
            onPress={() => handleDetail(item.id)}
          >
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationDescription}>{item.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const Stack = createStackNavigator();
const StackThongBao = () => {
  return (
    <Stack.Navigator initialRouteName="DSThongBao">
      <Stack.Screen name="DSThongBao" component={DSThongBao}   options={{headerTitle: 'Thông báo', headerShown: false }} />
      <Stack.Screen name="ChiTietTB" component={ChiTietTB}  options={{headerTitle: ''}}  />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  notificationItem: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  notificationDescription: {
    fontSize: 14,
  },
});

export default StackThongBao;
