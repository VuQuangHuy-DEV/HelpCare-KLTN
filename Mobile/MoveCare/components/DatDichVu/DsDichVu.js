import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Button } from 'react-native';

// Màn hình stack
const StackScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Stack Screen</Text>
    </View>
  );
};

// Màn hình tab 1
const TabScreen1 = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tab Screen 1</Text>
      <Button
        title="Go to Stack Screen"
        onPress={() => navigation.navigate('StackScreen')}
      />
    </View>
  );
};

// Màn hình tab 2
const TabScreen2 = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tab Screen 2</Text>
    </View>
  );
};

// Stack Navigator
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StackScreen" component={StackScreen} />
    </Stack.Navigator>
  );
};

// Tab Navigator
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabScreen1" component={TabScreen1} />
      <Tab.Screen name="TabScreen2" component={TabScreen2} />
    </Tab.Navigator>
  );
};

// App
const App = () => {
  return (
    
      <TabNavigator />
    
  );
};

export default App;
