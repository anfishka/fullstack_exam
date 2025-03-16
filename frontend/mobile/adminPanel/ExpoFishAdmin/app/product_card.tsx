{/**import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function ProductCard({ product, onEdit, onDelete }) {
  // 🔹 Локальное состояние для теста (вместо БД)
  const [isHidden, setIsHidden] = useState(product.isHidden || false);

  // 🔄 Функция переключения состояния
  const toggleVisibility = () => {
    setIsHidden(!isHidden);
    console.log(`Товар ID ${product.id} теперь ${!isHidden ? "СКРЫТ" : "ВИДЕН"}`);
  };

  return (
    <Card style={styles.card}>
  
      <TouchableOpacity style={styles.deleteBtn} onPress={() => onDelete(product.id)}>
        <Ionicons name="close-circle-outline" size={24} color="white" />
      </TouchableOpacity>

      
      <TouchableOpacity
        style={[styles.eyeBtn, { backgroundColor: isHidden ? "#F44336" : "#4CAF50" }]}
        onPress={toggleVisibility}
      >
        <Ionicons name={isHidden ? "eye-off-outline" : "eye-outline"} size={30} color="white" />
      </TouchableOpacity>

      <View style={styles.row}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.subText}>ID: {product.id}</Text>
          <Text style={styles.category}>Категория: {product.category?.name}</Text>
          <Text style={styles.category}>Цена: {product.price}₴</Text>
          <Text style={styles.quantity}>
            На складе: {product.stock ?? 0} | В магазинах: {product.store ?? 0}
          </Text>
        </View>

        <View style={styles.rightColumn}>
          <Text style={styles.progressText}>{product.popularity}% популярность</Text>
          <Button style={styles.changeBtn} mode="contained" onPress={() => onEdit(product)}>Изменить</Button>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#fff",
    elevation: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftColumn: {
    flex: 2,
    padding: 10,
  },
  rightColumn: {
    flex: 1,
    alignItems: "flex-end",
    padding: 10,
    justifyContent: "center",
    backgroundColor:'#0099FF'
  },
  title: {
    padding:15,
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: "gray",
  },
  category: {
    fontSize: 14,
    marginTop: 5,
  },
  quantity: {
    fontSize: 14,
    marginTop: 5,
    color: "#4CAF50",
  },
  progressText: {
    fontSize: 12,
    marginTop: 5,
  },
  deleteBtn: {
    position: "absolute",
    top: 5,
    left: 5,
    backgroundColor: "#F87474",
    borderRadius: 20,
   
    justifyContent: "center",
    alignItems: "center",
  
  },
  eyeBtn: {
    position: "absolute",
    top: 5,
    right: 5,
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  changeBtn: {
    backgroundColor: "#FFB562",
    color: "#FFF",
  },
});
 */}

 
 import { useRouter } from "expo-router";
 import React from "react";
 import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
 import { IconButton } from "react-native-paper";
 
 export default function ProductCard({ product, onToggleVisibility }) {
   const router = useRouter();
 
   return (
     <TouchableOpacity
       style={styles.card}
       onPress={() => router.push(`/product/${product.id}`)}
     >
       <View style={styles.left}>
         <Text style={styles.name}>{product.name}</Text>
         <Text style={styles.details}>
           ID: {product.id} | Цена: {product.price}₴ | Остаток: {product.stock}
         </Text>
       </View>
       <View style={styles.right}>
         <IconButton
           icon="eye-off-outline"
           onPress={(event) => {
             event.stopPropagation(); // 🔹 Остановить всплытие клика
             onToggleVisibility();
           }}
         />
         <IconButton
           icon="pencil"
           onPress={(event) => {
             event.stopPropagation(); // 🔹 Остановить всплытие клика
             router.push(`/product/${product.id}/edit`);
           }}
         />
       </View>
     </TouchableOpacity>
   );
 }
 
 const styles = StyleSheet.create({
   card: {
     flexDirection: "row",
     alignItems: "center",
     padding: 12,
     borderBottomWidth: 1,
     borderColor: "#ddd",
     backgroundColor: "#fff",
   },
   left: {
     flex: 1,
   },
   name: {
     fontSize: 16,
     fontWeight: "bold",
   },
   details: {
     fontSize: 14,
     color: "#555",
   },
   right: {
     flexDirection: "row",
     alignItems: "center",
   },
 });
 