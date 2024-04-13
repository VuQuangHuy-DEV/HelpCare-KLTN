import React, { useEffect, useState, useCallback } from "react";
import { Button, ScrollView, SafeAreaView, TouchableOpacity, View, TextInput, StatusBar } from "react-native";
import axios from "axios";
import BaiThue from "./BaiThue";

//config
import { API_ROOT } from "../../../config-global";
import { PRIMARY } from "../../../assets/style/style-global";

const API_LIST_BAI = API_ROOT + "booking/posts/";

export default function BaiThueS({ navigation }) {
  const [dsbaiDang, setDSBaiDang] = useState([]);
  const [searchText, setSearchText] = useState('');

  const getAllDSBaiDang = useCallback(async () => {
    try {
      const response = await axios.get(API_LIST_BAI);
      const data = response.data.data;
      setDSBaiDang(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getAllDSBaiDang();
    });

    return unsubscribe;
  }, [navigation, getAllDSBaiDang]);

  const handleDuyet = (id) => {
    console.log("Đã duyệt bài đăng có ID:", id);
  };

  const handleHuy = (id) => {
    console.log("Đã hủy bài đăng có ID:", id);
  };

  const handleCreate = () => {
    navigation.navigate("Create");
  };

  const handleDetail = (id) => {
    console.log("Da click vao bai post co id " + id);
    navigation.navigate("Detail", {
      idpost: id,
    });
  };

  const handleSearch = () => {
    console.log("Đã tìm kiếm với từ khóa:", searchText);
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
        <Button onPress={handleCreate} title="Bài viết mới" color={PRIMARY.main} />
        <Button onPress={handleCreate} title="Bài viết của bạn" color={PRIMARY.main} />
      </View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, borderRadius:5 }}
        onChangeText={text => setSearchText(text)}
        value={searchText}
        placeholder="Nhập từ khóa tìm kiếm"
      />
      <Button onPress={handleSearch} title="Tìm kiếm" color={PRIMARY.main} />
      <StatusBar/>
      
      <ScrollView>
        {dsbaiDang.map((baidang) => (
          <TouchableOpacity key={baidang.id} onPress={() => handleDetail(baidang.id)}>
            <BaiThue baidang={baidang} onDuyet={() => handleDuyet(baidang.id)} onHuy={() => handleHuy(baidang.id)} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
