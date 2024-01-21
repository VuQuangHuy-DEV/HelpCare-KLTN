import { View, Pressable, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';


export default function DatDichVu() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.body}>
                <View style={styles.p1}>
                    <Text style={styles.t1}>Xin chào, Huy!</Text>
                </View >
                <View style={styles.p2}>
                    <Text style={styles.t2}>Chúc bạn một ngày tốt lành. Mời bạn đặt dịch vụ!</Text>
                </View>
                <Text style={styles.t3}>GIÚP VIỆC</Text>
                <View style={styles.c1}>
                    <View style={styles.c3}>
                        <View style={styles.items1}>
                            <View style={styles.img}></View>
                            <Text style={styles.t4}>Dùng lẻ</Text>
                            <Text style={styles.t5}>Giúp việc theo giờ, đặt khi có nhu cầu</Text>
                        </View>
                        <View style={styles.items1}>
                            <View style={styles.img}></View>
                            <Text style={styles.t4}>Định kỳ</Text>
                            <Text style={styles.t5}>Giúp việc theo giờ hàng tuần</Text>
                        </View>
                        <View style={styles.items1}>
                            <View style={styles.img}></View>
                            <Text style={styles.t4}>Tổng vệ sinh</Text>
                            <Text style={styles.t5}>Dụng cụ chuyên dụng, sạch từng khe kẽ</Text>
                        </View>
                    </View>
                    <View style={styles.c3}>
                        <View style={styles.items1}>
                            <View style={styles.img}></View>
                            <Text style={styles.t7}>Giúp việc nhà ở lại</Text>
                        </View>
                        <View style={styles.items1}>
                            <View style={styles.img}></View>
                            <Text style={styles.t7}>Giúp việc nhà sáng đến tối</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.t3}>DỊCH VỤ KHÁC</Text>
                <View style={styles.c2}>
                    <View style={styles.items1}>
                        <View style={styles.img}></View>
                        <Text style={styles.t7}>Giặt Sofa/ Đệm/ Thảm</Text>
                    </View>
                    <View style={styles.items1}>
                        <View style={styles.img}></View>
                        <Text style={styles.t7}>Vệ sinh máy giặt</Text>
                    </View>
                    <View style={styles.items1}>
                        <View style={styles.img}></View>
                        <Text style={styles.t7}>Vệ sinh máy lạnh</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.items3} >
                    <Text style={styles.t6}>Đặt dịch vụ</Text>
                </View>
                <View style={styles.items3}>
                    <Text style={styles.t6}>Lịch sử</Text>
                </View>
                <View style={styles.items3}>
                    <Text style={styles.t6}>Đơn hàng</Text>
                </View>
                <View style={styles.items3}>
                    <Text style={styles.t6}>Thông báo</Text>
                </View>
                <View style={styles.items3}>
                    <Text style={styles.t6}>Tài khoản</Text>
                </View>
            </View>
            <StatusBar style="auto" />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 0.88,
        backgroundColor: '#EEEEEE',
    },
    footer: {
        flex: 0.12,
        backgroundColor: '#EEEEEE',
        flexDirection: 'row',
    },
    p1: {
        height: 230,
        backgroundColor: '#FFBF67',
        // box shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.17,
        shadowRadius: 2.54,
        elevation: 3
    },
    t1: {
        color: 'white',
        fontSize: 25,
        paddingLeft: 20,
        paddingTop: 120,
    },
    p2: {
        backgroundColor: 'white',
        width: '90%',
        height: 90,
        marginLeft: '5%',
    },
    t2: {
        fontSize: 20,
        paddingVertical: 15,
        paddingLeft: 15,
    },
    t3: {
        marginLeft: '5%',
        fontSize: 20,
        paddingTop: 30,
        paddingBottom: 30,
    },
    c1: {
        backgroundColor: 'white',
        width: '90%',
        height: 350,
        marginLeft: '5%',
        flexDirection: 'column',
    },
    c2: {
        backgroundColor: 'white',
        width: '90%',
        height: 150,
        marginLeft: '5%',
        flexDirection: 'row',
    },
    c3: {
        height: '50%',
        width: '100%',
        flexDirection: 'row',

    },
    items1: {
        width: '33.33%',
        height: '100%',
        justifyContent: 'center',
    },
    items3: {
        width: '20%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    img: {
        width: '100%',
        height: '50%',
        backgroundColor: 'red',
    },
    t4: {
        width: '100%',
        height: '20%',
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 5,
        color: '#FFBF67',
    },
    t5: {
        width: '100%',
        height: '30%',
        textAlign: 'center',
        fontSize: 15,
    },
    t6: {
        fontSize: 15,
        paddingBottom: 15,
    },
    t7: {
        width: '100%',
        height: '50%',
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 5,
        color: '#FFBF67',
    },
});
