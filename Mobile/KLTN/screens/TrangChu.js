import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DatDichVu from '../components/DatDichVu';
import Donhang from '../components/DonHang';
import DangBai from '../components/DangBai';
import LichSu from '../components/LichSu';
import TaiKhoan from '../components/TaiKhoan';

import { Ionicons, MaterialCommunityIcons, MaterialIcons, Feather } from "@expo/vector-icons";

// Bottom tab
const Tab = createBottomTabNavigator();

export default function TrangChu({ navigation }) {
  return (

    <Tab.Navigator
      initialRouteName='DatDichVu'

      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {

          if (route.name === 'DatDichVu') {
            return <Ionicons name={focused ? 'cart' : 'cart-outline'} size={size} color={focused ? '#2baf66' : 'gray'} />;
          } else if (route.name === 'DangBai') {
            return <MaterialCommunityIcons name={focused ? 'post' : 'post-outline'} size={size} color={focused ? '#2baf66' : 'gray'} />;
          } else if (route.name === 'DonHang') {
            return <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={focused ? '#2baf66' : 'gray'} />;
          } else if (route.name === 'LichSu') {
            return <MaterialIcons name={focused ? 'manage-history' : 'history'} size={size} color={focused ? '#2baf66' : 'gray'} />;
          } else if (route.name === 'TaiKhoan') {
            return <Feather name={focused ? 'users' : 'user'} size={size} color={focused ? '#2baf66' : 'gray'} />;
          }
        },
        tabBarActiveTintColor: '#2baf66',
        tabBarInactiveTintColor: 'gray',

      })}

    >
      <Tab.Screen name="DatDichVu"
        component={DatDichVu}
      />

      <Tab.Screen name="DonHang"
        component={Donhang}
        options={{

        }} />
      <Tab.Screen name="LichSu"
        component={LichSu}
        options={{


        }} />
      <Tab.Screen name="DangBai"
        component={DangBai}
        options={{


        }} />
      <Tab.Screen name="TaiKhoan"
        component={TaiKhoan}
        options={{


        }} />
    </Tab.Navigator>
  );
}