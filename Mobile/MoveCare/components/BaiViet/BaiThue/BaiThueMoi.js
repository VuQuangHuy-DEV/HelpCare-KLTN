import { View, Text } from 'react-native'
import React, { useEffect, useState } from "react";
import {  ScrollView, SafeAreaView,StyleSheet } from "react-native";
import {

    Button,
    TextInput,
    Divider,
    Avatar,
    Checkbox,
  } from "react-native-paper";

import * as ImagePicker from "expo-image-picker";
import { DatePickerInput } from "react-native-paper-dates";
import { SelectList } from "react-native-dropdown-select-list";
import { TimePickerModal } from "react-native-paper-dates";
import { Image } from "react-native";


export default function BaiThueMoi() {
    const [inputDate_Start, setInputDate_Start] = React.useState(undefined);
    const [inputDate_End, setInputDate_End] = React.useState(undefined);
    const [pickedImage, setPickedImage] = useState(null);
    const [visible, setVisible] = React.useState(false);
    const [visibleTimeStart, setVisibleTimeStart] = React.useState(false);
    const [visibleTimeEnd, setVisibleTimeEnd] = React.useState(false);
    const [timeStartWork, setTimeStartWork] = React.useState("");
    const [timeEndWork, setTimeEndWork] = React.useState("");
    const [checkBoxDonNha, setCheckBoxDonNha] = React.useState(false);
    const [checkBoxEmBe, setCheckBoxEmBe] = React.useState(false);
    const [checkBoxNguoiGia, setCheckBoxNguoiGia] = React.useState(false);
    const [tongKetCheckBox, setTongKetCheckBox] = React.useState([]);
    const onDismiss_Start = React.useCallback(() => {
        setVisibleTimeStart(false);
      }, [setVisibleTimeStart]);
      const onDismiss_End = React.useCallback(() => {
        setVisibleTimeEnd(false);
      }, [setVisibleTimeEnd]);
      const onConfirm_Start = React.useCallback(
        ({ hours, minutes }) => {
          setVisibleTimeStart(false);
          const result = `${hours}:${minutes}`;
          setTimeStartWork(result);
          // console.log({ hours, minutes });
        },
        [setVisibleTimeStart]
      );
      const onConfirm_End = React.useCallback(
        ({ hours, minutes }) => {
          setVisibleTimeEnd(false);
          const result = `${hours}:${minutes}`;
          setTimeEndWork(result);
          // console.log({ hours, minutes });
        },
        [setVisibleTimeEnd]
      );
      const [selected, setSelected] = React.useState("Toàn phần");
      const [selected_ThanhToan, setSelected_ThanhToan] =
        React.useState("Thu tiền tại nhà");
      const showModal = () => setVisible(true);
      const hideModal = () => setVisible(false);
      const data = [
        { key: "Toàn phần", value: "Toàn phần" },
        { key: "Theo giờ", value: "Theo giờ" },
      ];
      const data_combobox_ThanhToan = [
        { key: "Thu tiền tại nhà", value: "Thu tiền tại nhà" },
        { key: "Chuyển khoản", value: "Chuyển khoản" },
      ];
      const startDate = new Date();
      const endDate = new Date(2029, 12, 31);
    
    
      const handleCheckboxChange = (label, checked) => {
        const updatedTongKetCheckBox = checked
          ? [...tongKetCheckBox, label] // Add label if checked
          : tongKetCheckBox.filter((item) => item !== label); // Remove label if unchecked
    
        setTongKetCheckBox(updatedTongKetCheckBox);
    
        // Update individual checkbox state for conditional rendering (optional)
        if (label === "Dọn nhà") {
          setCheckBoxDonNha(checked);
        } else if (label === "Trông em bé") {
          setCheckBoxEmBe(checked);
        } else {
          setCheckBoxNguoiGia(checked);
        }
      };
      // console.log("Time start work", timeStartWork);
      // console.log("Time end work", timeEndWork);
      // console.log("Selected", selected);
      // console.log("Check Box :", tongKetCheckBox);
      // console.log("Check Box don nha :", checkBoxDonNha);
      // console.log("hinh thuc thanh toan :", selected_ThanhToan);
const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        // Lưu trữ ảnh được chọn
        setPickedImage(result.uri);
      }
    } catch (error) {
      console.error(error);
      // Xử lý lỗi
    }
  };
  return (
    <View>
      <ScrollView>
            <Text variant="headlineLarge">Đăng bài</Text>
            <Divider bold={true} />
            {/* Form nhập liệu */}
            <Text variant="bodyLarge">Họ và tên</Text>
            <TextInput
              label="Họ tên"
              placeholder="Họ tên"
              style={styles.textInput}
            />
            <Divider bold horizontalInset />
            <Text variant="bodyLarge">Số điện thoại</Text>
            <TextInput
              label="Số điện thoại"
              placeholder="Số điện thoại"
              style={styles.textInput}
            />
            <Divider bold horizontalInset />
            {/* Hiển thị ảnh đã chọn */}
            {/* Tiêu đề */}
            <Text variant="bodyLarge">Ảnh đại diện</Text>
            {pickedImage ? (
              <Avatar.Image
                size={100}
                source={
                  pickedImage
                    ? { uri: pickedImage }
                    : require("../../../assets/avatar.png")
                }
                style={styles.avatar}
              />
            ) : (
              <Avatar.Image
                size={100}
                source={require("../../../assets/avatar.png")}
                style={styles.avatar}
              />
            )}
            <Divider bold horizontalInset />
            {/* Button chọn ảnh */}
            <Button
              mode="contained"
              onPress={pickImage}
              style={{ marginVertical: 10 }}
              title=' Chọn ảnh'
            >
             
            </Button>
            <Divider bold horizontalInset />
            <Text variant="bodyLarge">Lịch làm việc</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                margin: 10,
              }}
            >
              <DatePickerInput
                style={{ marginVertical: 5 }}
                locale="en"
                label="từ ngày"
                value={inputDate_Start}
                onChange={(d) => setInputDate_Start(d)}
                inputMode="end"
                validRange={{
                  startDate: startDate, // optional
                  endDate: endDate, // optional
                }}
                animationType="fade"
              />
              <DatePickerInput
                style={{ marginVertical: 5 }}
                locale="en"
                label="đến ngày"
                value={inputDate_End}
                onChange={(d) => setInputDate_End(d)}
                inputMode="end"
                validRange={{
                  startDate: startDate, // optional
                  endDate: endDate, // optional
                }}
                animationType="fade"
              />
            </View>

            <Divider bold horizontalInset />
            <View>
              <Text variant="bodyLarge">Giờ làm việc</Text>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                placeholder={selected}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginVertical: 12,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  disabled={selected === "Toàn phần" ? true : false}
                  style={{
                    backgroundColor: `${
                      selected === "Toàn phần" ? "#BBBBBB" : "#00CCFF"
                    }`,
                  }}
                  onPress={() => setVisibleTimeStart(true)}
                  uppercase={false}
                  mode="contained"

                >
                  {timeStartWork}
                </Button>

                <Text style={{ color: "red" }} variant="bodyLarge">
                  {" "}
                  :{" "}
                </Text>
                <Button
                  disabled={selected === "Toàn phần" ? true : false}
                  style={{
                    backgroundColor: `${
                      selected === "Toàn phần" ? "#BBBBBB" : "#CC99FF"
                    }`,
                  }}
                  onPress={() => setVisibleTimeEnd(true)}
                  uppercase={false}
                  mode="contained"
                >
                  {timeEndWork}
                </Button>
              </View>
              <TimePickerModal
                visible={visibleTimeStart}
                onDismiss={onDismiss_Start}
                onConfirm={onConfirm_Start}
                hours={12}
                minutes={14}
              />
              <TimePickerModal
                visible={visibleTimeEnd}
                onDismiss={onDismiss_End}
                onConfirm={onConfirm_End}
                hours={12}
                minutes={14}
              />
            </View>

            <Divider bold horizontalInset />
            <Text variant="bodyLarge">Mô tả</Text>
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Checkbox.Item
                label="Dọn nhà"
                status={checkBoxDonNha ? "checked" : "unchecked"}
                onPress={() => handleCheckboxChange("Dọn nhà", !checkBoxDonNha)}
              />
              <Checkbox.Item
                label="Trông em bé"
                status={checkBoxEmBe ? "checked" : "unchecked"}
                onPress={() =>
                  handleCheckboxChange("Trông em bé", !checkBoxEmBe)
                }
              />
              <Checkbox.Item
                label="Trông người già"
                status={checkBoxNguoiGia ? "checked" : "unchecked"}
                onPress={() =>
                  handleCheckboxChange("Trông người già", !checkBoxNguoiGia)
                }
              />
            </View>
            <Divider bold horizontalInset />
            <View>
              <Text variant="bodyLarge">Hình thức thanh toán</Text>
              <SelectList
                setSelected={(val) => setSelected_ThanhToan(val)}
                data={data_combobox_ThanhToan}
                save="value"
                placeholder={selected_ThanhToan}
              />
            </View>
            <Divider bold horizontalInset />
            <View style={{ marginTop: 12 }}>
              <Button
                mode="contained" // Hoặc style riêng cho button
                onPress={() => console.log("Đăng bài")}
              >
                Đăng bài
              </Button>
            </View>
          </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: "red",
      alignItems: "center",
      justifyContent: "center",
    },
    fab: {
      position: "absolute", // Đặt vị trí tuyệt đối
      bottom: 16, // Thay đổi vị trí theo ý muốn
      right: 16, // Thay đổi vị trí theo ý muốn
    },
  
    textInput: {
      marginVertical: 10,
      padding: 10,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: "#ccc",
    },
    avatar: {
      alignSelf: "center",
      marginBottom: 20,
    },
  });