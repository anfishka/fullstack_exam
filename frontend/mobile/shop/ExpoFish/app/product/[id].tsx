import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet, ScrollView, Button } from "react-native";
import { getProductById } from "../services/productService";
import { useCart } from "../../components/ui/CartContext"; // Подключаем контекст корзины

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { addToCart } = useCart(); // Достаем функцию добавления в корзину

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadProduct();
    }
  }, [id]);

  const loadProduct = async () => {
    try {
      const data = await getProductById(Number(id));
      setProduct(data);
    } catch (error) {
      console.error("Ошибка загрузки товара:", error);
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

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Ошибка: товар не найден</Text>
      </View>
    );
  }

  // Функция для добавления в корзину и перехода в корзину
  const handleBuy = () => {
    console.log("Добавляем товар в корзину:", {
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity: 1,
    });
  
    addToCart({
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity: 1,
    });
  
    router.push("/cart");
  };

  return (
    <ScrollView style={styles.container}>
      {/* Изображение товара */}
      <Image source={{ uri: product.imageUrl }} style={styles.image} />

      {/* Название товара */}
      <Text style={styles.title}>{product.name}</Text>

      {/* Цена */}
      <Text style={styles.price}>{product.price} ₴</Text>

      {/* Описание */}
      <Text style={styles.sectionTitle}>Описание</Text>
      <Text style={styles.description}>{product.description}</Text>

      {/* Характеристики */}
      <Text style={styles.sectionTitle}>Характеристики</Text>
      <Text style={styles.detail}>Новинка: {product.isNew ? "Да" : "Нет"}</Text>
      <Text style={styles.detail}>Хит продаж: {product.isHit ? "Да" : "Нет"}</Text>
      <Text style={styles.detail}>Специальное предложение: {product.isSpecialOffer ? "Да" : "Нет"}</Text>

      {/* Кнопка "Купить" */}
      <Button title="Купить" onPress={handleBuy} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  loader: { flex: 1, justifyContent: "center", alignItems: "center" },
  errorText: { fontSize: 18, color: "red", textAlign: "center" },
  image: { width: "100%", height: 300, resizeMode: "contain", marginBottom: 10 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  price: { fontSize: 22, fontWeight: "bold", color: "#28a745", textAlign: "center", marginBottom: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
  description: { fontSize: 16, color: "#555", marginBottom: 10 },
  detail: { fontSize: 16, marginBottom: 5 },
});
