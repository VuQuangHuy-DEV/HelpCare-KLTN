import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DangNhap from '../screens/DangNhap';
import DangKy from '../screens/DangKy';
import TrangChu from '../screens/TrangChu';
import OTP from '../screens/OTP';

// Navigation routing
const Stack = createNativeStackNavigator();
export default function Routing() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TrangChu'>
        <Stack.Screen name="DangNhap" component={DangNhap} options={{ headerShown: false }} />
        <Stack.Screen name="DangKy" component={DangKy} options={{ headerShown: false }} />
        <Stack.Screen name="TrangChu" component={TrangChu} options={{ headerShown: false }} />
        <Stack.Screen name="OTP" component={OTP} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

