import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function WorksScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Наши работы</Text>

      <Text style={styles.paragraph}>
        Здесь будут собраны реальные проекты Madera Design: кухни, гардеробные, спальни и другие 
        зоны, которые мы реализовали в квартирах и домах города Душанбе.
      </Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          После выполнения первых заказов вы сможете добавлять сюда фото и видео ваших работ: 
          до/после, детали фурнитуры, планировки и интересные решения.
        </Text>
      </View>

      <Text style={styles.paragraphLast}>
        Раздел «Наши работы» помогает клиентам увидеть живые примеры и вдохновиться реальными 
        интерьерами, выполненными командой Madera Design.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2B2B2B',
    paddingHorizontal: 20,
    paddingVertical: 24,
    flexGrow: 1
  },
  title: {
    color: '#D4B89B',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  paragraph: {
    color: '#CCCCCC',
    fontSize: 14,
    marginBottom: 14,
    lineHeight: 20
  },
  infoBox: {
    backgroundColor: '#3A3A3A',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#444',
    marginBottom: 14
  },
  infoText: {
    color: '#DDDDDD',
    fontSize: 13,
    lineHeight: 19
  },
  paragraphLast: {
    color: '#DDDDDD',
    fontSize: 14,
    marginTop: 4,
    lineHeight: 20
  }
});
