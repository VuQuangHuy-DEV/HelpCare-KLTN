import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View} from 'react-native';


export default function DatDichVu({navigation}) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    
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
