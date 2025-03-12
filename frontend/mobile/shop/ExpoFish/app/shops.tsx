import { Stack } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const shops = [
  { id: '1', city: 'Киев', address: 'ул. Паникахи, 48/50', phone: '(098) 777-77-01', schedule: 'Пн-Сб: 09:00–19:00 | Нд: 09:00–17:00' },
  { id: '2', city: 'Киев', address: 'пр-т Ак. Паладина, 5', phone: '(066) 777-79-94', schedule: 'Пн-Сб: 09:00–19:00 | Нд: 09:00–17:00' },
  { id: '3', city: 'Киев', address: 'бульвар Европейский, 47', phone: '(097) 777-25-28', schedule: 'Пн-Нд: 10:00–21:00' },
  { id: '4', city: 'Львов', address: 'ул. Хрещатик, 226В', phone: '(096) 774-77-97', schedule: 'Пн-Сб: 09:00–20:00 | Нд: 09:00–18:00' },
  { id: '5', city: 'Одесса', address: 'пр-т Небесной Сотни, 3А', phone: '(073) 777-77-14', schedule: 'Пн-Сб: 09:00–19:00 | Нд: 09:00–17:00' },
];

const ShopItem = ({ city, address, phone, schedule }) => (
  <View style={styles.card}>
    <Text style={styles.city}>{city}</Text>
    <Text style={styles.address}>{address}</Text>
    <Text style={styles.phone}>{phone}</Text>
    <Text style={styles.schedule}>{schedule}</Text>
  </View>
);

export default function ShopsScreen() {
  return (
    <View style={styles.container}>
       <Stack.Screen options={{ headerShown: false }} /> {/* Скрываем заголовок */}
      <Text style={styles.title}>Наши магазины</Text>
      <FlatList
        data={shops}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ShopItem {...item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#007AFF',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  city: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  address: {
    fontSize: 16,
    color: '#555',
    marginVertical: 2,
  },
  phone: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
  schedule: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
});