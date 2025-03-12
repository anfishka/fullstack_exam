import React from 'react';
import Header from '@/components/ui/Header';
import { View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

export default function ContactScreen() {
  return (
    <>
       <Stack.Screen options={{ headerShown: false }} /> {/* Скрываем заголовок */}
      <Header title='Контакты' />
      <View style={styles.container}>
        <Text style={styles.text}>
          Мы всегда готовы дать вам квалифицированный совет или помочь с выбором того, что вам необходимо среди разнообразного ассортимента нашего магазина.
        </Text>
        <Text style={styles.sectionTitle}>Телефоны:</Text>
        <Text style={styles.contact}>0 800 773-377 - Бесплатно по Украине</Text>
        <Text style={styles.contact}>044 777 57 97</Text>
        
        <Text style={styles.sectionTitle}>Написать нам:</Text>
        <Text style={styles.contact}>Сообщение на e-mail: e-shop@ef.kiev.ua</Text>
        <Text style={styles.contact}>Написать сообщение в Viber</Text>
        <Text style={styles.contact}>Написать сообщение в Telegram</Text>
        <Text style={styles.contact}>Задать вопрос в чат-боте Telegram</Text>
        <Text style={styles.contact}>Задать вопрос в чат-боте Viber</Text>
        
        <Text style={styles.sectionTitle}>График работы:</Text>
        <Text style={styles.contact}>Пн-Пт: 09:00—18:00</Text>
        <Text style={styles.contact}>Сб: 09:00—17:00</Text>
        
        <Text style={styles.sectionTitle}>Пункт обслуживания клиентов:</Text>
        <Text style={styles.contact}>Киев, ул. В.Мономаха, 48/50</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
    marginTop: 15,
  },
  contact: {
    fontSize: 16,
    color: '#555',
    marginVertical: 2,
  },
});