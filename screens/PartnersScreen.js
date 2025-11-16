import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function PartnersScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Партнёрская программа</Text>

      <Text style={styles.paragraph}>
        В Madera Design действует партнёрская программа. Каждый, кто привлекает клиентов в нашу 
        компанию, автоматически становится партнёром и получает вознаграждение.
      </Text>

      <Text style={styles.subtitle}>Условия вознаграждения</Text>
      <Text style={styles.paragraph}>
        • Партнёр получает <Text style={styles.bold}>5% от стоимости каждого заказа</Text>, который 
        оформлен по его промокоду.{'\n'}
        • Вознаграждение начисляется после оформления и полной оплаты заказа клиентом.{'\n'}
        • Выплата производится на карту партнёра в течение <Text style={styles.bold}>трёх рабочих дней</Text>.
      </Text>

      <Text style={styles.subtitle}>Как мы узнаём, что клиент пришёл от вас</Text>
      <Text style={styles.paragraph}>
        • У каждого партнёра есть <Text style={styles.bold}>уникальный промокод</Text>.{'\n'}
        • При оформлении заказа в приложении клиент указывает промокод партнёра в специальном поле.{'\n'}
        • Это означает, что клиент пришёл по вашей рекомендации, и за заказ начисляется ваш процент.
      </Text>

      <Text style={styles.subtitle}>Кто может стать партнёром</Text>
      <Text style={styles.paragraph}>
        • Блогеры и лидеры мнений в социальных сетях.{'\n'}
        • Интерьерные дизайнеры и прорабы.{'\n'}
        • Артисты, модели и другие известные люди в интернете.{'\n'}
        • Любой человек, который рекомендирует нас друзьям, знакомым и своей аудитории.
      </Text>

      <Text style={styles.subtitle}>Как это работает для партнёра</Text>
      <Text style={styles.paragraph}>
        • Партнёр размещает информацию о Madera Design на своих страницах, в сторис, постах, чатах.{'\n'}
        • Делится своим личным промокодом с аудиторией.{'\n'}
        • Когда клиент оформляет заказ и указывает этот промокод, партнёр получает 5% от суммы заказа.
      </Text>

      <Text style={styles.subtitle}>Уведомления и отчётность</Text>
      <Text style={styles.paragraph}>
        • Каждый раз, когда клиент оформляет заказ с вашим промокодом, вы получаете уведомление в WhatsApp.{'\n'}
        • В уведомлении указываются данные клиента и сумма заказа — чтобы было понятно, кто заказал и на какую сумму.{'\n'}
        • В личном кабинете партнёр видит историю заказов и сумму начисленных выплат.
      </Text>

      <Text style={styles.subtitle}>Как стать партнёром</Text>
      <Text style={styles.paragraphLast}>
        • Заполнить специальную онлайн-форму в приложении и принять условия сотрудничества.{'\n'}
        • Отправка формы означает, что вы заключаете партнёрское соглашение в электронном виде и готовы сотрудничать.{'\n'}
        • После подтверждения вам присваивается промокод и открывается доступ к партнёрскому разделу.
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
  subtitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 8
  },
  paragraph: {
    color: '#CCCCCC',
    fontSize: 14,
    marginBottom: 10,
    lineHeight: 20
  },
  paragraphLast: {
    color: '#DDDDDD',
    fontSize: 14,
    marginTop: 10,
    lineHeight: 20
  },
  bold: {
    fontWeight: 'bold',
    color: '#D4B89B'
  }
});
