import Header from '@/components/ui/Header';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartScreen = ({ navigation }) => {
  return (
    <>
   
    <Header title="Корзина" />
    <View style={styles.container}>
      {/* Заголовок */}
      <View style={styles.header}>
        <TouchableOpacity >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      
        <TouchableOpacity>
          <Ionicons name="trash-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Контент пустой корзины */}
      <View style={styles.content}>
        <Ionicons name="cart-outline" size={80} color="black" />
        <Text style={styles.emptyTitle}>Кошик порожній</Text>
        <Text style={styles.emptyText}>Сміливо вибирайте товари з нашого каталогу</Text>
      </View>

      {/* Кнопка "Каталог товарів" */}
      <TouchableOpacity style={styles.catalogButton} onPress={() => navigation.navigate('Catalog')}>
        <Text style={styles.catalogText}>Каталог товарів</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  header: {
    backgroundColor: '#0099FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  emptyText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 5,
  },
  catalogButton: {
    backgroundColor: '#0099FF',
    paddingVertical: 15,
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  catalogText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CartScreen;
