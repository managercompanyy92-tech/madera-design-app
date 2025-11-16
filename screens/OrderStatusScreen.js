import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function OrderStatusScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Статус заказов</Text>

      <Text style={styles.paragraph}>
        В этом разделе вы будете видеть все свои заказы и на каком этапе находится каждый из них —
        от замера и дизайн-проекта до установки мебели.
      </Text>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Этапы выполнения заказа</Text>
        <Text style={styles.blockText}>
          • Заявка принята — менеджер связался с вами и уточнил детали.{'\n'}
          • Замер выполнен — получены точные размеры вашего помещения.{'\n'}
          • Дизайн-проект согласован — утверждена финальная конфигурация мебели.{'\n'}
          • Производство — детали раскроены, кромкованы и собираются на производстве.{'\n'}
          • Доставка — мебель доставляется на объект.{'\n'}
          • Монтаж — происходит установка и финальная регулировка.{'\n'}
          • Заказ завершён — подписан акт приёма-передачи и вы пользуетесь мебелью.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Фото- и видеоотчёт</Text>
        <Text style={styles.blockText}>
          На основных этапах (производство, доставка, монтаж) вы сможете получать краткие отчёты 
          по своему заказу: фотографии, видео и комментарии от команды.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>В будущем здесь будет</Text>
        <Text style={styles.blockText}>
          • Список ваших заказов с номерами и датами.{'\n'}
          • Индикатор прогресса по каждому заказу (процент выполнения).{'\n'}
          • Комментарии от менеджера и монтажников.{'\n'}
          • Быстрый переход в чат по конкретному заказу.
        </Text>
      </View>

      <Text style={styles.paragraphLast}>
        Этот экран — основа для цифрового сопровождения заказа. Со временем здесь появится 
        интеграция с внутренней системой, чтобы вы могли в реальном времени видеть, на какой 
        стадии находится ваша мебель.
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
