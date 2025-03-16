import React, { useState } from 'react';
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import logo from '../../assets/images/logo.png'

// Подключаем локальные изображения
const banners = [
    { id: '1', image: require('../../assets/images/banners/1.jpg') },
    { id: '2', image: require('../../assets/images/banners/2.jpg') },
    { id: '3', image: require('../../assets/images/banners/3.jpg') },
    { id: '4', image: require('../../assets/images/banners/4.jpg') },
    { id: '5', image: require('../../assets/images/banners/5.jpg') },
    { id: '6', image: require('../../assets/images/banners/6.jpg') },
    { id: '7', image: require('../../assets/images/banners/7.jpg') },
    { id: '8', image: require('../../assets/images/banners/8.jpg') },
    { id: '9', image: require('../../assets/images/banners/9.jpg') },
    { id: '10', image: require('../../assets/images/banners/10.jpg') },


  
];

const { width } = Dimensions.get('window');

const BannerSlider = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
   {/**  <View style={styles.container}>*/}
      <Carousel
        width={width}
        height={420}
        data={banners}
        autoPlay={true} // 🔥 Автоперелистывание
        autoPlayInterval={2500} // 🔥 Интервал 1 секунда
        loop={true} // 🔄 Бесконечный режим
        scrollAnimationDuration={600} // Длительность анимации
        pagingEnabled={true} // 📌 Включаем пагинацию
        mode="horizontal" // 🔥 Убеждаемся, что режим горизонтальный
        onSnapToItem={(index)  => setIndex(index)}
          renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
        
          </View>
        )}
      />
      {/* Индикаторы пагинации */}
      <View style={styles.dotsContainer}>
        {banners.map((_, i) => (
          <View
            key={i}
         //   style={[styles.dot, index === i ? styles.activeDot : styles.inactiveDot]}
          />
        ))}
      </View>   <View style={styles.logoContainer}>
                  //<Image source={logo} style={styles.logo} />
                  <Text style={styles.logoText}>EXPO FISH</Text>
                </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
  //  alignItems: 'center',
  
   
  },
  slide: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height:600,
    resizeMode: 'cover',

  },
  text: {
    position: 'absolute',
    bottom: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#0099FF',
  },
  inactiveDot: {
    backgroundColor: '#D3D3D3',
  },
  image_logo:{
    width:40,
    height:40
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
    backgroundColor: '#0099FF',
  }, logo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
  },
  image_logo_bg:{
backgroundColor:'lightblue'
  },
  
});

export default BannerSlider;
