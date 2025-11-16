import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';

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
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [source, setSource] = useState('');
  const [promo, setPromo] = useState('');
  const [comment, setComment] = useState('');

  const pricePerMeter = OPTIONS[option].price;
  const metersNumber = parseFloat(meters.replace(',', '.')) || 0;
  const total = metersNumber * pricePerMeter;
  const isBelowMin = metersNumber > 0 && metersNumber < 3;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Оформить заказ</Text>

      <Text style={styles.note}>
        Мы принимаем заказы от <Text style={styles.bold}>3 погонных метров</Text> и выше.
        Заказы меньше 3 метров не принимаются.
      </Text>

      {/* Блок: калькулятор стоимости */}
      <Text style={styles.blockHeader}>1. Расчёт ориентировочной стоимости</Text>

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

      <View style={styles.resultBox}>
        <Text style={styles.resultLabel}>Ориентировочная стоимость:</Text>
        <Text style={styles.resultValue}>
          {total > 0 ? `${total.toFixed(2)} сомони` : '—'}
        </Text>
        <Text style={styles.resultNote}>
          Точная стоимость уточняется после замера и финального дизайн-проекта.
        </Text>
      </View>

      {/* Блок: важные условия */}
      <Text style={styles.blockHeader}>2. Важные условия и ограничения</Text>

      <View style={styles.box}>
        <Text style={styles.boxTitle}>Мы работаем:</Text>
        <Text style={styles.boxText}>
          • Только с квартирами и частными домами в пределах города Душанбе.{'\n'}
          • Только по 100% предоплате, без частичной оплаты.{'\n'}
          • С обязательным дизайн-проектом (вашим или разработанным нами).
        </Text>

        <Text style={styles.boxTitle}>Мы НЕ принимаем заказы:</Text>
        <Text style={styles.boxText}>
          • Классический стиль и стиль неоклассика.{'\n'}
          • Коммерческие объекты: магазины, офисы, школы, заводы, рестораны и т.д.{'\n'}
          • Заказы меньше 3 погонных метров.{'\n'}
          • За пределами города Душанбе.{'\n'}
          • На переделку/доделку работы других мастеров.{'\n'}
          • На мебель из очень дешёвых материалов «чтобы было подешевле».{'\n'}
          • На металлоконструкции, изделия из массива дерева, мягкую мебель для гостиных.{'\n'}
          • По частичной предоплате.
        </Text>

        <Text style={styles.boxTitle}>Дизайн и замер:</Text>
        <Text style={styles.boxText}>
          • Без дизайн-проекта заказ не принимается.{'\n'}
          • Мы делаем дизайн-проект только для наших подтверждённых заказов.{'\n'}
          • Замер объекта платный — <Text style={styles.bold}>100 сомони</Text>.
        </Text>
      </View>

      {/* Блок: форма заявки */}
      <Text style={styles.blockHeader}>3. Оставить заявку</Text>

      <Text style={styles.blockTitle}>Ваши данные</Text>

      <TextInput
        style={styles.input}
        placeholder="Имя"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Номер телефона"
        placeholderTextColor="#888"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Адрес объекта (район, улица, дом)"
        placeholderTextColor="#888"
        value={address}
        onChangeText={setAddress}
      />

      <Text style={styles.blockTitle}>Откуда вы узнали о нас?</Text>
      <TextInput
        style={styles.input}
        placeholder="Например: Instagram, Facebook, рекомендации, реклама..."
        placeholderTextColor="#888"
        value={source}
        onChangeText={setSource}
      />

      <Text style={styles.blockTitle}>Промокод партнёра (если есть)</Text>
      <TextInput
        style={styles.input}
        placeholder="Введите промокод или оставьте пустым"
        placeholderTextColor="#888"
        value={promo}
        onChangeText={setPromo}
      />

      <Text style={styles.blockTitle}>Комментарий к заказу</Text>
      <TextInput
        style={[styles.input, styles.inputMultiline]}
        placeholder="Кратко опишите задачу, помещение, пожелания по стилю..."
        placeholderTextColor="#888"
        value={comment}
        onChangeText={setComment}
        multiline
        numberOfLines={4}
      />

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          При прямом обращении без промокода партнёра — скидка 5% от общей стоимости заказа.
        </Text>
        <Text style={styles.infoText}>
          Если вы указываете промокод партнёра — скидка 10%, а партнёр получает 5% от суммы заказа.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          // Здесь позже будет отправка заявки на сервер
          // Сейчас это просто визуальная кнопка
        }}
      >
        <Text style={styles.submitButtonText}>Отправить заявку</Text>
      </TouchableOpacity>

      <Text style={styles.bottomNote}>
        Нажимая «Отправить заявку», вы подтверждаете, что согласны с условиями сотрудничества 
        и обработки персональных данных.
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
    marginBottom: 8
  },
  note: {
    color: '#CCCCCC',
    fontSize: 14,
    marginBottom: 12
  },
  bold: {
    fontWeight: 'bold',
    color: '#D4B89B'
  },
  blockHeader: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8
  },
  blockTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 6
  },
  options: {
    marginBottom: 16,
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
  inputMultiline: {
    textAlignVertical: 'top'
  },
  warning: {
    color: '#FFCC66',
    fontSize: 13,
    marginBottom: 8
  },
  resultBox: {
    backgroundColor: '#3A3A3A',
    borderRadius: 14,
    padding: 16,
    marginTop: 6,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#444'
  },
  resultLabel: {
    color: '#CCCCCC',
    fontSize: 14,
    marginBottom: 4
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
  },
  box: {
    backgroundColor: '#3A3A3A',
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#444'
  },
  boxTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 6
  },
  boxText: {
    color: '#CCCCCC',
    fontSize: 13,
    lineHeight: 19
  },
  infoBox: {
    backgroundColor: '#3A3A3A',
    borderRadius: 14,
    padding: 14,
    marginTop: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#444'
  },
  infoText: {
    color: '#CCCCCC',
    fontSize: 13,
    marginBottom: 4
  },
  submitButton: {
    backgroundColor: '#D4B89B',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 8,
    marginBottom: 8
  },
  submitButtonText: {
    color: '#2B2B2B',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  bottomNote: {
    color: '#AAAAAA',
    fontSize: 11,
    marginTop: 4,
    marginBottom: 10
  }
});
