import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function MoreScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Дополнительно</Text>
      <Text style={styles.subtitle}>
        Здесь собраны важные разделы о компании, условиях и сервисе.
      </Text>

      <View style={styles.list}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('TimelineScreen')}
        >
          <Text style={styles.itemTitle}>Сроки выполнения</Text>
          <Text style={styles.itemText}>
            Узнайте, за какой срок мы изготовим и установим вашу мебель.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('AboutScreen')}
        >
          <Text style={styles.itemTitle}>О компании</Text>
          <Text style={styles.itemText}>
            Узнайте, кто мы, в чём наш подход и чем Madera Design отличается от других.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('PartnersScreen')}
        >
          <Text style={styles.itemTitle}>Партнёрская программа</Text>
          <Text style={styles.itemText}>
            Условия партнёрства и выплаты 5% за каждого привлечённого клиента.
          </Text>
        </TouchableOpacity>

        <View style={styles.itemDisabled}>
          <Text style={styles.itemTitle}>Оформить кредит</Text>
          <Text style={styles.itemText}>
            Расчёт рассрочки и условий оплаты (будет добавлено).
          </Text>
        </View>

        <View style={styles.itemDisabled}>
          <Text style={styles.itemTitle}>Документы</Text>
          <Text style={styles.itemText}>
            Договор, акт приёма-передачи, гарантийный талон (будет добавлено).
          </Text>
        </View>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('ContactsScreen')}
        >
          <Text style={styles.itemTitle}>Контакты</Text>
          <Text style={styles.itemText}>
            Телефон, WhatsApp, Telegram, Instagram и Facebook для связи с нами.
          </Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 20
  },
  list: {
    gap: 12
  },
  item: {
    backgroundColor: '#3A3A3A',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#D4B89B'
  },
  itemDisabled: {
    backgroundColor: '#3A3A3A',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#444'
  },
  itemTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  itemText: {
    color: '#CCCCCC',
    fontSize: 13
  }
});
