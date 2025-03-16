import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
  Switch,
  ScrollView,
  Image,
} from "react-native";
import { getProductById, patchProduct } from "../../services/productService";

export default function EditProduct() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [patchData, setPatchData] = useState([]); // 🔹 Храним изменения для PATCH

  useEffect(() => {
    if (id) {
      loadProduct();
    }
  }, [id]);

  const loadProduct = async () => {
    try {
      const data = await getProductById(id);
      setProduct(data);
    } catch (error) {
      console.error("Ошибка загрузки товара:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Функция обновления данных через PATCH
  const updateField = (path, value) => {
    setProduct((prev) => ({ ...prev, [path]: value }));

    // Добавляем в patchData только измененные поля
    setPatchData((prev) => {
      const updatedPatch = prev.filter((item) => item.path !== `/${path}`);
      return [...updatedPatch, { op: "replace", path: `/${path}`, value }];
    });
  };

  const handleSave = async () => {
    if (!product || patchData.length === 0) return;

    try {
      await patchProduct(id, patchData);
      router.replace(`/product/${id}`);
    } catch (error) {
      console.error("Ошибка при обновлении товара:", error);
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

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Название:</Text>
        <TextInput
          style={styles.input}
          value={product.name || ""}
          onChangeText={(text) => updateField("name", text)}
        />

        <Text style={styles.label}>Описание:</Text>
        <TextInput
          style={styles.input}
          value={product.description || ""}
          onChangeText={(text) => updateField("description", text)}
          multiline
        />

        <Text style={styles.label}>Цена:</Text>
        <TextInput
          style={styles.input}
          value={product.price ? product.price.toString() : ""}
          keyboardType="numeric"
          onChangeText={(text) => updateField("price", text ? Number(text) : 0)}
        />

        <Text style={styles.label}>ID Категории:</Text>
        <TextInput
          style={styles.input}
          value={product.categoryId ? product.categoryId.toString() : ""}
          keyboardType="numeric"
          onChangeText={(text) => updateField("categoryId", Number(text))}
        />

        <Text style={styles.label}>Ссылка на изображение:</Text>
        <TextInput
          style={styles.input}
          value={product.imageUrl || ""}
          onChangeText={(text) => updateField("imageUrl", text)}
        />

        {product.imageUrl ? (
          <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
        ) : (
          <Text style={styles.noImage}>Нет изображения</Text>
        )}

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Хит продаж:</Text>
          <Switch
            value={!!product.isHit}
            onValueChange={(value) => updateField("isHit", value)}
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Новинка:</Text>
          <Switch
            value={!!product.isNew}
            onValueChange={(value) => updateField("isNew", value)}
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Специальное предложение:</Text>
          <Switch
            value={!!product.isSpecialOffer}
            onValueChange={(value) => updateField("isSpecialOffer", value)}
          />
        </View>

        <Button title="Сохранить" onPress={handleSave} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  productImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginTop: 10,
  },
  noImage: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  switchLabel: {
    fontSize: 16,
  },
});
