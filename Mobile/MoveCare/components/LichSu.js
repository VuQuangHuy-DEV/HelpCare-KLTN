import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from "react";

const LichSu = ({ }) => {
    const [orders, setOrders] = useState([
        { id: 1, serviceName: 'Cleaning', date: '2024-03-28', price: 50 },
        { id: 2, serviceName: 'Cooking', date: '2024-03-26', price: 40 },
        { id: 3, serviceName: 'Babysitting', date: '2024-03-24', price: 60 },
        // Add more orders as needed
    ]);

    const renderItem = ({ item }) => (
        <View style={styles.orderItem}>
            <Text style={styles.serviceName}>{item.serviceName}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Price: ${item.price}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.messageContainer}>
                    <Text style={styles.messageText}>Vui lòng xem các hợp đồng đặt giúp việc lẻ, định kỳ, tổng vệ sinh <Text style={styles.linkText}>tại đây</Text></Text>
                </View>
                <FlatList
                    data={orders}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    ListHeaderComponent={() => <View style={{ height: 50 }} />} 
                    ListFooterComponent={() => <View style={{ height: 50 }} />} 
                />
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
    wrapper: {
        borderColor: "gray",
        borderRadius: 5,
        borderWidth: 1,
        width: "90%",
        marginTop: 50,
        height: 700,
        marginLeft: "5%",
    },
    messageContainer: {
        width: "90%",
        marginLeft: "5%",
        height: 50,
        marginTop: "5%",
        borderColor: "gray",
        borderRadius: 5,
        borderWidth: 1,
    },
    messageText: {
        marginLeft: "5%",
        marginRight: "5%",
    },
    linkText: {
        color: "blue",
    },
    orderItem: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
    },
    serviceName: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default LichSu;
