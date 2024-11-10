import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
    return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'pink',
          headerStyle: {
            backgroundColor: '#25292e',
          },
          headerShadowVisible: false,
          headerTintColor: '#fff',
          tabBarStyle: {
          backgroundColor: '#25292e',
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'About yourself',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home-heart" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="my_programming_languages"
          options={{
            title: 'My Programming languages',
            tabBarIcon: ({ color }) => (
              <Ionicons name="list" color={color} size={24}/>
            ),
          }}
        />
      </Tabs>
    );
  }