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
            Кто мы, наш подход и чем Madera Design отличается от других.
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

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('MaterialsScreen')}
        >
          <Text style={styles.itemTitle}>Материалы</Text>
          <Text style={styles.itemText}>
            ЛДСП (Россия), МДФ (Турция), фурнитура российских производителей и Blum.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('DocumentsScreen')}
        >
          <Text style={styles.itemTitle}>Документы</Text>
          <Text style={styles.itemText}>
            Договор, акт приёма-передачи, гарантийный талон и юридические условия.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('CreditScreen')}
        >
          <Text style={styles.itemTitle}>Оформить кредит</Text>
          <Text style={styles.itemText}>
            Калькулятор рассрочки: до 6, 12 или 18 месяцев с учётом процентов.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('PaymentTermsScreen')}
        >
          <Text style={styles.itemTitle}>Условия оплаты</Text>
          <Text style={styles.itemText}>
            Безналичная оплата, 100% предоплата, оплата замера и подтверждение платежей.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('PromotionsScreen')}
        >
          <Text style={styles.itemTitle}>Акции</Text>
          <Text style={styles.itemText}>
            Специальные предложения, сезонные скидки и выгоды для клиентов.
          </Text>
        </TouchableOpacity>

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
  itemTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
