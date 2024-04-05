import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, } from 'react-native';
import { FontAwesome, AntDesign, Feather } from "@expo/vector-icons";

export default function DangKy({ navigation }) {
  return (

    <View style={styles.container}>
      <ScrollView style={styles.scl1}>
        <View style={styles.c1}>
          <View style={styles.pnl1}>
            <Text style={styles.lbl1}>HELP CARE!</Text>
          </View>

          <View style={styles.pnl2}>

            <View style={styles.form1}>
              <TextInput
                style={styles.txt1}
                placeholder="Họ và tên"
              />
              <View style={styles.i1}>
                <AntDesign name="user" size={30} color="gray" />
              </View>
            </View>

            <View style={styles.form1}>
              <TextInput
                style={styles.txt1}
                placeholder="Số điện thoại"
              />
              <View style={styles.i1}>
                <AntDesign name="phone" size={30} color="gray" />
              </View>
            </View>

            <View style={styles.form1}>
              <TextInput
                style={styles.txt1}
                placeholder="Địa chỉ"
              />
              <View style={styles.i1}>
                <Feather name="map-pin" size={30} color="gray" />
              </View>
            </View>

            <View style={styles.form1}>
              <TextInput
                style={styles.txt1}
                placeholder="Mật khẩu"
                secureTextEntry={true}
              />
              <View style={styles.i1}>
                <AntDesign name="lock" size={30} color="gray" />
              </View>
            </View>

            <View style={styles.form1}>
              <TextInput
                style={styles.txt1}
                placeholder="Nhập lại mật khẩu"
                secureTextEntry={true}
              />
              <View style={styles.i1}>
                <AntDesign name="lock" size={30} color="gray" />
              </View>
            </View>

            <View style={styles.c2}>
              <TouchableOpacity style={styles.btn1} >
                <Text style={styles.lbl3}>Đăng ký</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate("DangNhap")}>
                <Text style={styles.lbl6}>Đăng nhập</Text>
                <AntDesign name="arrowright" size={20} color="#2baf66" />
              </TouchableOpacity>
            </View>


          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View >


  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  scl1: {
    flex: 1,
  },

  c1: {
    height: 900,
  },

  pnl1: {
    alignItems: "center",
    justifyContent: "center",
    height: 200,
  },
  lbl1: {
    fontSize: 40,
    color: "#2baf66",
    fontWeight: "bold",
  },

  pnl2: {
    flex: 700,
  },
  form1: {
    height: 60,
    width: "80%",
    marginLeft: "10%",
    marginBottom: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  txt1: {
    paddingLeft: 10,
    fontSize: 20,
    width: "85%",
  },
  i1: {
    resizeMode: "center",
    width: "15%",
  },

  pnl4: {
    height: 30,
    width: '80%',
    marginLeft: "10%",
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  lbl2: {
    fontSize: 20,
    color: "#2baf66",
  },

  btn1: {
    backgroundColor: "#2baf66",
    height: 60,
    width: "37%",
    marginLeft: "10%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },

  btn2: {
    height: 60,
    width: "37%",
    marginLeft: "7%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    flexDirection: 'row',
  },

  c2: {
    flexDirection: 'row',
  },


  lbl3: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },

  lbl6: {
    fontSize: 15,
    color: "#2baf66",
    fontWeight: "bold",
    marginRight: 10,
  },

  pnl5: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  lbl4: {
    fontSize: 20,
  },
  lbl5: {
    fontSize: 20,
    color: "#2baf66",
    marginLeft: 10,
  },
});
