import React, { useState } from 'react';
import { StatusBar, Platform } from 'react-native';

import {
  FontAwesome,
} from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Pontos from '../pages/Pontos';
import Videos from '../pages/Videos';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const AppRoutes: React.FC = () => {
  const [home, setHome] = useState(true);

  StatusBar.setBarStyle('dark-content');

  if (Platform.OS === 'android') StatusBar.setBackgroundColor('#fff');

  if (home) {
    StatusBar.setHidden(true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#fff');
      StatusBar.setBarStyle('light-content');
    }
  } else {
    StatusBar.setHidden(false);
  }

  return (
    <Tab.Navigator
      shifting={false}
      barStyle={{
        backgroundColor: home ? '#000' : '#fff',
      }}
      initialRouteName="Videos"
      activeColor={home ? '#fff' : '#000'}
    >
      <Tab.Screen
        name="Videos"
        component={Videos}
        listeners={{
          focus: () => setHome(true),
          blur: () => setHome(false),
        }}
        options={{
          tabBarLabel: 'Videos',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="video-camera" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Pontos"
        component={Pontos}
        options={{
          tabBarLabel: 'Pontos',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="map-marker" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarLabel: 'Sobre',
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name="newspaper-o"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contato"
        component={Contato}
        options={{
          tabBarLabel: 'Contato',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="phone" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RootStackScreen: React.FC = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Main"
        component={AppRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootStackScreen;
