import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TrangChu from './screens/TrangChu';
import DangKy from './screens/DangKy';
import Otp from './screens/Otp';
import DangNhap from './screens/DangNhap';
import DatDichVu from './screens/DatDichVu';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TrangChu">
        <Stack.Screen name="TrangChu" component={TrangChu} />
        <Stack.Screen name="DangNhap" component={DangNhap} />
        <Stack.Screen name="DangKy" component={DangKy} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="DatDichVu" component={DatDichVu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}