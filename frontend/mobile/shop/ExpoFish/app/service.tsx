import Header from '@/components/ui/Header';
import { Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function ServiceScreen() {
  return (
<>
<Stack.Screen options={{ headerShown: false }} /> {/* Скрываем заголовок */}
<Header title='Сервисный центр' />
<View style={styles.container}>
 
 <Text style={styles.sectionTitle}>Телефон:
</Text>
 <Text style={styles.contact}>(044) 495-50-99</Text>

 <Text style={styles.sectionTitle}>Пункт обслуживания клиентов:
</Text>
 <Text style={styles.contact}>Киев, ул. Європейская, 13</Text>



 <Text style={styles.sectionTitle}>
Виды услуг, которые можно найти в Сервисном центре:
</Text>
 <Text style={styles.contact}><Text style={styles.dot}>𓆟</Text> Гарантийное и послегарантийное обслуживание котушек ТМ Експо Фиш;</Text>
 <Text style={styles.contact}><Text style={styles.dot}>𓆟</Text>  Техническое обслуживание рыболовных котушек</Text>
 <Text style={styles.contact}><Text style={styles.dot}>𓆟</Text>Ремонт влажных помещений, перемотка шнуров, замена плиток и керамических вставок потолков</Text>
 <Text style={styles.contact}><Text style={styles.dot}>𓆟</Text>  Продажи комплектующих и запасных частей</Text>
 <Text style={styles.contact}><Text style={styles.dot}>𓆟</Text> Сервисный центр по ремонту спиннинговых, фидерных, болонских, поплавочных, кароповых удлищ. Удаление и замена вложенных элементов.</Text>
 <Text></Text>
 <Text style={styles.contact}>Все заявки рассматриваются по очереди.</Text>

 <Text style={styles.sectionTitle}>График работы:</Text>
 <Text style={styles.contact}>Пн-Пт: 09:00—18:00</Text>
 <Text style={styles.contact}>Сб: 09:00—17:00</Text>
 
 <Text style={styles.sectionTitle}>Почта:</Text>
 <Text style={styles.contact}>remont.expofish@gmail.com </Text>
</View>
</>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
backgroundColor: '#f9f9f9',
},
text: {
fontSize: 16,
color: '#333',
marginBottom: 10,
textAlign: 'center',
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
color: '#007AFF',
marginTop: 15,
},
contact: {
fontSize: 16,
color: '#555',
marginVertical: 2,
},
dot:{
  color:'#007AFF',
  fontWeight:'600',
  fontSize:20,
  padding:3
}
});


