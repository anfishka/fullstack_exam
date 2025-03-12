import Header from '@/components/ui/Header';
import { Stack } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const warrantyInfo = [
  { id: '1', title: 'Срок гарантии', description: 'Гарантия 12 месяцев на всю продукцию, на которую распространяется гарантия.' },
  { id: '2', title: 'Гарантийный случай', description: 'В случае заводского брака товар можно вернуть или отремонтировать за счет производителя.' },
  { id: '3', title: 'Условия возврата', description: 'Товар можно обменять или вернуть в течение 14 дней при наличии чека и неповрежденной упаковки.' },
  { id: '4', title: 'Что не подлежит гарантии', description: 'Товары с механическими повреждениями, неправильным использованием или после ремонта неавторизованными мастерами.' },
];

const WarrantyItem = ({ title, description }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

export default function WarrantyScreen() {
  return (
    <>
  
    <Header title='Гарантия' />
       <Stack.Screen options={{ headerShown: false }} /> {/* Скрываем заголовок */}
    <View style={styles.container}>
      <Text style={styles.header}>Гарантия и возврат</Text>
      <FlatList
        data={warrantyInfo}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <WarrantyItem {...item} />}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 15,
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
});
