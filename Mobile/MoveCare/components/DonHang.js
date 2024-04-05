import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, FlatList, Button } from 'react-native';
import React, { useState } from "react";




export default function Donhang({ }) {



    return (

        <View style={styles.container}>
            <ScrollView>
                <View
                    style={{
                        borderColor: "gray",
                        borderRadius: 5,
                        borderWidth: 1,
                        width: "90%",
                        // backgroundColor: "gray",
                        marginTop: 50,
                        height: 700,
                        marginLeft: "5%",
                    }}>
                    <View
                        style={{
                            width: "90%",
                            marginLeft: "5%",
                            // backgroundColor:"red",
                            height: 50,
                            marginTop: "5%",
                            borderColor: "gray",
                            borderRadius: 5,
                            borderWidth: 1,
                        }}>
                        <Text style={{
                            marginLeft: "5%",
                            marginRight: "5%",
                        }}>Vui lòng xem các hợp đồng đặt giúp việc lẻ, định kỳ, tổng vệ sinh <Text
                            style={{
                                color: "blue",
                            }}>tại đây</Text> </Text>

                    </View>
                    <View style={{
                        // backgroundColor:"yellow",
                        width: "90%",
                        height: 600,
                        marginLeft: "5%",

                    }}>
                        
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
});