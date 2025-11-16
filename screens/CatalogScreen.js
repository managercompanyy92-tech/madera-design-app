import { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const CATEGORIES = [
  { id: 'kitchen', title: 'Кухни' },
  { id: 'bedroom', title: 'Спальни' },
  { id: 'living', title: 'Гостиные' },
  { id: 'hall', title: 'Прихожие' },
  { id: 'wardrobe', title: 'Гардеробные' },
  { id: 'kids', title: 'Детские' }
];

// Пока используем текстовые карточки без реальных фото.
// Когда ты пришлёшь каталог, можно будет подставить реальные изображения.
const ITEMS = {
  kitchen: [
    {
      id: 'k1',
      title: 'Современная линейная кухня',
      subtitle: 'Прямая кухня с верхними шкафами до потолка.',
      description:
        'Идея для компактной кухни в квартире. Много хранения, встроенная техника, лаконичный дизайн.'
    },
    {
      id: 'k2',
      title: 'Кухня с островом',
      subtitle: 'Функциональный остров для готовки и общения.',
      description:
        'Подходит для просторных кухонь-гостинных. Зона готовки и зона отдыха в одном пространстве.'
    }
  ],
  bedroom: [
    {
      id: 'b1',
      title: 'Спальный гарнитур с мягким изголовьем',
      subtitle: 'Минимализм и тёплые оттенки.',
      description:
        'Идея для спокойной спальни с удобным хранением и встроенными шкафами.'
    },
    {
      id: 'b2',
      title: 'Встроенный шкаф во всю стену',
      subtitle: 'Максимум хранения без визуального шума.',
      description:
        'Шкаф с гладкими фасадами, который «растворяется» в интерьере.'
    }
  ],
  living: [
    {
      id: 'l1',
      title: 'ТВ-зона с нишами',
      subtitle: 'Комод, полки и декоративная подсветка.',
      description:
        'Идея для гостиной, где техника, книги и декор собраны в единую композицию.'
    }
  ],
  hall: [
    {
      id: 'h1',
      title: 'Прихожая с шкафом и скамьёй',
      subtitle: 'Удобно переобуваться и хранить одежду.',
      description:
        'Продуманная система для коридора: обувь, верхняя одежда, аксессуары — у каждого своё место.'
    }
  ],
  wardrobe: [
    {
      id: 'w1',
      title: 'Гардеробная с открытыми секциями',
      subtitle: 'Всё на виду и под рукой.',
      description:
        'Идея для отдельной гардеробной комнаты или ниши. Рациональное хранение одежды и обуви.'
    }
  ],
  kids: [
    {
      id: 'c1',
      title: 'Детская с рабочим местом и хранением',
      subtitle: 'Учёба, отдых и порядок в одной комнате.',
      description:
        'Идея для детской комнаты, где продуманы зоны для сна, игр и занятий.'
    }
  ]
};

export default function CatalogScreen({ navigation }) {
  const [activeCategory, setActiveCategory] = useState('kitchen');
  const items = ITEMS[activeCategory] || [];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Каталог идей</Text>
      <Text style={styles.subtitle}>
        Эти изображения и проекты представлены как идеи для дизайна и планировки.
        Они не являются фотографиями наших выполненных работ, но могут быть взяты за основу
        для реализации в вашей квартире.
      </Text>

      {/* Вкладки категорий */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabs}
        contentContainerStyle={styles.tabsContent}
      >
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={[
              styles.tab,
              activeCategory === cat.id && styles.tabActive
            ]}
            onPress={() => setActiveCategory(cat.id)}
          >
            <Text
              style={[
                styles.tabText,
                activeCategory === cat.id && styles.tabTextActive
              ]}
            >
              {cat.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Карточки идей */}
      <View style={styles.cards}>
        {items.map((item) => (
          <View key={item.id} style={styles.card}>
            {/* Здесь позже можно будет вывести реальное фото */}
            <View style={styles.imagePlaceholder}>
              <Text style={styles.imagePlaceholderText}>Здесь будет фото идеи</Text>
            </View>

            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
            <Text style={styles.cardText}>{item.description}</Text>

            <Text style={styles.notice}>
              Примечание: это пример дизайн-идеи, а не фото нашей выполненной работы.
            </Text>

            <View style={styles.cardButtons}>
              <TouchableOpacity
                style={styles.buttonSecondary}
                onPress={() => navigation.navigate('Order')}
              >
                <Text style={styles.buttonSecondaryText}>Рассчитать стоимость</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonPrimary}
                onPress={() => navigation.navigate('Order')}
              >
                <Text style={styles.buttonPrimaryText}>Заказать</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    marginBottom: 10
  },
  subtitle: {
    color: '#CCCCCC',
    fontSize: 13,
    marginBottom: 16,
    lineHeight: 19
  },
  tabs: {
    marginBottom: 14
  },
  tabsContent: {
    gap: 8
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#444',
    backgroundColor: '#3A3A3A'
  },
  tabActive: {
    borderColor: '#D4B89B',
    backgroundColor: '#4A3A30'
  },
  tabText: {
    color: '#CCCCCC',
    fontSize: 13
  },
  tabTextActive: {
    color: '#D4B89B',
    fontWeight: 'bold'
  },
  cards: {
    gap: 14
  },
  card: {
    backgroundColor: '#3A3A3A',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#444'
  },
  imagePlaceholder: {
    backgroundColor: '#2B2B2B',
    borderRadius: 12,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#555'
  },
  imagePlaceholderText: {
    color: '#777',
    fontSize: 12
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  cardSubtitle: {
    color: '#D4B89B',
    fontSize: 13,
    marginBottom: 6
  },
  cardText: {
    color: '#CCCCCC',
    fontSize: 13,
    marginBottom: 8,
    lineHeight: 18
  },
  notice: {
    color: '#AAAAAA',
    fontSize: 11,
    marginBottom: 10
  },
  cardButtons: {
    flexDirection: 'row',
    gap: 8
  },
  buttonSecondary: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D4B89B',
    paddingVertical: 10,
    alignItems: 'center'
  },
  buttonSecondaryText: {
    color: '#D4B89B',
    fontSize: 13,
    fontWeight: 'bold'
  },
  buttonPrimary: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#D4B89B',
    paddingVertical: 10,
    alignItems: 'center'
  },
  buttonPrimaryText: {
    color: '#2B2B2B',
    fontSize: 13,
    fontWeight: 'bold'
  }
});
