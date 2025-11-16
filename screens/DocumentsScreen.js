import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function DocumentsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Документы</Text>

      <Text style={styles.paragraph}>
        Мы работаем официально и оформляем все необходимые документы по каждому заказу. 
        Это даёт вам уверенность и прозрачность на каждом этапе.
      </Text>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Договор</Text>
        <Text style={styles.blockText}>
          • Фиксирует состав мебели, материалы, фурнитуру и общую стоимость заказа.{'\n'}
          • Прописывает сроки изготовления, доставки и установки.{'\n'}
          • Содержит условия оплаты и гарантии.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Акт приёма-передачи</Text>
        <Text style={styles.blockText}>
          • Подписывается после установки мебели на объекте.{'\n'}
          • Подтверждает, что вы приняли заказ в полном объёме.{'\n'}
          • Фиксирует отсутствие видимых дефектов или замечаний на момент сдачи.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Гарантийный талон</Text>
        <Text style={styles.blockText}>
          • Содержит сроки гарантийного обслуживания на мебель и фурнитуру.{'\n'}
          • Описывает, какие случаи считаются гарантийными, а какие — нет.{'\n'}
          • Указывает контакты для обращения по гарантии.
        </Text>
      </View>

      <Text style={styles.paragraphLast}>
        Образцы документов будут доступны в приложении для предварительного ознакомления. 
        Перед заключением сделки вы всегда сможете внимательно прочитать все условия.
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
    marginBottom: 16,
    lineHeight: 20
  },
  paragraphLast: {
    color: '#DDDDDD',
    fontSize: 14,
    marginTop: 10,
    lineHeight: 20
  },
  block: {
    backgroundColor: '#3A3A3A',
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#444'
  },
  blockTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6
  },
  blockText: {
    color: '#CCCCCC',
    fontSize: 13,
    lineHeight: 19
  }
});
