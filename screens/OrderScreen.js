import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const OPTIONS = {
  basic: {
    label: 'Корпус ЛДСП (Россия) + фасады ЛДСП',
    price: 4000,
    description:
      'Фурнитура Blum или аналоги российских брендов. Для кухонь столешница влагостойкая.'
  },
  premium: {
    label: 'Корпус ЛДСП (Россия) + фасады МДФ (Турция)',
    price: 5000,
    description:
      'Фурнитура премиального уровня. Для кухонь столешница влагостойкая.'
  }
};

export default function OrderScreen() {
  const [option, setOption] = useState('basic');
  const [meters, setMeters] = useState('');
  const pricePerMeter = OPTIONS[option].price;

  const metersNumber = parseFloat(meters.replace(',', '.')) || 0;
  const total = metersNumber * pricePerMeter;

  const isBelowMin = metersNumber > 0 && metersNumber < 3;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Расчёт стоимости</Text>

      <Text style={styles.note}>
        Минимальный заказ — от 3 погонных метров. Заказы меньше 3 метров не принимаются.
      </Text>

      {/* Варианты исполнения */}
      <Text style={styles.blockTitle}>Выберите вариант исполнения</Text>

      <View style={styles.options}>
        {Object.entries(OPTIONS).map(([key, opt]) => (
          <TouchableOpacity
            key={key}
            style={[
              styles.optionCard,
              option === key && styles.optionCardActive
            ]}
            onPress={() => setOption(key)}
          >
            <Text style={styles.optionTitle}>{opt.label}</Text>
            <Text style={styles.optionPrice}>{opt.price} c/п.м.</Text>
            <Text style={styles.optionDesc}>{opt.description}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Длина кухни / мебели */}
      <Text style={styles.blockTitle}>Сколько погонных метров?</Text>

      <TextInput
        style={styles.input}
        placeholder="Например: 4.5"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={meters}
        onChangeText={setMeters}
      />

      {isBelowMin && (
        <Text style={styles.warning}>
          Мы принимаем заказы только от 3 погонных метров.
        </Text>
      )}

      {/* Итог */}
      <View style={styles.resultBox}>
        <Text style={styles.resultLabel}>Ориентировочная стоимость:</Text>
        <Text style={styles.resultValue}>
          {total > 0 ? `${total.toFixed(2)} сомони` : '—'}
        </Text>
        <Text style={styles.resultNote}>
          Точная стоимость уточняется после замера и финального дизайн-проекта.
        </Text>
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
  note: {
    color: '#CCCCCC',
    fontSize: 14,
    marginBottom: 20
  },
  blockTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10
  },
  options: {
    marginBottom: 20,
    gap: 10
  },
  optionCard: {
    backgroundColor: '#3A3A3A',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#444'
  },
  optionCardActive: {
    borderColor: '#D4B89B'
  },
  optionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  optionPrice: {
    color: '#D4B89B',
    fontSize: 14,
    marginBottom: 4
  },
  optionDesc: {
    color: '#CCCCCC',
    fontSize: 13
  },
  input: {
    backgroundColor: '#3A3A3A',
    color: '#FFFFFF',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#555',
    marginBottom: 10
  },
  warning: {
    color: '#FFCC66',
    fontSize: 13,
    marginBottom: 12
  },
  resultBox: {
    backgroundColor: '#3A3A3A',
    borderRadius: 14,
    padding: 16,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#444'
  },
  resultLabel: {
    color: '#CCCCCC',
    fontSize: 14,
    marginBottom: 6
  },
  resultValue: {
    color: '#D4B89B',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6
  },
  resultNote: {
    color: '#AAAAAA',
    fontSize: 12
  }
});
