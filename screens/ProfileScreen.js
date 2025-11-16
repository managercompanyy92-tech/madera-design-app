import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileScreen({ navigation }) {
  // позже здесь появятся реальные данные пользователя:
  // имя, телефон, промокод, список заказов и т.д.

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Личный кабинет</Text>
      <Text style={styles.subtitle}>
        Здесь вы сможете видеть свои заказы, статус выполнения, а также данные по партнёрской программе.
      </Text>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Мои данные</Text>
        <Text style={styles.blockText}>
          В будущем здесь будут отображаться ваше имя, номер телефона и промокод
          (если вы партнёр Madera Design).
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Мои заказы и статус</Text>
        <Text style={styles.blockText}>
          • История ваших заказов.{'\n'}
          • Этап выполнения: проектирование, производство, доставка, монтаж.{'\n'}
          • Фото- и видеоотчёт о ходе работ по каждому заказу.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('OrderStatusScreen')}
        >
          <Text style={styles.buttonText}>Перейти к статусу заказов</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Партнёрский кабинет</Text>
        <Text style={styles.blockText}>
          • Список клиентов, оформивших заказ по вашему промокоду.{'\n'}
          • Сумма заказов и размер начисленных 5% вознаграждений.{'\n'}
          • История переводов на вашу карту.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PartnersScreen')}
        >
          <Text style={styles.buttonText}>Открыть партнёрский кабинет</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Чат с компанией</Text>
        <Text style={styles.blockText}>
          • Переписка с менеджером по вашему заказу.{'\n'}
          • Возможность отправлять фото, видео и документы.{'\n'}
          • Уточнение деталей по дизайну, материалам и срокам.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // позже здесь можно сделать встроенный чат или переход в WhatsApp/Telegram
          }}
        >
          <Text style={styles.buttonText}>Открыть чат</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.note}>
        На следующем этапе разработки сюда будет добавлена авторизация, реальные данные пользователя,
        список заказов и интеграция с партнёрской системой.
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
    marginBottom: 10
  },
  subtitle: {
    color: '#CCCCCC',
    fontSize: 14,
    marginBottom: 18
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
    lineHeight: 19,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#D4B89B',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 4
  },
  buttonText: {
    color: '#2B2B2B',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  note: {
    color: '#AAAAAA',
    fontSize: 12,
    marginTop: 6
  }
});
