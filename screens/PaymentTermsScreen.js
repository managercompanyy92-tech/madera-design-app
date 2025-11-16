import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function PaymentTermsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Условия оплаты</Text>

      <Text style={styles.paragraph}>
        Мы работаем прозрачно и по понятным правилам. Оплата за мебель и услуги 
        осуществляется в безналичной форме через электронные кошельки и банковские сервисы.
      </Text>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Форма оплаты</Text>
        <Text style={styles.blockText}>
          • Оплата только в безналичной форме.{'\n'}
          • Используются электронные кошельки и онлайн-сервисы, доступные в городе Душанбе.{'\n'}
          • Реквизиты и список доступных кошельков будут указаны при оформлении заказа.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Предоплата</Text>
        <Text style={styles.blockText}>
          • Мы работаем только по <Text style={styles.bold}>100% предоплате</Text>.{'\n'}
          • Заказы с частичной предоплатой не принимаются.{'\n'}
          • Предоплата позволяет зарезервировать материалы, запустить производство и 
            закрепить за вами сроки изготовления.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Оплата замера</Text>
        <Text style={styles.blockText}>
          • Замер объекта выполняется после предварительного согласования.{'\n'}
          • Стоимость выезда замерщика — <Text style={styles.bold}>100 сомони</Text>.{'\n'}
          • Оплата замера также производится в безналичной форме.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Безопасность и подтверждение оплаты</Text>
        <Text style={styles.blockText}>
          • После оплаты вы получаете подтверждение в виде чека/скриншота и отметку в системе.{'\n'}
          • Менеджер дублирует информацию об оплате в переписке (WhatsApp/Telegram).{'\n'}
          • После поступления средств заказ переходит в этап производства.
        </Text>
      </View>

      <Text style={styles.paragraphLast}>
        Перед оплатой вы всегда можете задать вопросы менеджеру, уточнить реквизиты 
        и убедиться, что все условия договора вам понятны и подходят.
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
  paragraphLast: {
    color: '#DDDDDD',
    fontSize: 14,
    marginTop: 8,
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
  bold: {
    fontWeight: 'bold',
    color: '#D4B89B'
  }
});
