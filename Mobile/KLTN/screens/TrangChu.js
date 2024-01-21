import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function TrangChu({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.t1}>HelpCare</Text>
            <TouchableOpacity style={styles.b1} onPress={() => navigation.navigate("DangNhap")}>
                <Text style={styles.b1_1} >DangNhap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.b1} onPress={() => navigation.navigate("DangKy")}>
                <Text style={styles.b1_1}>DangKy</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    t1: {
        fontSize: 30,
        marginTop: 100,
        marginBottom: 50,
        color: '#FFBF67',
        fontSize: 40,
        marginBottom: 400,
        fontWeight: 'bold',
    },
    b1: {
        backgroundColor: '#FFBF67',
        height: 60,
        marginBottom: 20,
        width: '80%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    b1_1: {
        fontSize: 20,
        color: 'white',
    },
});
