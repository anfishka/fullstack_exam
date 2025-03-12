import Header from '@/components/ui/Header';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
       <Header title="Профиль" />
      {/* Заголовок */}

      {/* Данные пользователя */}
      <View style={styles.section}>
        <ProfileItem label="Имя" value="Бородина Анна" />
        <ProfileItem label="Телефон" value="380500302347" />
        <ProfileItem label="Email" value="venera131916@gmail.com" />
        <ProfileItem label="Дисконт" value="Новый пользователь" />
        <TouchableOpacity>
          <ProfileItem label="Подписка" value="Нет" arrow />
        </TouchableOpacity>
        <TouchableOpacity>
          <ProfileItem label="Язык" value="Русский" arrow />
        </TouchableOpacity>
      </View>

      {/* Кнопка удаления профиля */}
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteText}>Удалить профиль</Text>
      </TouchableOpacity>

      {/* Кнопка изменения пароля */}
      <TouchableOpacity style={styles.passwordButton}>
        <Ionicons name="lock-closed-outline" size={20} color="white" />
        <Text style={styles.passwordText}>Изменить пароль</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// 📌 **Компонент для строки профиля**
const ProfileItem = ({ label, value, arrow = false }) => (
  <View style={styles.item}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.valueContainer}>
      <Text style={styles.value}>{value}</Text>
      {arrow && <Ionicons name="chevron-forward" size={18} color="gray" />}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  header: {
    backgroundColor: '#0099FF',
    paddingVertical: 15,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  section: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 16,
    color: '#888',
  },
  deleteButton: {
    backgroundColor: 'white',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  deleteText: {
    fontSize: 16,
    color: '#D9534F',
    fontWeight: 'bold',
  },
  passwordButton: {
    flexDirection: 'row',
    backgroundColor: '#0099FF',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  passwordText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default ProfileScreen;
