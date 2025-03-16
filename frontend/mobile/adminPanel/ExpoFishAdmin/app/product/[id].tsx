import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { deleteProduct, getProductById } from "../services/productService";

export default function ProductDetail() {
  const { id } = useLocalSearchParams(); // Получаем ID товара из URL
  const router = useRouter();
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      const data = await getProductById(id);
      setProduct(data);
    } catch (error) {
      console.error("Ошибка загрузки товара:", error);
    }
  };

  const handleDelete = async () => {
    Alert.alert("Удаление", `Удалить "${product.name}"?`, [
      { text: "Отмена", style: "cancel" },
      {
        text: "Удалить",
        style: "destructive",
        onPress: async () => {
          await deleteProduct(id);
          router.replace("/"); // Вернуться на главную
        },
      },
    ]);
  };

  if (!product) return <Text>Загрузка...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text>ID: {product.id}</Text>
      <Text>Цена: {product.price}₴</Text>
      <Text>Остаток: {product.stock}</Text>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteText}>Удалить товар</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  deleteText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
