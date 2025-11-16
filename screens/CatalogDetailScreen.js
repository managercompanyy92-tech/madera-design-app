import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function CatalogDetailScreen({ route, navigation }) {
  const { item } = route.params || {};

  if (!item) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          Идея не найдена. Вернитесь в каталог и выберите вариант ещё раз.
        </Text>
        <TouchableOpacity
          style={styles.fallbackButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.fallbackButtonText}>Вернуться в каталог</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {item.image && (
        <Image
          source={item.image}
          style={styles.image}
          resizeMode="cover"
        />
      )}

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
      <Text style={styles.description}>{item.description}</Text>

      <Text style={styles.notice}>
        Важно: это пример дизайн-идеи, а не фотография нашей выполненной работы.
        Мы можем адаптировать эту концепцию под размеры и стиль вашей квартиры.
      </Text>

      <View style={styles.buttonsRow}>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Order')}
        >
          <Text style={styles.secondaryButtonText}>Рассчитать стоимость</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Order')}
        >
          <Text style={styles.primaryButtonText}>Заказать</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.backLink}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backLinkText}>← Вернуться в каталог</Text>
      </TouchableOpacity>
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
  image: {
    width: '100%',
    height: 320,
    borderRadius: 16,
    marginBottom: 16
  },
  title: {
    color: '#D4B89B',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 15,
    marginBottom: 10
  },
  description: {
    color: '#CCCCCC',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12
  },
  notice: {
    color: '#AAAAAA',
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 18
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 18
  },
  secondaryButton: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D4B89B',
    paddingVertical: 12,
    alignItems: 'center'
  },
  secondaryButtonText: {
    color: '#D4B89B',
    fontSize: 14,
    fontWeight: 'bold'
  },
  primaryButton: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#D4B89B',
    paddingVertical: 12,
    alignItems: 'center'
  },
  primaryButtonText: {
    color: '#2B2B2B',
    fontSize: 14,
    fontWeight: 'bold'
  },
  backLink: {
    marginTop: 4
  },
  backLinkText: {
    color: '#D4B89B',
    fontSize: 13
  },
  fallbackContainer: {
    flex: 1,
    backgroundColor: '#2B2B2B',
    paddingHorizontal: 20,
    paddingVertical: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fallbackText: {
    color: '#CCCCCC',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 14
  },
  fallbackButton: {
    backgroundColor: '#D4B89B',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18
  },
  fallbackButtonText: {
    color: '#2B2B2B',
    fontSize: 14,
    fontWeight: 'bold'
  }
});
