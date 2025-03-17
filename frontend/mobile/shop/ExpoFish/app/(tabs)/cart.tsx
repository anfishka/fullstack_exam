import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "@/components/ui/CartContext";
import Header from "@/components/ui/Header";

export default function CartScreen() {
  const router = useRouter();
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  // Функция увеличения количества
  const increaseQuantity = (id: number) => {
    const item = cart.find((item) => item.id === id);
    if (item) addToCart({ ...item, quantity: item.quantity + 1 });
  };

  // Функция уменьшения количества
  const decreaseQuantity = (id: number) => {
    const item = cart.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      addToCart({ ...item, quantity: item.quantity - 1 });
    } else {
      removeFromCart(id);
    }
  };

  // Подсчет общей суммы
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
    <Header title="Корзина" />
    <View style={styles.container}>
      {/* Заголовок */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={clearCart}>
          <Ionicons name="trash-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Список товаров */}
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price} ₴</Text>
              <View style={styles.quantityControl}>
                <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
                  <Ionicons name="remove-circle-outline" size={24} color="#0099FF" />
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
                  <Ionicons name="add-circle-outline" size={24} color="#0099FF" />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
              <Ionicons name="trash" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Итог и кнопка оформления */}
      <View style={styles.footer}>
        <Text style={styles.total}>Разом: {totalPrice.toFixed(2)} ₴</Text>
        <TouchableOpacity style={styles.checkoutButton} onPress={() => router.push("/checkout")}>
          <Text style={styles.checkoutText}>Оформить заказ</Text>
        </TouchableOpacity>
      </View>
    </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F2F2F2" },
  header: {
    backgroundColor: "#0099FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  headerText: { fontSize: 18, fontWeight: "bold", color: "white" },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  itemImage: { width: 60, height: 60, resizeMode: "contain", marginRight: 10 },
  itemInfo: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: "bold" },
  itemPrice: { fontSize: 14, color: "gray", marginBottom: 5 },
  quantityControl: { flexDirection: "row", alignItems: "center" },
  quantity: { fontSize: 16, marginHorizontal: 10 },
  footer: { padding: 15, backgroundColor: "white", borderTopWidth: 1, borderColor: "#ddd" },
  total: { fontSize: 18, fontWeight: "bold", textAlign: "right", marginBottom: 10 },
  checkoutButton: {
    backgroundColor: "#0099FF",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  checkoutText: { fontSize: 18, color: "white", fontWeight: "bold" },
});
