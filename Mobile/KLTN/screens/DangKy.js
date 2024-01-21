import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import axios from 'axios';

export default function DangKy({ navigation }) {
    const [phone_number, setPhone] = useState('');
    const [password1, setPassword] = useState('');
    const [password2, setPassword1] = useState('');

    const dangKy = () => {

        // Gọi API đăng nhập bằng axios
        axios
            .post("https://vuquanghuydev.pythonanywhere.com/api/v1/auth/register/", {
                phone_number: phone_number,
                password1: password1,
                password2: password2,
            })
            .then((response) => {
                // 
                console.log(response.data);
                // 
                if (response.data.message === "Register successful") {
                    console.log("Đăng ký thành công");
                    navigation.navigate("DangNhap");
                }
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    // Truy cập thông tin lỗi từ API
                    const { message } = error.response.data;
                    console.error("Lỗi API:", error.response.data);

                    if (message === "User already exists") {
                        console.log("Số điện thoại này đã được đăng ký. Vui lòng sử dụng số điện thoại khác.");
                    } else if (message === "Missing required fields") {
                        console.log("Điền thiếu thông tin ");
                    } else if (message === "(1) The string supplied did not seem to be a phone number.") {
                        console.log("Số điện thoại phải là số");
                    } else if (message === "__str__ returned non-string (type NoneType)") {
                        console.log("Số điện thoại phải đủ 10 số và phải là số");
                    } else {
                        console.log("Lỗi khác:", message);
                    }
                } else {
                    console.error("Lỗi kết nối API:", error);
                    // Xử lý lỗi kết nối API nếu không có response.data
                }
            });
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.t1}>Đăng Ký</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.t2}>Họ và Tên</Text>
                    <View style={styles.t3}>
                        <TextInput
                            style={styles.t5}
                            // onChangeText={handleTextChange1}
                            // value={textValue}
                            placeholder="Điền họ và tên"
                        />
                    </View>
                    <Text style={styles.t2}>Địa chỉ</Text>
                    <View style={styles.t3}>
                        <TextInput
                            style={styles.t5}
                            // onChangeText={handleTextChange1}
                            // value={textValue}
                            placeholder="Điền địa chỉ"
                        />
                    </View>
                    <Text style={styles.t2}>Email</Text>
                    <View style={styles.t3}>
                        <TextInput
                            style={styles.t5}
                            placeholder="Điền email"
                        />
                    </View>
                    <Text style={styles.t2}>SĐT</Text>
                    <View style={styles.t3}>
                        <TextInput
                            style={styles.t5}
                            value={phone_number}
                            onChangeText={(phone_number) => setPhone(phone_number)}
                            placeholder="Điền số điện thoại"
                        />
                    </View>
                    <Text style={styles.t2}>Mật khẩu</Text>
                    <View style={styles.t3}>
                        <TextInput
                            style={styles.t5}
                            value={password1}
                            onChangeText={(password1) => setPassword(password1)}
                            placeholder="Điền mật khẩu"
                            secureTextEntry={true}
                        />
                    </View>
                    <Text style={styles.t2}>Nhập lại mật khẩu</Text>
                    <View style={styles.t3}>
                        <TextInput
                            style={styles.t5}
                            value={password2}
                            onChangeText={(password2) => setPassword1(password2)}
                            placeholder="Nhập lại mật khẩu"
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.c2} >
                        <TouchableOpacity style={styles.b1}>
                            <Text style={styles.b1_1} onPress={dangKy}>Đăng Ký</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.b2}>
                            <Text style={styles.b2_2} onPress={() => navigation.navigate("DangNhap")}>Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        alignItems: 'center',
        flex: 0.15,
    },
    body: {
        flex: 0.85,
    },
    // custom text
    t1: {
        fontSize: 40,
        marginTop: 50,
        color: '#FFBF67',
        fontWeight: 'bold',
    },
    t2: {
        paddingLeft: '10%',
        fontSize: 15,
        marginTop: 25,
    },
    t3: {
        height: 60,
        width: '80%',
        marginLeft: '10%',
        borderColor: '#FFBF67',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
    },
    t4: {
        paddingLeft: '65%',
        fontSize: 15,
        marginTop: 5,
        marginBottom: 80,
    },
    t5: {
        marginTop: 20,
        fontSize: 20,
    },
    t7: {
        paddingTop: 10,
    },
    // custom component
    c1: {
        marginTop: 180,
        alignItems: 'center',
    },
    c2: {
        width: '80%',
        marginLeft: '10%',
        marginTop: 100,
        flexDirection: 'row',
    },
    // custom button
    b1: {
        backgroundColor: '#FFBF67',
        height: 60,
        width: '40%',
        marginBottom: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    b2: {
        // backgroundColor: '#FFBF67',
        height: 60,
        width: '40%',
        marginBottom: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '20%',
    },
    b1_1: {
        fontSize: 20,
        color: 'white',
    },
    b2_2: {
        fontSize: 20,
        color: '#FFBF67',
    },
});
