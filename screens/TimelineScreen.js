import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function TimelineScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Сроки выполнения заказа</Text>

      <Text style={styles.text}>
        Мы заранее планируем производство, чтобы вы чётко понимали, когда получите свою мебель.
        Суббота и воскресенье — выходные и не считаются рабочими днями.
      </Text>

      <Text style={styles.blockTitle}>Кухни и отдельные зоны</Text>
      <View style={styles.box}>
        <Text style={styles.row}>От 3 до 6 погонных метров — <Text style={styles.bold}>15 рабочих дней</Text></Text>
        <Text style={styles.row}>От 6 до 9 погонных метров — <Text style={styles.bold}>20 рабочих дней</Text></Text>
        <Text style={styles.row}>От 9 до 12 погонных метров — <Text style={styles.bold}>25 рабочих дней</Text></Text>
      </View>

      <Text style={styles.blockTitle}>Полный комплект квартиры</Text>
      <View style={styles.box}>
        <Text style={styles.row}>Квартиры до 70 м² — <Text style={styles.bold}>30 рабочих дней</Text></Text>
        <Text style={styles.row}>От 70 до 100 м² — <Text style={styles.bold}>40 рабочих дней</Text></Text>
        <Text style={styles.row}>От 100 до 130 м² — <Text style={styles.bold}>50 рабочих дней</Text></Text>
        <Text style={styles.row}>От 130 м² и выше — <Text style={styles.bold}>срок обсуждается индивидуально</Text></Text>
      </View>

      <Text style={styles.note}>
        На следующем этапе мы добавим интерактивный календарь, где вы сможете видеть примерную дату 
        доставки и установки с учётом выбранного объёма работ.
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
  text: {
    color: '#CCCCCC',
    fontSize: 14,
    marginBottom: 18
  },
  blockTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 10
  },
  box: {
    backgroundColor: '#3A3A3A',
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#444'
  },
  row: {
    color: '#DDDDDD',
    fontSize: 14,
    marginBottom: 6
  },
  bold: {
    fontWeight: 'bold',
    color: '#D4B89B'
  },
  note: {
    color: '#AAAAAA',
    fontSize: 12,
    marginTop: 10
  }
});
