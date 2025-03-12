import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import Header from '@/components/ui/Header';

const menuItems = [
  { id: '1', title: 'Контакты', icon: 'phone', route: '/contact' },
  { id: '2', title: 'Оплата и доставка', icon: 'truck', route: '/payments' },
  { id: '3', title: 'Магазины', icon: 'map-marker-alt', route: '/shops' },
  { id: '4', title: 'Сервисный центр', icon: 'tools', route: '/service' },
  { id: '5', title: 'Гарантия', icon: 'shield-alt', route: '/warranty' },
];

export default function OtherScreen() {
  const router = useRouter();

  return (
    <>
    
      <Header title="Другое" />
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => router.push(item.route)}
            >
              <FontAwesome5 name={item.icon} size={20} color="#007AFF" style={styles.icon} />
              <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
     
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9', padding: 20 },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: { marginRight: 15 },
  text: { fontSize: 16, fontWeight: 'bold', color: '#333' },
});

