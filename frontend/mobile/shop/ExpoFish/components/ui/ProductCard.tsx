import { useRouter } from "expo-router";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface ProductCardProps {
  product: {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    isHit?: boolean;
    isNew?: boolean;
    isSpecialOffer?: boolean;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();

  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => router.push(`/product/${product.id}`)}
    >
      {/* Бейджи */}
      <View style={styles.badgeContainer}>
        {product.isSpecialOffer && <View style={[styles.badge, styles.specialOffer]}><Text style={styles.badgeText}>СУПЕРЦЕНА</Text></View>}
        {product.isNew && <View style={[styles.badge, styles.new]}><Text style={styles.badgeText}>НОВИНКА</Text></View>}
        {product.isHit && <View style={[styles.badge, styles.hit]}><Text style={styles.badgeText}>ХИТ</Text></View>}
      </View>

      {/* Изображение */}
      <Image source={{ uri: product.imageUrl }} style={styles.image} />

      {/* Информация */}
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price} ₴</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    margin: 7,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    width: 180,
    height: 240,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  badgeContainer: {
    position: "absolute",
    top: 5,
    left: 5,
    flexDirection: "column",
    zIndex: 2, // 🔥 Стикеры всегда сверху
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 5,
    marginBottom: 3,
  },
  hit: { backgroundColor: "#FF8000" },
  new: { backgroundColor: "#007BFF" },
  specialOffer: { backgroundColor: "#A020F0" },
  badgeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
    zIndex: 1, // 🔥 Картинка под стикерами
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
