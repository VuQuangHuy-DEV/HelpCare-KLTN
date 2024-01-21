import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function history() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.body}>
                <View style={styles.p1}>
                    <Text style={styles.t1}>Lịch sử</Text>
                </View >
                <View style={styles.p2}>
                    <View style={styles.p3}>
                        <Text>Sắp T.Hiện</Text>
                    </View>
                    <View style={styles.p3}>
                        <Text>Đã T.Hiện</Text>
                    </View>
                    <View style={styles.p3}>
                        <Text>Hđ Đã Đặt</Text>
                    </View>
                    <View style={styles.p3}>
                        <Text>Bảng Kê</Text>
                    </View>
                    <View style={styles.p4}></View>
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
        backgroundColor: 'white',
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