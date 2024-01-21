import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

export default function Otp({ navigation }) {
    const [textValue, setTextValue] = useState('');

    const handleTextChange = (newText) => {
        setTextValue(newText);
    };
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.t1}>Vertification</Text>
                <Text style={styles.t2}>Please vertify your OTP code</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.t3}>Code</Text>
                <View style={styles.c1}>
                    <View style={styles.c2}>
                        <TextInput
                            style={styles.t4}
                            onChangeText={handleTextChange}
                            value={textValue}
                        />
                    </View>
                    <View style={styles.c2}>
                        <TextInput
                            style={styles.t4}
                            onChangeText={handleTextChange}
                            value={textValue}
                        />
                    </View>
                    <View style={styles.c2}>
                        <TextInput
                            style={styles.t4}
                            onChangeText={handleTextChange}
                            value={textValue}
                        />
                    </View>
                    <View style={styles.c2}>
                        <TextInput
                            style={styles.t4}
                            onChangeText={handleTextChange}
                            value={textValue}
                        />
                    </View>
                    <View style={styles.c2}>
                        <TextInput
                            style={styles.t4}
                            onChangeText={handleTextChange}
                            value={textValue}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.b1} >
                    <Text style={styles.b1_1}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
    },
    body: {
        flex: 0.25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        flex: 0.85,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    t1: {
        color: 'white',
        fontSize: 30,
    },
    t2: {
        color: 'white',
        fontSize: 20,
        marginTop: 5,
    },
    t3: {
        fontSize: 30,
        paddingTop: 50,
        paddingLeft: '10%',
        paddingBottom: 20,
    },
    t4: {
        fontSize: 20,
    },
    c1: {
        height: 50,
        width: '80%',
        flexDirection: 'row',
        marginLeft: '10%',
    },
    c2: {
        height: '100%',
        width: '16%',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '4%',
    },
    b1: {
        marginTop: 40,
        backgroundColor: 'orange',
        height: 60,
        marginBottom: 20,
        width: '50%',
        marginLeft: '25%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    b1_1: {
        fontSize: 20,
        color: 'white',
    },
});
