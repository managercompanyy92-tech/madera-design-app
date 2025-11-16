import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function PromotionsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Акции и специальные предложения</Text>

      <Text style={styles.paragraph}>
        В этом разделе будет размещаться информация о действующих акциях, сезонных скидках 
        и специальных предложениях от Madera Design.
      </Text>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Пример акции</Text>
        <Text style={styles.blockText}>
          • Скидка 10% на кухонные гарнитуры от 5 погонных метров.{'\n'}
          • Подарок — организация внутреннего наполнения гардеробной при заказе полного комплекта квартиры.{'\n'}
          • Специальные условия для постоянных клиентов и партнёров.
        </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Конкретные акции, сроки их проведения и условия участия вы сможете добавлять здесь по мере 
          развития компании. Клиенты будут заходить в раздел «Акции», чтобы не упустить выгодные предложения.
        </Text>
      </View>

      <Text style={styles.paragraphLast}>
        Следите за обновлениями — именно здесь будут появляться самые интересные предложения от Madera Design.
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
    marginTop: 8,
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
  },
  infoBox: {
    backgroundColor: '#3A3A3A',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#555',
    marginBottom: 10
  },
  infoText: {
    color: '#DDDDDD',
    fontSize: 13,
    lineHeight: 19
  }
});
