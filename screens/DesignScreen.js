import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function DesignScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Дизайн-проект мебели</Text>

      <Text style={styles.paragraph}>
        Мы разрабатываем индивидуальные дизайн-проекты корпусной мебели для квартир и частных домов
        в городе Душанбе. Наша задача — сделать пространство функциональным, современным и удобным 
        для вашей семьи.
      </Text>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Для кого мы делаем дизайн</Text>
        <Text style={styles.blockText}>
          • Дизайн-проект мы создаём только для клиентов, которые оформляют у нас заказ и оплачивают услуги.{'\n'}
          • Отдельно, «просто дизайн без заказа мебели», мы не выполняем.{'\n'}
          • Если у клиента уже есть готовый дизайн-проект — мы можем реализовать его при условии, 
            что он технически выполним с нашими материалами и фурнитурой.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Что входит в дизайн-проект</Text>
        <Text style={styles.blockText}>
          • Планировка мебели с учётом размеров помещения.{'\n'}
          • Визуальные решения: цвета, фактуры, сочетания материалов.{'\n'}
          • Продуманное внутреннее наполнение шкафов, гардеробных и кухонь.{'\n'}
          • Привязка к инженерным точкам (розетки, выводы воды, вытяжка — по необходимости).{'\n'}
          • Подготовка технического задания для производства.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Почему без дизайн-проекта мы не работаем</Text>
        <Text style={styles.blockText}>
          • Дизайн-проект — это основа точного расчёта и качественного результата.{'\n'}
          • Он позволяет заранее избежать ошибок по размерам и функционалу.{'\n'}
          • Вы видите, как будет выглядеть мебель до начала производства.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Этапы работы с дизайном</Text>
        <Text style={styles.blockText}>
          • Обсуждение задачи и стиля (минимализм, современный, сканди и т.д.).{'\n'}
          • Замер помещения и фиксация всех особенностей пространства.{'\n'}
          • Подготовка варианта дизайн-проекта и обсуждение с вами.{'\n'}
          • Внесение корректировок и утверждение финального варианта.{'\n'}
          • Передача проекта в производство.
        </Text>
      </View>

      <Text style={styles.paragraphLast}>
        Наша цель — создать мебель, которая гармонично вписывается в интерьер и каждый день 
        работает на ваш комфорт. Дизайн-проект — первый шаг к этому результату.
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
  paragraphLast: {
    color: '#DDDDDD',
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20
  }
});
