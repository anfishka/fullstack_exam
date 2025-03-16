import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import logo from '../../assets/images/logo.png';

interface HeaderProps {
  title?: string; // Если передан, отключаем поиск
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState('');

  // Если есть заголовок, просто показываем его и ничего больше
  if (title) {
    return (
      <View style={styles.header}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    );
  }

  return (
    <View style={styles.header}>
      {/* Если поиск открыт */}
      {isSearchOpen ? (
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Поиск по каталогу..."
            placeholderTextColor="#999"
            value={search}
            onChangeText={setSearch}
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch('')}>
              <Ionicons name="close-circle" size={20} color="gray" style={styles.icon} />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => setIsSearchOpen(false)}>
            <Ionicons name="close" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ) : (
        // Если поиск закрыт, показываем логотип и иконку поиска
        <>
          <View style={styles.logoContainer}>
            //<Image source={logo} style={styles.logo} />
            <Text style={styles.logoText}>EXPO FISH</Text>
          </View>
          <TouchableOpacity onPress={() => setIsSearchOpen(true)}>
            <Ionicons name="search" size={24} color="white" style={styles.search} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: '#0099FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  logo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingHorizontal: 10,
    height: 40,
    flex: 1,
  },
  input: {
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  icon: {
    marginHorizontal: 5,
  },
  logoText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 24,
    fontFamily: 'System', // Используем встроенный шрифт
    letterSpacing: 2, // Раздвигаем буквы для схожести
    textTransform: 'uppercase',
    fontWeight: 'bold', // Жирный текст
    fontStyle: 'italic',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    marginHorizontal: 50,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Header;


