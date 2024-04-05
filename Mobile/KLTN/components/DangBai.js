import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';


export default function DangBai({navigation}) {
    return (
        <View style={styles.container}>
            <Text>dang bai</Text>
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
