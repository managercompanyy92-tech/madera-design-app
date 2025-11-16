import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const categories = [
  { id: 'kitchen', title: 'Кухонные гарнитуры' },
  { id: 'bedroom', title: 'Спальные гарнитуры' },
  { id: 'living', title: 'Гостиные' },
  { id: 'hall', title: 'Прихожие' },
  { id: 'wardrobe', title: 'Гардеробные' },
  { id: 'kids', title: 'Детские' }
];

export default function CatalogScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Каталог идей</Text>

      <Text style={styles.note}>
        Все изображения в каталоге представлены как идеи для дизайна и не являются нашими готовыми работами. 
        Вы можете выбрать понравившийся вариант, внести изменения и реализовать в своей квартире.
      </Text>

      <View style={styles.list}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={styles.card}
            onPress={() => {
              // позже здесь откроем галерею с картинками для этого раздела
            }}
          >
            <Text style={styles.cardTitle}>{cat.title}</Text>
            <Text style={styles.cardText}>Смотреть идеи дизайна</Text>
          </TouchableOpacity>
        ))}
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
    marginBottom: 16
  },
  note: {
    color: '#CCCCCC',
    fontSize: 14,
    marginBottom: 20
  },
  list: {
    gap: 12
  },
  card: {
    backgroundColor: '#3A3A3A',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#444'
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6
  },
  cardText: {
    color: '#D4B89B',
    fontSize: 14
  }
});
