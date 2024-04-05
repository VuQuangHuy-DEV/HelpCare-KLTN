import React, { useEffect, useState } from "react";
import { Button, ScrollView,SafeAreaView,TouchableOpacity } from "react-native";
import axios from "axios";
import BaiThue from "./BaiThue";

//config
import { API_ROOT } from "../../../config-global";
import { PRIMARY } from "../../../assets/style/style-global";

const API_LIST_BAI = API_ROOT + "rental/posts/";

export default  function BaiThueS({navigation}) {


  const [dsbaiDang, setDSBaiDang] = useState([]);

  useEffect(() => {
    const getAllDSBaiDang = async () => {
      try {
        const response = await axios.get(API_LIST_BAI);
        const data = response.data.data;
        setDSBaiDang(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllDSBaiDang();
  }, []);

  const handleDuyet = (id) => {
    // Xử lý logic duyệt bài đăng với ID
    console.log("Đã duyệt bài đăng có ID:", id);
  };

  const handleHuy = (id) => {
    // Xử lý logic hủy bài đăng với ID
    console.log("Đã hủy bài đăng có ID:", id);
  };
  const handleCreate = () => {
    // Xử lý logic hủy bài đăng với ID
    navigation.navigate("Create")
  };
  const handleDetail = (id) => {
    console.log("Da click vao bai post co id "+ id);
    navigation.navigate("Detail",{
      idpost : id
    }); // Navigate đến màn hình ScreenB trong cùng một Stack Navigator
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <Button onPress={handleCreate} title="Bài viết mới" color={PRIMARY.main} />
      <ScrollView>
        {dsbaiDang.map((baidang, index) => (
          <TouchableOpacity onPress={() => handleDetail(baidang.id)}>
            <BaiThue
              key={baidang.id}
              baidang={baidang}
              onDuyet={() => handleDuyet(baidang.id)}
              onHuy={() => handleHuy(baidang.id)}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}





