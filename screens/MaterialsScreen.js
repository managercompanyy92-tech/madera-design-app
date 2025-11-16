import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function MaterialsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Материалы и фурнитура</Text>

      <Text style={styles.paragraph}>
        В работе мы используем проверенные материалы и фурнитуру, которые обеспечивают 
        надёжность, аккуратный внешний вид и комфорт в ежедневном использовании.
      </Text>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Корпус: ЛДСП (Россия)</Text>
        <Text style={styles.blockText}>
          • Ламинированная древесно-стружечная плита российских производителей.{'\n'}
          • Оптимальное сочетание цены и качества для корпусной мебели.{'\n'}
          • Используется для корпусов кухонь, гардеробных, спален, гостиных и других зон.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Фасады: ЛДСП (Россия)</Text>
        <Text style={styles.blockText}>
          • Практичное решение для тех, кто хочет современный внешний вид по доступной цене.{'\n'}
          • Подходит для минималистичных и лаконичных интерьеров.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Фасады: МДФ (Турция)</Text>
        <Text style={styles.blockText}>
          • Более пластичный материал с возможностью интересной обработки и фрезеровки.{'\n'}
          • Используется в варианте «корпус ЛДСП (Россия) + фасады МДФ (Турция)».{'\n'}
          • Выбор для тех, кто хочет более выразительный дизайн и премиальный вид фасадов.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Фурнитура российских производителей</Text>
        <Text style={styles.blockText}>
          • Надёжные направляющие, петли, механизмы открывания.{'\n'}
          • Подбираются под задачу и бюджет клиента.{'\n'}
          • Обеспечивают плавное открывание и комфорт при ежедневном использовании мебели.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Фурнитура Blum</Text>
        <Text style={styles.blockText}>
          • Международно признанный бренд фурнитуры премиум-класса.{'\n'}
          • Плавное и мягкое закрывание дверей и ящиков.{'\n'}
          • Повышенный срок службы и комфорт, особенно для кухонь и активно используемых зон.
        </Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Столешницы (для кухонь)</Text>
        <Text style={styles.blockText}>
          • Влагостойкие столешницы, рассчитанные на ежедневную эксплуатацию.{'\n'}
          • Подбираются под общий стиль кухни и цвет фасадов.
        </Text>
      </View>

      <Text style={styles.paragraphLast}>
        Подбор конкретных декоративных поверхностей, текстур и оттенков производится на этапе 
        дизайн-проекта, с учётом стиля квартиры, освещения и ваших личных предпочтений.
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
  }
});
