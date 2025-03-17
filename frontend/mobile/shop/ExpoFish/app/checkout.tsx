/*import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, Alert, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const NOVA_POSHTA_API_KEY = "cea2c8a0f65bd3ce3926759fe4002282"; // 🔥 Вставь свой API-ключ!

export default function NovaPoshtaSelector() {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [warehouses, setWarehouses] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAreas();
  }, []);

  useEffect(() => {
    if (selectedArea) {
      fetchCities(selectedArea);
    }
  }, [selectedArea]);

  useEffect(() => {
    if (selectedCity) {
      fetchWarehouses(selectedCity);
    }
  }, [selectedCity]);

  // 📌 Получение списка областей
  const fetchAreas = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey: NOVA_POSHTA_API_KEY,
          modelName: "Address",
          calledMethod: "getAreas",
          methodProperties: {},
        }),
      });

      const data = await response.json();
      console.log("📍 Области:", data);

      if (data.success && data.data.length > 0) {
        setAreas(data.data);
      } else {
        Alert.alert("Ошибка", "Не удалось загрузить области.");
      }
    } catch (error) {
      console.error("❌ Ошибка загрузки областей:", error);
      Alert.alert("Ошибка", "Не удалось загрузить области.");
    } finally {
      setLoading(false);
    }
  };

  // 📌 Получение списка городов по области
  const fetchCities = async (areaRef) => {
    setLoading(true);
    try {
      const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey: NOVA_POSHTA_API_KEY,
          modelName: "Address",
          calledMethod: "getCities",
          methodProperties: { AreaRef: areaRef },
        }),
      });

      const data = await response.json();
      console.log("📍 Города:", data);

      if (data.success && data.data.length > 0) {
        setCities(data.data);
      } else {
        Alert.alert("Ошибка", "Не удалось загрузить города.");
      }
    } catch (error) {
      console.error("❌ Ошибка загрузки городов:", error);
      Alert.alert("Ошибка", "Не удалось загрузить города.");
    } finally {
      setLoading(false);
    }
  };

  // 📌 Получение списка отделений по городу
  const fetchWarehouses = async (cityRef) => {
    setLoading(true);
    try {
      const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey: NOVA_POSHTA_API_KEY,
          modelName: "AddressGeneral",
          calledMethod: "getWarehouses",
          methodProperties: { CityRef: cityRef },
        }),
      });

      const data = await response.json();
      console.log("🏢 Отделения:", data);

      if (data.success && data.data.length > 0) {
        setWarehouses(data.data);
      } else {
        Alert.alert("Ошибка", "Не удалось загрузить отделения.");
      }
    } catch (error) {
      console.error("❌ Ошибка загрузки отделений:", error);
      Alert.alert("Ошибка", "Не удалось загрузить отделения.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Выберите область:</Text>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <Picker selectedValue={selectedArea} onValueChange={(value) => setSelectedArea(value)}>
          <Picker.Item label="Выберите область" value="" />
          {areas.map((area) => (
            <Picker.Item key={area.Ref} label={area.Description} value={area.Ref} />
          ))}
        </Picker>
      )}

      <Text style={styles.title}>Выберите город:</Text>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <Picker selectedValue={selectedCity} onValueChange={(value) => setSelectedCity(value)}>
          <Picker.Item label="Выберите город" value="" />
          {cities.map((city) => (
            <Picker.Item key={city.Ref} label={city.Description} value={city.Ref} />
          ))}
        </Picker>
      )}

      <Text style={styles.title}>Выберите отделение:</Text>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <Picker selectedValue={selectedWarehouse} onValueChange={(value) => setSelectedWarehouse(value)}>
          <Picker.Item label="Выберите отделение" value="" />
          {warehouses.map((wh) => (
            <Picker.Item key={wh.Ref} label={wh.Description} value={wh.Ref} />
          ))}
        </Picker>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f8f8" },
  title: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
});
*/
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useCart } from "../components/ui/CartContext";
import { useRouter } from "expo-router";
import DeliveryMethodSelector from "./DeliveryMethodSelector";

const NOVA_POSHTA_API_KEY = "cea2c8a0f65bd3ce3926759fe4002282"; // 🔥 Вставь API-ключ

export default function CheckoutScreen() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  // 🏢 Выбор доставки и оплаты
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [comment, setComment] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [noCall, setNoCall] = useState(false);

  // 📦 API Новой Почты
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [warehouses, setWarehouses] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (deliveryMethod === "Новая Почта") {
      fetchAreas();
    }
  }, [deliveryMethod]);

  useEffect(() => {
    if (selectedArea) {
      fetchCities(selectedArea);
    }
  }, [selectedArea]);

  useEffect(() => {
    if (selectedCity) {
      fetchWarehouses(selectedCity);
    }
  }, [selectedCity]);

  // 📌 Запрос областей
  const fetchAreas = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey: NOVA_POSHTA_API_KEY,
          modelName: "Address",
          calledMethod: "getAreas",
          methodProperties: {},
        }),
      });

      const data = await response.json();
      if (data.success) {
        setAreas(data.data);
      } else {
        Alert.alert("Ошибка", "Не удалось загрузить области.");
      }
    } catch (error) {
      Alert.alert("Ошибка", "Ошибка загрузки областей.");
    } finally {
      setLoading(false);
    }
  };

  // 📌 Запрос городов
  const fetchCities = async (areaRef) => {
    setLoading(true);
    try {
      const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey: NOVA_POSHTA_API_KEY,
          modelName: "Address",
          calledMethod: "getCities",
          methodProperties: { AreaRef: areaRef },
        }),
      });

      const data = await response.json();
      if (data.success) {
        setCities(data.data);
      } else {
        Alert.alert("Ошибка", "Не удалось загрузить города.");
      }
    } catch (error) {
      Alert.alert("Ошибка", "Ошибка загрузки городов.");
    } finally {
      setLoading(false);
    }
  };

  // 📌 Запрос отделений
  const fetchWarehouses = async (cityRef) => {
    setLoading(true);
    try {
      const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey: NOVA_POSHTA_API_KEY,
          modelName: "AddressGeneral",
          calledMethod: "getWarehouses",
          methodProperties: { CityRef: cityRef },
        }),
      });


      const data = await response.json();
      if (data.success) {
        setWarehouses(data.data);
      } else {
        Alert.alert("Ошибка", "Не удалось загрузить отделения.");
      }
    } catch (error) {
      Alert.alert("Ошибка", "Ошибка загрузки отделений.");
    } finally {
      setLoading(false);
    }
  };

  // 📌 Обработчик заказа
  const handleOrder = async () => {
    if (deliveryMethod === "Новая Почта" && (!selectedArea || !selectedCity || !selectedWarehouse)) {
      Alert.alert("Ошибка", "Выберите область, город и отделение.");
      return;
    }
    const orderData = {
      userId: "1",
      deliveryMethod,
      address: `${areas.find(a => a.Ref === selectedArea)?.Description || ""}, 
                ${cities.find(c => c.Ref === selectedCity)?.Description || ""}, 
                ${warehouses.find(w => w.Ref === selectedWarehouse)?.Description || ""}`, // ✅ Теперь будет текстовый адрес
      totalPrice: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      items: cart.map(item => ({
        productId: item.id,
        productName: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
    };
  
    try {
      const response = await fetch("http://10.0.2.2:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });
  
      console.log("📦 Отправка заказа:", JSON.stringify(orderData, null, 2));

      const result = await response.json();
      console.log("📩 Ответ от сервера:", result);
      Alert.alert("Успешно", "Заказ оформлен!");
      clearCart();
      router.push("/"); 
    } catch (error) {
      Alert.alert("Ошибка", "Не удалось оформить заказ");
    }
  };

  return (
    <View style={styles.container}>
    {/* Выбор способа доставки */}
    <Text style={styles.sectionTitle}>Способ доставки:</Text>
    <DeliveryMethodSelector selectedMethod={deliveryMethod} setSelectedMethod={setDeliveryMethod} />
  
    {/* Если выбрана "Новая Почта" - показываем выбор области, города, отделения */}
    {deliveryMethod === "Новая Почта" && (
      <>
        <Text style={styles.sectionTitle}>Выберите область:</Text>
        <Picker selectedValue={selectedArea} onValueChange={(value) => setSelectedArea(value)}>
          <Picker.Item label="Выберите область" value="" />
          {areas.map((area) => (
            <Picker.Item key={area.Ref} label={area.Description} value={area.Ref} />
          ))}
        </Picker>
  
        <Text style={styles.sectionTitle}>Выберите город:</Text>
        <Picker selectedValue={selectedCity} onValueChange={(value) => setSelectedCity(value)}>
          <Picker.Item label="Выберите город" value="" />
          {cities.map((city) => (
            <Picker.Item key={city.Ref} label={city.Description} value={city.Ref} />
          ))}
        </Picker>
  
        <Text style={styles.sectionTitle}>Выберите отделение:</Text>
        <Picker selectedValue={selectedWarehouse} onValueChange={(value) => setSelectedWarehouse(value)}>
          <Picker.Item label="Выберите отделение" value="" />
          {warehouses.map((wh) => (
            <Picker.Item key={wh.Ref} label={wh.Description} value={wh.Ref} />
          ))}
        </Picker>
      </>
    )}
  
    {/* Кнопка оформления заказа */}
    <TouchableOpacity style={styles.orderButton} onPress={handleOrder}>
  <Text style={styles.orderButtonText}>Оформить заказ</Text>
</TouchableOpacity>


  </View>)
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f8f8" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  orderButton: { backgroundColor: "#0099FF", padding: 15, borderRadius: 5, marginTop: 20 },
  orderButtonText: { color: "white", textAlign: "center", fontSize: 18, fontWeight: "bold" },
});
