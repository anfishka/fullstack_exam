import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Иконки

export default function DeliveryMethodSelector({ selectedMethod, setSelectedMethod }) {
  const [expanded, setExpanded] = useState(false);
  const animation = new Animated.Value(0);

  const deliveryOptions = ["Новая Почта", "Самовывоз", "Укрпочта", "Курьером по Киеву"];

  useEffect(() => {
    Animated.timing(animation, {
      toValue: expanded ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [expanded]);

  const heightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [50, deliveryOptions.length * 50], // Анимация высоты
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.selectedOption} onPress={() => setExpanded(!expanded)}>
        <Text style={styles.selectedText}>{selectedMethod || "Выберите способ доставки"}</Text>
        <Ionicons name={expanded ? "chevron-up" : "chevron-down"} size={20} color="#555" />
      </TouchableOpacity>

      <Animated.View style={[styles.optionsContainer, { height: heightInterpolation }]}>
        {expanded &&
          deliveryOptions.map((method) => (
            <TouchableOpacity
              key={method}
              style={[
                styles.option,
                selectedMethod === method && styles.selected,
              ]}
              onPress={() => {
                setSelectedMethod(method);
                setExpanded(false); // Скрыть список после выбора
              }}
            >
              <Text style={[styles.optionText, selectedMethod === method && styles.selectedText]}>
                {method}
              </Text>
            </TouchableOpacity>
          ))}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  selectedOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  selectedText: { fontSize: 16, color: "#333" },
  optionsContainer: {
    overflow: "hidden",
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionText: { fontSize: 16, color: "#333" },
  selected: { backgroundColor: "#e0f7ff" },
});
