import React from "react";
import { TouchableOpacity } from "react-native";
import { Touchable } from "react-native";
import { View, Text, Image, StyleSheet,SafeAreaView } from "react-native";

export const ThanhToanMM = () => {
  // Generate your QR code image URL or import it from a source

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan the QR Code to Make Payment</Text>
      <Text style={styles.title}>Vũ Quang Huy</Text>
      <Text style={styles.title}>0984218xxx</Text>
      <Text style={styles.title}>Số tiền: 2000 đ </Text>


      <Image
        source={require("../../assets/payment/QR.png")}
        style={styles.qrCode}
        resizeMode="contain"
      />

      <TouchableOpacity
      onPress>

        <Text style={{backgroundColor:"red"}}>Đặt </Text>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  qrCode: {
    width: 200,
    height: 200,
  },
});
