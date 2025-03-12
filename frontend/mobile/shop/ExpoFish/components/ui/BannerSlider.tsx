import React, { useState } from 'react';
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

// Подключаем локальные изображения
const banners = [
  { id: '1', image: require('../../app/local_storage/banner6.jpg') },
  { id: '2',  image: require('../../app/local_storage/banner2.jpg') },
  { id: '3',  image: require('../../app/local_storage/banner3.jpg') },
  { id: '4',  image: require('../../app/local_storage/banner7.jpg') },
  { id: '5',  image: require('../../app/local_storage/banner5.jpg') },
  { id: '6',  image: require('../../app/local_storage/banner9.jpg') },
];

const { width } = Dimensions.get('window');

const BannerSlider = () => {
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Carousel
        width={width}
        height={170}
        data={banners}
        scrollAnimationDuration={1000}
        loop
        autoplay
        autoplayInterval={3000}
        onSnapToItem={(index) => setIndex(index)}
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
            style={[styles.dot, index === i ? styles.activeDot : styles.inactiveDot]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
   
  },
  slide: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height:160,
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
});

export default BannerSlider;
