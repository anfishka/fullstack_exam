import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import BannerSlider from '@/components/ui/BannerSlider';
import ProductCard from '@/app/utils/ProductCard';
import CarouselTest from '@/components/ui/BannerSlider';
import Header from '@/components/ui/Header';
import ProductList from '../utils/ProductList';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function HomeScreen() {
  return (   <SafeAreaView style={{ flex: 1,  }}> 
  <Header/>
     <BannerSlider />
     
<ProductList/>

     
  
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
