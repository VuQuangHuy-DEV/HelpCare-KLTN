import React from "react";
import { Image, Text, View,StyleSheet } from "react-native";
import { Chip, Button } from "react-native-paper";
import { Icon, MD3Colors } from "react-native-paper";

export default function BaiThue({ baidang, onDuyet, onHuy }) {
  return (
    <View
      key={baidang.id}
      style={{
        padding: 15,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10, // Độ cong của border
        margin: 5
      }}
    >
      <Image
          source={require("../../../assets/avatar.png")} // Đường dẫn đến hình ảnh
          style={styles.avatar} // Kích thước của hình ảnh
        />
      <View
        style={{
          flex: 1,
          marginRight: 10,
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
        
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: "black",
            height: 1,
          }}
        />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={styles.title}
          >
            Tên:{baidang.tieu_de}
          </Text>
          <Text
            style={{
              fontSize: 12,
            }}
          ></Text>
        </View>
        <Text
          style={{
            color: "black",
            fontSize: 12,
          }}
        >
          Số điện thoại: {baidang.phone}
        </Text>
        <View
          style={{
            flexDirection: "row",
            maxWidth: "70%",
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 12,
            }}
          >
            Từ ngày:{" "}
            <Chip mode="outlined" textStyle={{ fontSize: 11 }}>
              {baidang.work_day_start}
            </Chip>
          </Text>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            Đến ngày:{" "}
            <Chip mode="outlined" textStyle={{ fontSize: 11 }}>
              {baidang.work_day_end}
            </Chip>
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            maxWidth: "70%",
            marginHorizontal: 5,
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 12,
            }}
          >
            Giờ làm{" "}
            <Chip mode="outlined" textStyle={{ fontSize: 11 }}>
              {baidang.work_time_start}
            </Chip>
          </Text>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            Giờ về:{" "}
            <Chip mode="outlined" textStyle={{ fontSize: 11 }}>
              {baidang.work_time_end}
            </Chip>
          </Text>
        </View>
        <Text
          style={{
            color: "black",
            fontSize: 12,
          }}
        >
          Status duyệt:
          {baidang.status_duyet ? (
            <Icon
              source="check-outline"
              color={MD3Colors.secondary99}
              size={20}
            />
          ) : (
            <Icon
              source="comment-remove"
              color={MD3Colors.error50}
              size={20}
            />
          )}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 15,
            }}
          >
            Thanh toán:
          </Text>
          {
            <Chip mode="outlined" textStyle={{ fontSize: 11 }}>
              {baidang.hinh_thuc_thanh_toan}
            </Chip>
          }
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Button
            style={{ backgroundColor: "#00EE00" }}
            icon="text-box-check"
            mode="contained"
            onPress={onDuyet}
          >
            Duyệt
          </Button>
          <Button
            style={{
              backgroundColor: "#FF0000",
            }}
            icon="text-box-remove"
            mode="contained"
            onPress={onHuy}
          >
            Huỷ
          </Button>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2baf66",
   
  },
  title:{
    color: "black",
    fontSize: 15,
    fontWeight:"500"

  },


  avatar: {
    width: 120,
    height: 120,
    resizeMode: "contain",
   
    marginRight: 10,

    


    // Đảm bảo hình ảnh là hình tròn
  },
});
