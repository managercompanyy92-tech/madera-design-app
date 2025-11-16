import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.hello}>Добро пожаловать в Madera Design</Text>
      <Text style={styles.subtitle}>
        Мебель, которая меняет пространство и впечатляет с первого взгляда.
      </Text>

      {/* Быстрые действия */}
      <View style={styles.quickActions}>
        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate('Catalog')}
        >
          <Text style={styles.actionTitle}>Каталог</Text>
          <Text style={styles.actionText}>
            Посмотрите идеи современных кухонь, спален и гостиных.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate('Order')}
        >
          <Text style={styles.actionTitle}>Рассчитать стоимость</Text>
          <Text style={styles.actionText}>
            Узнайте ориентировочную стоимость мебели за пару минут.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate('WorksScreen')}
        >
          <Text style={styles.actionTitle}>Наши работы</Text>
          <Text style={styles.actionText}>
            В будущем здесь будут реальные проекты, выполненные для клиентов в Душанбе.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => {
            // Здесь позже можно будет открыть WhatsApp или Telegram
          }}
        >
          <Text style={styles.actionTitle}>Онлайн-консультация</Text>
          <Text style={styles.actionText}>
            Получите ответы на вопросы по вашему интерьеру и заказу.
          </Text>
        </TouchableOpacity>
      </View>

      {/* Баннер партнёрской программы */}
      <View style={styles.partnerBanner}>
        <Text style={styles.partnerTitle}>Партнёрская программа</Text>
        <Text style={styles.partnerText}>
          Приводите клиентов и зарабатывайте{' '}
          <Text style={{ fontWeight: 'bold' }}>5% от суммы каждого заказа.</Text>
        </Text>
        <TouchableOpacity
          style={styles.partnerButton}
          onPress={() => navigation.navigate('PartnersScreen')}
        >
          <Text style={styles.partnerButtonText}>Стать партнёром</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#2B2B2B',
    flexGrow: 1
  },
  hello: {
    color: '#D4B89B',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left'
  },
  subtitle: {
    color: '#CCCCCC',
    fontSize: 16,
    marginBottom: 25
  },
  quickActions: {
    marginBottom: 30,
    gap: 12
  },
  actionCard: {
    backgroundColor: '#3A3A3A',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#444'
  },
  actionTitle: {
    color: '#D4B89B',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6
  },
  actionText: {
    color: '#DDDDDD',
    fontSize: 14
  },
  partnerBanner: {
    backgroundColor: '#D4B89B',
    borderRadius: 18,
    padding: 18,
    marginBottom: 20
  },
  partnerTitle: {
    color: '#2B2B2B',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6
  },
  partnerText: {
    color: '#2B2B2B',
    fontSize: 14,
    marginBottom: 10
  },
  partnerButton: {
    backgroundColor: '#2B2B2B',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  partnerButtonText: {
    color: '#D4B89B',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
