import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { AntDesign, Feather } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

const ThongTinTaiKhoan = () => {
  const [avatarSource, setAvatarSource] = useState(null);
  const [hoTen, setHoTen] = useState('');
  const [soDienThoai, setSoDienThoai] = useState('');
  const [diaChi, setDiaChi] = useState('');


  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Quyền truy cập thư viện ảnh bị từ chối');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const { assets } = result;
      if (assets && assets.length > 0) {
        setAvatarSource(assets[0].uri);
      }
    }
  };

  const dangKy = () => {
    // Logic xử lý đăng ký tài khoản
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ height: 900 }}>
          <View style={styles.form}>
            <TouchableOpacity onPress={pickImage}>
              {avatarSource ? (
                <Image source={{ uri: avatarSource }} style={styles.avatar} />
              ) : (
                <View style={styles.avatarPlaceholder}>
                  <AntDesign name="user" size={40} color="gray" />
                  <Text>Chọn ảnh</Text>
                </View>
              )}
            </TouchableOpacity>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Họ và tên"
                value={hoTen}
                onChangeText={text => setHoTen(text)}
              />
              <AntDesign name="user" size={30} color="gray" style={styles.icon} />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Số điện thoại"
                value={soDienThoai}
                onChangeText={text => setSoDienThoai(text)}
              />
              <AntDesign name="phone" size={30} color="gray" style={styles.icon} />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Địa chỉ"
                value={diaChi}
                onChangeText={text => setDiaChi(text)}
              />
              <Feather name="map-pin" size={30} color="gray" style={styles.icon} />
            </View>
         
       
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={dangKy}>
                <Text style={styles.buttonText}>Chỉnh sửa thông tin</Text>
              </TouchableOpacity>
          
            </View>
      
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  form: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E1E1E1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    height: 60,
    width: "80%",
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    paddingLeft: 10,
    fontSize: 20,
    width: "85%",
  },
  icon: {
    width: "15%",
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2baf66",
    height: 60,
    width: "37%",
    marginLeft: "10%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginRight: 10,
  },
  editButton: {
    alignItems: 'center',
  },
  editButtonText: {
    color: "#2baf66",
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});

export default ThongTinTaiKhoan;
