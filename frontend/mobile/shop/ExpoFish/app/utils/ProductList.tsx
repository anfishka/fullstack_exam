{/**import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const API_URL = 'https://10.0.2.2:5098/api/products'; // Эмулятор Android


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        console.log(' Данные получены:', response.data);
        setProducts(response.data);
      } catch (err) {
        console.error(' Ошибка:', err);
        setError('Ошибка загрузки данных');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  //  **Дальше идёт JSX-код — ошибки не будет**
  return (
    <View>
      {loading ? <Text>Загрузка...</Text> : null}
      {error ? <Text>{error}</Text> : <Text>Данные получены успешно!</Text>}
    </View>
  );
};

export default ProductList;
 */}

 {/** 
 import React, { useEffect, useState } from 'react';
 import { View, FlatList, ActivityIndicator, Text, ScrollViewComponent, StyleSheet, SafeAreaView } from 'react-native';
 import axios from 'axios';
 import ProductCard from '../../components/ui/ProductCard'; // Импортируем карточку товара
import { ScrollView } from 'react-native-gesture-handler';
 
 const API_URL = 'http://10.0.2.2:5000/api/products'; // Используем локальный сервер

 const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data);
      } catch (err) {
        setError('Ошибка загрузки данных');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Text style={styles.message}>Загрузка...</Text>;
  if (error) return <Text style={styles.message}>{error}</Text>;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}> 
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2} // Карточки в два столбца
          renderItem={({ item }) => (
            <ProductCard
              image={`http://10.0.2.2:7208${item.imageUrl}`} 
              title={item.name}
              price={`${item.price}₴`}
              isHit={item.isHit}
              isNew={item.isNew}
              isSpecialOffer ={item.isSpecialOffer}

            />
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false} // Убираем полосу прокрутки
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Главное: SafeAreaView теперь занимает весь экран
    backgroundColor: '#F5F5F5', // Чтоб видеть разницу
  },
  container: {
    flexGrow: 1, // Обеспечивает корректное распределение пространства
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  message: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  },
  list: {
    paddingBottom: 20, // Чтоб карточки не прилегали к низу экрана
  },
});

export default ProductList;
*/}
import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, Text, StyleSheet } from "react-native";
import { getProducts } from "../services/productService";
import ProductCard from "../../components/ui/ProductCard";
import Header from "@/components/ui/Header";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data || []); // Убеждаемся, что products всегда массив
    } catch (error) {
      console.error("Ошибка загрузки товаров:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Список товаров" />
      <Text style={styles.title}>Всего товаров: {products.length}</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
        numColumns={2} // Два элемента в строке
        columnWrapperStyle={styles.row} // Стилизация строк
        renderItem={({ item }) => (
          <ProductCard product={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  row: {
    justifyContent: "space-between", // Разделяем элементы в строке
    marginBottom: 10, // Отступ между строками
  },
});

