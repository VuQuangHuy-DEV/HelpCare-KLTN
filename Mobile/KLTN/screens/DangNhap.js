import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, } from 'react-native';
import { FontAwesome, AntDesign } from "@expo/vector-icons";

export default function DangNhap({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.pnl1}>
        <Text style={styles.lbl1}>HELP CARE!</Text>
      </View>

      <View style={styles.pnl2}>
        <View style={styles.form1}>
          <TextInput
            style={styles.txt1}
            placeholder="Số điện thoại"
          />
          <View style={styles.i1}>
            <AntDesign name="phone" size={30} color="gray" />
          </View>
        </View>

        <View style={styles.form2}>
          <TextInput
            style={styles.txt1}
            placeholder="Mật khẩu"
            secureTextEntry={true}
          />
          <View style={styles.i1}>
          <AntDesign name="lock" size={30} color="gray" />
          </View>
        </View>

        <View style={styles.pnl4} onPress={() => navigation.navigate("OTP")}>
          <Text style={styles.lbl2}>Quên mật khẩu ?</Text>
        </View>

        <TouchableOpacity style={styles.btn1} >
          <Text style={styles.lbl3}>Đăng nhập</Text>
        </TouchableOpacity>

        <View style={styles.pnl5}>
          <Text style={styles.lbl4}>Bạn chưa có tài khoản?</Text>
          <Text style={styles.lbl5} onPress={() => navigation.navigate("DangKy")} >Đăng ký</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  pnl1: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.3,
  },
  lbl1: {
    fontSize: 40,
    color: "#2baf66",
    fontWeight: "bold",
  },

  pnl2: {
    flex: 0.7,
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
  form2: {
    height: 60,
    width: "80%",
    marginLeft: "10%",
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
    width: "80%",
    marginLeft: "10%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  lbl3: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
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
