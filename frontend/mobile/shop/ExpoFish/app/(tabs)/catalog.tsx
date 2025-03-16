
{/**import Header from '@/components/ui/Header';
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const categories = [
  { id: '1', title: 'Удилища', image: require('../../assets/images/categories/rods.png'), subcategories: ['Фидерные удилища', 'Пикерные удилища', 'Спиннинговые удилища', 'Карповые удилища', 'Маховые удилища', 'Болонские удилища', 'Матчевые удилища', 'Штекерные удилища', 'Зимние удилища', 'Морские удилища'] },
  { id: '2', title: 'Катушки', image: require('../../assets/images/categories/reels.png'), subcategories: ['Безынерционные', 'Мультипликаторные', 'Карповые', 'Зимние'] },
  { id: '3', title: 'Приманки', image: require('../../assets/images/categories/lures.png'), subcategories: ['Воблеры', 'Блесны', 'Силиконовые приманки', 'Попперы'] },
  { id: '4', title: 'Лески и шнуры', image: require('../../assets/images/categories/lines.png'), subcategories: ['Монофильные', 'Флюорокарбоновые', 'Плетеные'] },
  { id: '5', title: 'Инструменты', image: require('../../assets/images/categories/tools.png'), subcategories: ['Крючки', 'Отцепы', 'Кусачки', 'Фонари'] },
  { id: '6', title: 'Лодки', image: require('../../assets/images/categories/boats.png'), subcategories: ['ПВХ лодки', 'Гребные лодки', 'Моторные лодки'] },
  { id: '7', title: 'Экипировка', image: require('../../assets/images/categories/equipment.png'), subcategories: ['Костюмы', 'Сапоги', 'Перчатки', 'Жилеты'] },
  { id: '8', title: 'Хранение', image: require('../../assets/images/categories/storage.png'), subcategories: ['Чемоданы', 'Коробки', 'Сумки', 'Ящики'] },
];

export default function CatalogScreen() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <>

    <Header />
    <View style={styles.container}>
      
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        style={styles.categoriesList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryItem,
              selectedCategory.id === item.id && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory(item)}
          >
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={[styles.categoryText, selectedCategory.id === item.id && styles.selectedText]}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      
      <FlatList
        data={selectedCategory.subcategories}
        keyExtractor={(item, index) => index.toString()}
        style={styles.subcategoriesList}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.subcategoryItem}>
            <Image source={require('../../assets/images/categories/storage.png')} style={styles.subcategoryImage} />
            <Text style={styles.subcategoryText}>{item}</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        )}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row', backgroundColor: '#F5F5F5' },

  // Левая часть - категории
  categoriesList: { width: '5%', backgroundColor: '#FFF', paddingVertical: 10 },
  categoryItem: {
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderLeftWidth: 3,
    borderLeftColor: 'transparent',
  },
  selectedCategory: { borderLeftColor: '#00AEEF', backgroundColor: '#E6F7FF' },
  categoryImage: { width: 50, height: 50, resizeMode: 'contain' },
  categoryText: { fontSize: 14, textAlign: 'center', marginTop: 5 },
  selectedText: { color: '#00AEEF', fontWeight: 'bold' },

  // Правая часть - подкатегории
  subcategoriesList: { flex: 1, paddingVertical: 10 },
  subcategoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginVertical: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  subcategoryImage: { width: 40, height: 40, resizeMode: 'contain', marginRight: 10 },
  subcategoryText: { flex: 1, fontSize: 16 },
  arrow: { fontSize: 18, color: '#CCC' },
});

  
  */}



  /////////////////////////////////////////////////
  //////////////////////////////////
  {/*
  import Header from '@/components/ui/Header';
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const categories = [
  { id: '1', title: 'Удилища', image: require('../../assets/images/categories/rods.png') },
  { id: '2', title: 'Катушки', image: require('../../assets/images/categories/reels.png') },
  { id: '3', title: 'Приманки', image: require('../../assets/images/categories/lures.png') },
  { id: '4', title: 'Лески и шнуры', image: require('../../assets/images/categories/lines.png') },
];

const testProducts = [
  { id: '101', name: 'Спиннинг Shimano', price: '5000 ₽', image: require('../../assets/images/categories/rods.png') },
  { id: '102', name: 'Катушка Daiwa', price: '7000 ₽', image: require('../../assets/images/categories/reels.png') },
  { id: '103', name: 'Блесна Mepps', price: '350 ₽', image: require('../../assets/images/categories/lures.png') },
  { id: '104', name: 'Леска Power Pro', price: '1500 ₽', image: require('../../assets/images/categories/lines.png') },
];


    
export default function CatalogScreen() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <>
  
    <Header/>
    <View style={styles.container}>
      
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        style={styles.categoriesList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.categoryItem, selectedCategory.id === item.id && styles.selectedCategory]}
            onPress={() => setSelectedCategory(item)}
          >
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={[styles.categoryText, selectedCategory.id === item.id && styles.selectedText]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />

     
      <FlatList
        data={testProducts}
        keyExtractor={(item) => item.id}
        style={styles.productsList}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productItem}>
            <Image source={item.image} style={styles.productImage} />
            <View>
              <Text style={styles.productText}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row', backgroundColor: '#F5F5F5' },

  // Левая часть - категории (25% экрана)
  categoriesList: { flex: 1, backgroundColor: '#FFF', paddingVertical: 10 },
  categoryItem: { alignItems: 'center', paddingVertical: 15, borderLeftWidth: 3, borderLeftColor: 'transparent' },
  selectedCategory: { borderLeftColor: '#00AEEF', backgroundColor: '#E6F7FF' },
  categoryImage: { width: 50, height: 50, resizeMode: 'contain' },
  categoryText: { fontSize: 14, textAlign: 'center', marginTop: 5 },
  selectedText: { color: '#00AEEF', fontWeight: 'bold' },

  // Правая часть - товары (75% экрана)
  productsList: { paddingVertical: 10,},
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginVertical: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  productImage: { width: 60, height: 60, resizeMode: 'contain', marginRight: 10 },
  productText: { fontSize: 16, fontWeight: 'bold' },
  productPrice: { fontSize: 14, color: '#777' },
});
 */}
 import React, { useState, useEffect } from 'react';
 import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
 import axios from 'axios';
 import Header from '@/components/ui/Header';
 
 // API URL
 const API_URL = 'http://10.0.2.2:5000/api/products/categories';
 const API_URL2 = 'http://10.0.2.2:5000/api/products';
 
 export default function CatalogScreen() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Загрузка категорий
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        console.log("Запрос категорий...");
        const response = await axios.get(API_URL);
        console.log("Категории получены:", response.data);
        setCategories(response.data);

        if (response.data.length > 0) {
          setSelectedCategory(response.data[0]);
          fetchProducts(response.data[0].id);
        }
      } catch (err) {
        console.error("Ошибка загрузки категорий:", err);
        setError("Ошибка загрузки категорий");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Загрузка товаров по категории
  const fetchProducts = async (categoryId: number) => {
    setLoading(true);
    setProducts([]); // Очистка перед загрузкой новых данных
  
    try {
      console.log(`🔄 Загружаем товары для категории ID: ${categoryId}`);
  
      const response = await axios.get(`http://10.0.2.2:5000/api/products/by-category/${categoryId}`);
  
      if (!response.data || response.data.length === 0) {
        throw new Error(`❌ Нет товаров для категории ID: ${categoryId}`);
      }
  
      console.log("✅ Полученные товары:", response.data);
      
      setProducts(response.data);
    } catch (err) {
      console.error('❌ Ошибка загрузки товаров:', err.response ? err.response.data : err.message);
      setError(`Ошибка загрузки товаров: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  

  // Выбор категории
  const handleCategorySelect = (category: any) => {
    if (selectedCategory?.id === category.id) return; // Если уже выбрана, не перезагружать

    setSelectedCategory(category);
    setProducts([]); // Очистка перед загрузкой новых данных
    fetchProducts(category.id);
  };

  if (loading) return <ActivityIndicator size="large" color="#0099FF" style={styles.loader} />;
  if (error) return <Text style={styles.error}>{error}</Text>;

  return (
    <>
      <Header title="Каталог" />
      <View style={styles.container}>
        {/* Категории */}
        <View style={styles.categoriesContainer}>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.categoryItem, selectedCategory?.id === item.id && styles.selectedCategory]}
                onPress={() => handleCategorySelect(item)}
              >
                <Image source={{ uri: item.imageUrl }} style={styles.categoryImage} />
                <Text style={[styles.categoryText, selectedCategory?.id === item.id && styles.selectedText]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Товары */}
        <View style={styles.productsContainer}>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.productItem}>
                <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
                <Text style={styles.productText}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}₴</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </>
  );
}


 
 const styles = StyleSheet.create({
   container: { flex: 1, flexDirection: 'row', backgroundColor: '#F5F5F5' },
 
   // Левая часть - категории
   categoriesList: { flex: 1, backgroundColor: '#FFF', paddingVertical: 10 },
   categoryItem: { alignItems: 'center', paddingVertical: 15, borderLeftWidth: 3, borderLeftColor: 'transparent' },
   selectedCategory: { borderLeftColor: '#00AEEF', backgroundColor: '#E6F7FF' },
   categoryImage: { width: 50, height: 50, resizeMode: 'contain' },
   categoryText: { fontSize: 14, textAlign: 'center', marginTop: 5 },
   selectedText: { color: '#00AEEF', fontWeight: 'bold' },
 
   // Правая часть - товары
   productsList: { flex: 1, paddingVertical: 10, paddingHorizontal:50 },
   productItem: {
     flexDirection: 'row',
     alignItems: 'center',
     backgroundColor: '#FFF',
     marginVertical: 5,
     paddingVertical: 15,
     paddingHorizontal: 10,
     borderRadius: 8,
     shadowColor: '#000',
     shadowOpacity: 0.1,
     shadowRadius: 5,
     elevation: 2,
   },
   productImage: { width: 60, height: 60, resizeMode: 'contain', marginRight: 10 },
   productText: { fontSize: 16, fontWeight: 'bold' },
   productPrice: { fontSize: 14, color: '#777' },
 
   // Лоадер и ошибки
   loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
   error: { color: 'red', textAlign: 'center', marginTop: 20 },
 });




 