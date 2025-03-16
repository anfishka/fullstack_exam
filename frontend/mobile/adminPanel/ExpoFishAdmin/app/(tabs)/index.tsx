{/**
  import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

  
  */}

  import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import BannerSlider from "@/components/ui/BannerSlider";


const API_URL = "http://10.0.2.2:5071/api/account"; // Убедись, что сервер работает!

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

// 🔹 Регистрация
export const register = async (username, password) => {
    try {
        const response = await api.post("/register", { username, password });
        return response.data;
    } catch (error) {
        return { error: error.response?.data?.message || "Ошибка регистрации" };
    }
};

// 🔹 Логин
export const login = async (username, password) => {
  try {
      console.log("Отправка запроса на вход:", { username, password });

      const response = await api.post("/login", { username, password });

      console.log("Успешный ответ сервера:", response.data);

      const { token } = response.data;
      await AsyncStorage.setItem("token", token);
      api.defaults.headers.Authorization = `Bearer ${token}`;

      return response.data;
  } catch (error) {
      console.error("Ошибка входа:", error.response?.data || error.message);

      return { error: error.response?.data?.message || "Ошибка входа" };
  }
};


// 🔹 Выход
export const logout = async () => {
    await AsyncStorage.removeItem("token");
    api.defaults.headers.Authorization = null;
};

// 🔹 Проверка токена
export const getToken = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
    return token;
};

  const  HomeScreen = ({ navigation }) => {
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
  
      const handleLogin = async () => {
        console.log("Попытка входа с логином:", username, "и паролем:", password);
    
        const response = await login(username, password);
        
        console.log("Ответ сервера:", response);
    
        if (response.error) {
            Alert.alert("Ошибка", response.error);
        } else {
            console.log("Вход успешный! Перенаправление...");
            router.replace("explore");
        }
    };
    
      const handleRegister = async () => {
          const response = await register(username, password);
          if (response.error) {
              Alert.alert("Ошибка", response.error);
          } else {
              Alert.alert("Успех", "Регистрация прошла успешно! Теперь войдите в систему.");
          }
      };
  
      return (
        <>

<BannerSlider/>
  {/*  <View>*/} 
       <View style={styles.container}> 
             
              <TextInput
                  placeholder="Логин"
                  value={username}
                  onChangeText={setUsername}
                  style={styles.input}
              />
              <TextInput
                  placeholder="Пароль"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                  style={styles.input}
              />
               <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Войти</Text>
      </TouchableOpacity>
            {/*    <Button title="Регистрация" onPress={handleRegister} color="gray" />*/} 
          </View>
          </>
      );
  };
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
     // justifyContent: "center",
      padding: 20,
      
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 12,
      marginBottom: 10,
      borderRadius: 25, // Округляем поля ввода
    },
    registerButton: {
      backgroundColor: "#0080FF",
      paddingVertical: 14,
      borderRadius: 25,
      alignItems: "center",
      marginBottom: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 3, // Тень на Android
    },
    registerText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    loginButton: {
      backgroundColor: "#fff",
      paddingVertical: 14,
      borderRadius: 25,
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#0099FF",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    loginText: {
      color: "#0099FF",
      fontSize: 16,
      fontWeight: "bold",
    },
  });
  
  export default HomeScreen;