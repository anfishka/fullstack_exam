import Header from '@/components/ui/Header';
import { Stack } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const paymentMethods = [
  { id: '1', title: 'Наличные', description: 'Оплата курьеру при доставке по Киеву или при самовывозе.' },
  { id: '2', title: 'Безналичная оплата', description: 'Оплата по счету в любом банке или платежном терминале.' },
  { id: '3', title: 'Подарочные сертификаты', description: 'Оплата сертификацией Flagman. Нужно отправить фото использованного сертификата.' },
  { id: '4', title: 'Наложенный платеж', description: 'Курьерские службы взимают дополнительную плату за услугу.' },
  { id: '5', title: 'Visa/MasterCard', description: 'Онлайн-оплата картой Visa/MasterCard любого банка.' },
];

const creditMethods = [
  { id: '6', title: 'Оплата частями Monobank', description: 'Оплата в рассрочку через Monobank. Минимальная сумма - 500 грн.' },
  { id: '7', title: 'Оплата частями А-Банк', description: 'Рассрочка через А-Банк. Минимальная сумма - 500 грн.' },
  { id: '8', title: 'Оплата частями ПУМБ', description: 'Рассрочка через ПУМБ. Доступный срок - до 8 месяцев.' },
];

const PaymentItem = ({ title, description }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

export default function PaymentsScreen() {

  return (  
  <>
  
<Header title='Оплата' />
   <Stack.Screen options={{ headerShown: false }} /> {/* Скрываем заголовок */}
    <View style={styles.container}> 
  
      
      <Text style={styles.header}>Способы оплаты</Text>
      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PaymentItem {...item} />}
      />
      <Text style={styles.header}>Оплата в рассрочку</Text>
      <FlatList
        data={creditMethods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PaymentItem {...item} />}
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
