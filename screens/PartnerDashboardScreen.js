import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function PartnerDashboardScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Партнёрский кабинет</Text>

      <Text style={styles.paragraph}>
        Этот раздел предназначен для партнёров Madera Design. Здесь вы будете видеть статистику
        по своему промокоду, заказы привлечённых клиентов и сумму начисленного вознаграждения.
      </Text>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Ваш промокод</Text>
        <Text style={styles.blockText}>
          В будущем здесь будет отображаться ваш уникальный промокод, которым вы делитесь со своей
          аудиторией, подписчиками и знакомыми.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Статистика по заказам</Text>
        <Text style={styles.blockText}>
          • Количество клиентов, оформивших заказ по вашему промокоду.{'\n'}
          • Перечень заказов: имя клиента, дата оформления, сумма заказа.{'\n'}
          • Статус каждого заказа (в процессе / завершён / отменён).
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Вознаграждение 5%</Text>
        <Text style={styles.blockText}>
          • Общая сумма заказов, оформленных по вашему промокоду.{'\n'}
          • Сумма начисленных 5% вознаграждений.{'\n'}
          • История выплат на вашу карту (дата, сумма, номер заказа).
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Уведомления</Text>
        <Text style={styles.blockText}>
          В будущем партнёрский кабинет сможет показывать уведомления в реальном времени: каждый раз,
          когда клиент оформляет заказ с вашим промокодом, вы будете видеть это здесь и в мессенджере.
        </Text>
      </View>

      <Text style={styles.paragraphLast}>
        На следующем этапе разработки сюда можно будет подключить хранение данных на сервере и
        аналитику, чтобы партнёры в реальном времени видели результат своей работы.
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
  paragraphLast: {
    color: '#DDDDDD',
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20
  }
});
