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

import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import ProductCard from '../../components/ui/ProductCard';
import { ScrollView } from 'react-native-gesture-handler';

const API_URL = 'http://10.0.2.2:5000/api/products';

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

  // Разделение товаров на категории
  const hitProducts = products.filter((item) => item.isHit);
  const specialOffers = products.filter((item) => item.isSpecialOffer);
  const newProducts = products.filter((item) => item.isNew);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Хиты продаж */}
        {hitProducts.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Хит продажу</Text>
              <TouchableOpacity onPress={() => console.log('Перейти ко всем хитам')}>
                <Text style={styles.viewAll}>Все</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={hitProducts}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              renderItem={({ item }) => (
                <ProductCard
                  image={`http://10.0.2.2:7208${item.imageUrl}`}
                  title={item.name}
                  price={`${item.price}₴`}
                  isHit={item.isHit}
                  isNew={item.isNew}
                  isSpecialOffer={item.isSpecialOffer}
                />
              )}
              contentContainerStyle={styles.list}
              scrollEnabled={false} // Отключаем отдельный скролл
            />
          </View>
        )}

        {/* Спецпредложения */}
        {specialOffers.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Спецпропозиції</Text>
              <TouchableOpacity onPress={() => console.log('Перейти ко всем спецпредложениям')}>
                <Text style={styles.viewAll}>Все</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={specialOffers}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              renderItem={({ item }) => (
                <ProductCard
                  image={`http://10.0.2.2:7208${item.imageUrl}`}
                  title={item.name}
                  price={`${item.price}₴`}
                  isHit={item.isHit}
                  isNew={item.isNew}
                  isSpecialOffer={item.isSpecialOffer}
                />
              )}
              contentContainerStyle={styles.list}
              scrollEnabled={false}
            />
          </View>
        )}


         {/*Новинка */}
         {newProducts.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Новинка</Text>
              <TouchableOpacity onPress={() => console.log('Перейти к новинкам')}>
                <Text style={styles.viewAll}>Все</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={newProducts}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              renderItem={({ item }) => (
                <ProductCard
                  image={`http://10.0.2.2:7208${item.imageUrl}`}
                  title={item.name}
                  price={`${item.price}₴`}
                  isHit={item.isHit}
                  isNew={item.isNew}
                  
                />
              )}
              contentContainerStyle={styles.list}
              scrollEnabled={false} // Отключаем отдельный скролл
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#0099FF',
    fontSize: 14,
  },
  list: {
    paddingBottom: 10,
  },
  message: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  },
});

export default ProductList;
