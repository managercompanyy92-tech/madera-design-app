import { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const TERMS = [
  { id: '6', label: 'До 6 месяцев', months: 6, percent: 10 },
  { id: '12', label: 'До 12 месяцев', months: 12, percent: 20 },
  { id: '18', label: 'До 18 месяцев', months: 18, percent: 30 }
];

export default function CreditScreen() {
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('6');

  const selected = TERMS.find((t) => t.id === term);
  const baseAmount = parseFloat(amount.replace(',', '.')) || 0;

  const extra = baseAmount * (selected.percent / 100);
  const total = baseAmount + extra;
  const monthly = selected.months > 0 ? total / selected.months : 0;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Оформить кредит / рассрочку</Text>

      <Text style={styles.paragraph}>
        Вы можете оформить оплату частями. Выберите срок и посмотрите, как изменится сумма и ежемесячный платёж.
      </Text>

      <Text style={styles.blockTitle}>Сумма заказа (сомони)</Text>
      <TextInput
        style={styles.input}
        placeholder="Например: 20000"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Text style={styles.blockTitle}>Срок кредита</Text>

      <View style={styles.terms}>
        {TERMS.map((t) => (
          <TouchableOpacity
            key={t.id}
            style={[
              styles.termCard,
              term === t.id && styles.termCardActive
            ]}
            onPress={() => setTerm(t.id)}
          >
            <Text style={styles.termLabel}>{t.label}</Text>
            <Text style={styles.termPercent}>Переплата: {t.percent}%</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.resultBox}>
        <Text style={styles.resultRow}>
          <Text style={styles.resultLabel}>Сумма заказа: </Text>
          <Text style={styles.resultValue}>
            {baseAmount > 0 ? `${baseAmount.toFixed(2)} c` : '—'}
          </Text>
        </Text>

        <Text style={styles.resultRow}>
          <Text style={styles.resultLabel}>Переплата: </Text>
          <Text style={styles.resultValue}>
            {baseAmount > 0 ? `${extra.toFixed(2)} c` : '—'}
          </Text>
        </Text>

        <Text style={styles.resultRow}>
          <Text style={styles.resultLabel}>Итого к оплате: </Text>
          <Text style={styles.resultValue}>
            {baseAmount > 0 ? `${total.toFixed(2)} c` : '—'}
          </Text>
        </Text>

        <Text style={styles.resultRow}>
          <Text style={styles.resultLabel}>Ежемесячный платёж: </Text>
          <Text style={styles.resultValue}>
            {baseAmount > 0 ? `${monthly.toFixed(2)} c` : '—'}
          </Text>
        </Text>
      </View>

      <Text style={styles.note}>
        Точные условия оформления кредита уточняются с менеджером. 
        Калькулятор показывает ориентировочные значения.
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
    marginBottom: 12
  },
  paragraph: {
    color: '#CCCCCC',
    fontSize: 14,
    marginBottom: 18,
    lineHeight: 20
  },
  blockTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 8
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
  terms: {
    marginBottom: 20,
    gap: 10
  },
  termCard: {
    backgroundColor: '#3A3A3A',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#444'
  },
  termCardActive: {
    borderColor: '#D4B89B'
  },
  termLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  termPercent: {
    color: '#CCCCCC',
    fontSize: 13
  },
  resultBox: {
    backgroundColor: '#3A3A3A',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#444',
    marginTop: 10
  },
  resultRow: {
    marginBottom: 6
  },
  resultLabel: {
    color: '#CCCCCC',
    fontSize: 14
  },
  resultValue: {
    color: '#D4B89B',
    fontSize: 15,
    fontWeight: 'bold'
  },
  note: {
    color: '#AAAAAA',
    fontSize: 12,
    marginTop: 10
  }
});
