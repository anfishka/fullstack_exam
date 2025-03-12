import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  isHit?: boolean;
  isNew?: boolean;
  isSpecialOffer?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, isHit, isNew, isSpecialOffer }) => {
  return (
    <View style={styles.card}>
      {/* Бейджи */}
      <View style={styles.badgeContainer}>
        {isSpecialOffer && <View style={[styles.badge, styles.specialPriceBadge]}><Text style={styles.badgeText}>СУПЕРЦЕНА</Text></View>}
        {isNew && <View style={[styles.badge, styles.newBadge]}><Text style={styles.badgeText}>НОВИНКА</Text></View>}
        {isHit && <View style={[styles.badge, styles.hitBadge]}><Text style={styles.badgeText}>ХИТ</Text></View>}
      </View>

      {/* Изображение */}
      <Image source={{ uri: image }} style={styles.image} />

      {/* Текст */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price} ₴</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 7,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: 180,
    height: 200,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // Тень для Android
  },
  badgeContainer: {
    position: 'absolute',
    top: 5,
    left: 5,
    flexDirection: 'column', // Располагаем бейджи вертикально
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 5,
    marginBottom: 3, // Отступ между бейджами
  },
  hitBadge: {
    backgroundColor: '#FF8000',
  },
  newBadge: {
    backgroundColor: '#007BFF',
  },
  specialPriceBadge: {
    backgroundColor: '#A020F0',
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default ProductCard;
