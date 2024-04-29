import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button ,TouchableOpacity, SafeAreaView} from 'react-native';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_ROOT } from '../../config-global';
import { getData } from '../../helper/StoregeHelper';

const API_GIAODICH_GETS = API_ROOT + "transaction/giaodich/getByKhachHangId/"
console.log(API_GIAODICH_GETS)
export default GiaoDichS = ({ navigation}) => {

    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    

    const fetchOrders = async () => {
      const id = await getData("ID");
        try {
            const response = await axios.get(API_GIAODICH_GETS + id +"/");
            setOrders(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };
    useEffect(() => {
      fetchOrders();
     
  }, []);

    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate('ChiTietGiaoDich', { item: item })}>
        <View style={styles.orderItem}>
          <Text style={styles.serviceName}>{item.serviceName}</Text>
          <Text>Date2: {item.ghi_chu}</Text>
          <Text>Price: ${item.gia_tri}</Text>
        </View>
      </TouchableOpacity>
    );

    if (isLoading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
                <StatusBar style="auto" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text>Error: {error.message}</Text>
                <StatusBar style="auto" />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
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
        </SafeAreaView>
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
