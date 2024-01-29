import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';


export default function TaiKhoan({navigation}) {
    return (
        <View style={styles.container}>
            <Text>tai khoan</Text>
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
