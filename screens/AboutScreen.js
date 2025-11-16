import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>О компании Madera Design</Text>

      <Text style={styles.paragraph}>
        Madera Design — это компания, которая помогает создать продуманный современный интерьер 
        в квартирах и частных домах города Душанбе. Мы специализируемся на корпусной мебели на заказ 
        и работаем только с жилыми объектами.
      </Text>

      <Text style={styles.paragraph}>
        Наша задача — сделать так, чтобы мебель не просто занимала место, а решала задачи семьи: 
        экономила пространство, выглядела стильно и служила долгие годы.
      </Text>

      <Text style={styles.subtitle}>Наш подход</Text>

      <Text style={styles.paragraph}>
        • Индивидуальный дизайн-проект под каждую квартиру.{'\n'}
        • Современные материалы: российский ЛДСП, турецкий МДФ, фурнитура российских производителей 
        и фурнитура бренда Blum.{'\n'}
        • Чёткие сроки изготовления и прозрачные расчёты стоимости.{'\n'}
        • Поддержка клиента на всех этапах — от заявки до установки.
      </Text>

      <Text style={styles.subtitle}>Чем мы отличаемся</Text>

      <Text style={styles.paragraph}>
        • Фокус только на корпусной мебели для жилья в городе Душанбе.{'\n'}
        • Мы не берёмся за всё подряд — не делаем классический стиль, неоклассику, коммерческие объекты 
        и заказы меньше 3 погонных метров. Благодаря этому мы концентрируемся на том, в чём сильны.{'\n'}
        • Используем технологии и цифровые сервисы, чтобы экономить ваше время: онлайн-калькулятор, 
        статус заказа, напоминания и поддержку.
      </Text>

      <Text style={styles.subtitle}>После установки</Text>

      <Text style={styles.paragraph}>
        Забота о клиенте не заканчивается в день монтажа. В течение года мы предлагаем послепродажное 
        обслуживание: каждые 3 месяца можем проводить техническую проверку мебели по подтверждённым заказам.
      </Text>

      <Text style={styles.paragraphLast}>
        Madera Design — партнёр в создании современного интерьера, в котором вам хочется жить, 
        отдыхать и принимать гостей.
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
  }
});
