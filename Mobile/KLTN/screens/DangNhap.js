import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import axios from 'axios';

export default function DangNhap({ navigation }) {
    const [phone_number, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const dangNhap = () => {
        axios
            .post("https://vuquanghuydev.pythonanywhere.com/api/v1/auth/login/", {
                phone_number: phone_number,
                password: password,
            })
            .then((response) => {
                // 
                console.log(response.data);
                // 
                if (response.data.message === "Login successful") {
                    console.log("Đăng nhập thành công");
                    navigation.navigate("DatDichVu");
                }
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    // Truy cập thông tin lỗi từ API
                    const { message } = error.response.data;
                    console.error("Lỗi API:", error.response.data);

                    if (message === "Invalid phone number or password") {
                        console.log("Sai mật khẩu hoặc sai tài khoản");
                    } if (message === "Missing required fields") {
                        console.log("Điền thiếu thông tin");
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
            <View style={styles.header}>
                <Text style={styles.t1}>Đăng nhập</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.t2}>Số điện thoại</Text>
                <View style={styles.t3}>
                    <TextInput
                        style={styles.t5}
                        onChangeText={(phone_number) => setPhone(phone_number)}
                        value={phone_number}
                        placeholder="Nhập số điện thoại"
                    />
                </View>
                <Text style={styles.t2}>Nhập mật khẩu</Text>
                <View style={styles.t3}>
                    <TextInput
                        style={styles.t5}
                        onChangeText={(password) => setPassword(password)}
                        value={password}
                        placeholder="Nhập mật khẩu"
                        secureTextEntry={true}
                    />
                </View>
                <Text style={styles.t4} onPress={() => navigation.navigate("Otp")}>Quên mật khẩu ?</Text>
                <TouchableOpacity style={styles.b1} onPress={dangNhap}>
                    <Text style={styles.b1_1}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>
                <View style={styles.c1}>
                    <Text style={styles.t6} >Hoặc bạn có thể đăng ký dưới đây</Text>
                    <Text style={styles.t7} onPress={() => navigation.navigate("DangKy")}>ĐĂNG KÝ</Text>
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
    header: {
        alignItems: 'center',
        flex: 0.2,
    },
    body: {
        flex: 0.8,
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
        marginTop: 20,
        marginBottom: 80,
    },
    t5: {
        marginTop: 20,
        fontSize: 20,
    },
    t7: {
        paddingTop: 10,
        fontSize: 15,
        color: '#FFBF67',
    },
    // custom component
    c1: {
        marginTop: 130,
        alignItems: 'center',
    },
    // custom button
    b1: {
        backgroundColor: '#FFBF67',
        height: 60,
        marginBottom: 20,
        width: '80%',
        marginLeft: '10%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    b1_1: {
        fontSize: 20,
        color: 'white',
    },
});
