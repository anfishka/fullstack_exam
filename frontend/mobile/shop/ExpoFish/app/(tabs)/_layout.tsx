import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
       // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
       tabBarActiveTintColor:'#39a2f3',
        tabBarInactiveTintColor: '#9f9f99', 
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: { position: 'absolute' },
          default: {},
        }),
      }}
    >
     <Tabs.Screen
  name="index"
  options={{
    title: 'Главная',
    tabBarIcon: ({ focused, size }) => (
      <Ionicons 
        name="home" 
        size={25} 
        color={focused ? '#39a2f3' : 'gray'} 
      />
    ),
  }}
/>
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Профиль',
          tabBarIcon: ({ focused, size }) =>  <Ionicons 
          name="person" 
          size={25} 
          color={focused ? '#39a2f3' : 'gray'} 
        />,
        }}
      />
      <Tabs.Screen
        name="catalog"
        options={{
          title: 'Каталог',
          tabBarIcon: ({ focused, size }) => <Ionicons 
          name="fish" 
          size={25} 
          color={focused ? '#39a2f3' : 'gray'} 
        />,
         
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Корзина',
          tabBarIcon: ({ focused, size }) => <Ionicons 
          name="cart" 
          size={25} 
          color={focused ? '#39a2f3' : 'gray'} 
        />,
        }}
      />
      <Tabs.Screen
        name="other"
        options={{
          title: 'Другое',
          tabBarIcon: ({ focused, size }) => <Ionicons 
          name="list" 
          size={25} 
          color={focused ? '#39a2f3' : 'gray'} 
        />,
        }}
      />
    </Tabs>
  );
}
