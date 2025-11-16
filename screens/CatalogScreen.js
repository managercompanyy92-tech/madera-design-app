import { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

const CATEGORIES = [
  { id: 'kitchen', title: 'Кухни' },
  { id: 'bedroom', title: 'Спальни' },
  { id: 'living', title: 'Гостиные' },
  { id: 'hall', title: 'Прихожие' },
  { id: 'wardrobe', title: 'Гардеробные' },
  { id: 'kids', title: 'Детские' }
];

const ITEMS = {
  kitchen: [
    {
      id: 'k1',
      title: 'Современная кухня с островом',
      subtitle: 'Тёмные фасады и каменная столешница в премиальном стиле',
      description:
        'Идея для просторной кухни-гостиной: функциональный остров, встроенная техника и мягкая подсветка создают ощущение дорогого, продуманного интерьера.',
      image: require('../assets/catalog/kitchen/k1.jpeg')
    },
    {
      id: 'k2',
      title: 'Светлая кухня-столовая в сканди-стиле',
      subtitle: 'Тёплое дерево, мягкие оттенки и аккуратная геометрия',
      description:
        'Идея для тех, кто любит спокойные интерьеры: удобный обеденный стол, встроенная техника и аккуратная подсветка создают ощущение лёгкости и порядка.',
      image: require('../assets/catalog/kitchen/k2.jpeg')
    },
    {
      id: 'k3',
      title: 'Уютная семейная кухня',
      subtitle: 'Мягкие тона и комфортная планировка',
      description:
        'Решение для тех, кто проводит много времени дома: удобные поверхности, продуманное хранение и спокойная палитра.',
      image: require('../assets/catalog/kitchen/k3.jpeg')
    },
    {
      id: 'k4',
      title: 'Кухня-гостиная открытого типа',
      subtitle: 'Пространство для общения и приёма гостей',
      description:
        'Комбинация зоны готовки и гостиной делает интерьер функциональным и современным, не перегружая его деталями.',
      image: require('../assets/catalog/kitchen/k4.jpeg')
    },
    {
      id: 'k5',
      title: 'Минималистичная кухня без лишних деталей',
      subtitle: 'Чистые линии и ровные фасады',
      description:
        'Идея для любителей визуального порядка — всё, что нужно под рукой, остальное скрыто за лаконичными фасадами.',
      image: require('../assets/catalog/kitchen/k5.jpeg')
    },
    {
      id: 'k6',
      title: 'Кухня с акцентной стеной',
      subtitle: 'Фокус на рабочей зоне',
      description:
        'Контрастная или текстурная стена выделяет фартук и делает кухню яркой, но при этом аккуратной.',
      image: require('../assets/catalog/kitchen/k6.jpeg')
    },
    {
      id: 'k7',
      title: 'Прямая кухня с барной стойкой',
      subtitle: 'Удобный формат для небольших помещений',
      description:
        'Барная зона заменяет обеденный стол и экономит пространство, сохраняя при этом комфорт.',
      image: require('../assets/catalog/kitchen/k7.jpeg')
    },
    {
      id: 'k8',
      title: 'Кухня с витринами и открытыми полками',
      subtitle: 'Для красивой посуды и декора',
      description:
        'Подойдёт тем, кто любит показывать сервизы, книги и аксессуары — кухня становится частью интерьера гостиной.',
      image: require('../assets/catalog/kitchen/k8.jpeg')
    },
    {
      id: 'k9',
      title: 'Светлая кухня для визуального расширения пространства',
      subtitle: 'Максимум света и воздуха',
      description:
        'Светлые фасады, нейтральный пол и спокойный фартук делают даже небольшую кухню лёгкой и просторной.',
      image: require('../assets/catalog/kitchen/k9.jpeg')
    },
    {
      id: 'k10',
      title: 'Контрастная современная кухня',
      subtitle: 'Сочетание светлых и тёмных фасадов',
      description:
        'Такое решение подчёркивает геометрию кухонного гарнитура и делает интерьер динамичным.',
      image: require('../assets/catalog/kitchen/k10.jpeg')
    },
    {
      id: 'k11',
      title: 'Кухня с фасадами без ручек',
      subtitle: 'Интегрированные ручки и скрытые профили',
      description:
        'Фасады выглядят ровно и аккуратно, кухня визуально сливается со стенами и создаёт ощущение спокойствия.',
      image: require('../assets/catalog/kitchen/k11.jpeg')
    },
    {
      id: 'k12',
      title: 'Кухня с функциональным островом',
      subtitle: 'Дополнительная рабочая поверхность и хранение',
      description:
        'Остров объединяет в себе зону готовки, сервировки и общения, удобно для больших семей.',
      image: require('../assets/catalog/kitchen/k12.jpeg')
    },
    {
      id: 'k13',
      title: 'Угловая кухня',
      subtitle: 'Рациональное использование угла',
      description:
        'Эргономичный рабочий треугольник и удобное расположение основных зон делают такую кухню очень практичной.',
      image: require('../assets/catalog/kitchen/k13.jpeg')
    },
    {
      id: 'k14',
      title: 'Кухня с декоративной подсветкой',
      subtitle: 'Свет как часть дизайна',
      description:
        'Линейная подсветка подчёркивает фактуры фасадов и создаёт мягкую атмосферу вечером.',
      image: require('../assets/catalog/kitchen/k14.jpeg')
    },
    {
      id: 'k15',
      title: 'Кухня с большим количеством выдвижных ящиков',
      subtitle: 'Продуманное внутреннее наполнение',
      description:
        'Ящики позволяют удобно хранить посуду, продукты и технику, ничего не теряется в глубине шкафов.',
      image: require('../assets/catalog/kitchen/k15.jpeg')
    },
    {
      id: 'k16',
      title: 'Кухня для тех, кто много готовит',
      subtitle: 'Эргономика под активное использование',
      description:
        'Продуманное расположение плиты, мойки и холодильника сокращает лишние движения на кухне.',
      image: require('../assets/catalog/kitchen/k16.jpeg')
    },
    {
      id: 'k17',
      title: 'Кухня с высоким пеналом под технику',
      subtitle: 'Встроенная духовка и системы хранения',
      description:
        'Вертикальный блок аккуратно собирает технику и хранение в одной зоне, освобождая рабочие поверхности.',
      image: require('../assets/catalog/kitchen/k17.jpeg')
    },
    {
      id: 'k18',
      title: 'Кухня в нейтральной палитре',
      subtitle: 'Спокойная база на годы вперёд',
      description:
        'Сдержанные оттенки не надоедают и легко дополняются текстилем и декором.',
      image: require('../assets/catalog/kitchen/k18.jpeg')
    },
    {
      id: 'k19',
      title: 'Кухня с акцентом на фартуке',
      subtitle: 'Интересная отделка рабочей стены',
      description:
        'Фартук становится главным визуальным акцентом кухни и задаёт настроение всему пространству.',
      image: require('../assets/catalog/kitchen/k19.jpeg')
    },
    {
      id: 'k20',
      title: 'Компактная кухня для небольшой площади',
      subtitle: 'Каждый модуль на своём месте',
      description:
        'Идея для студий и малогабаритных квартир, где важно использовать каждый сантиметр.',
      image: require('../assets/catalog/kitchen/k20.jpeg')
    },
    {
      id: 'k21',
      title: 'Кухня с обеденной зоной у окна',
      subtitle: 'Уютные завтраки и ужины с видом',
      description:
        'Решение для семейных кухонь, где стол — центр притяжения дома.',
      image: require('../assets/catalog/kitchen/k21.jpeg')
    },
    {
      id: 'k22',
      title: 'Кухня с вертикальными акцентами',
      subtitle: 'Визуальное увеличение высоты',
      description:
        'Вертикальные линии фасадов и панелей создают ощущение более высокого помещения.',
      image: require('../assets/catalog/kitchen/k22.jpeg')
    },
    {
      id: 'k23',
      title: 'Кухня с комбинированными фасадами',
      subtitle: 'Сочетание разных текстур и оттенков',
      description:
        'Такое решение делает кухню более живой и индивидуальной, не перегружая пространство.',
      image: require('../assets/catalog/kitchen/k23.jpeg')
    },
    {
      id: 'k24',
      title: 'Кухня с открытыми полками для декора',
      subtitle: 'Место для любимых деталей',
      description:
        'Полки позволяют расставить акценты: посуда, книги, растения и аксессуары.',
      image: require('../assets/catalog/kitchen/k24.jpeg')
    },
    {
      id: 'k25',
      title: 'Тёмная современная кухня',
      subtitle: 'Глубокие оттенки и выразительный дизайн',
      description:
        'Подходит для любителей смелых решений и современной атмосферы.',
      image: require('../assets/catalog/kitchen/k25.jpeg')
    },
    {
      id: 'k26',
      title: 'Кухня со встроенной вытяжкой',
      subtitle: 'Функциональность без лишних деталей',
      description:
        'Техника аккуратно интегрирована в гарнитур и не отвлекает внимание от интерьера.',
      image: require('../assets/catalog/kitchen/k26.jpeg')
    },
    {
      id: 'k27',
      title: 'Кухня с большой рабочей поверхностью',
      subtitle: 'Для тех, кто любит готовить дома',
      description:
        'Просторная столешница позволяет одновременно готовить, сервировать и работать.',
      image: require('../assets/catalog/kitchen/k27.jpeg')
    },
    {
      id: 'k28',
      title: 'Кухня с барной стойкой для гостей',
      subtitle: 'Пространство для общения',
      description:
        'Удобный формат для вечеров с друзьями и негромких домашних встреч.',
      image: require('../assets/catalog/kitchen/k28.jpeg')
    },
    {
      id: 'k29',
      title: 'Кухня с чёткой геометрией фасадов',
      subtitle: 'Строгие линии и порядок',
      description:
        'Идея для тех, кто ценит симметрию, ровные линии и структурность.',
      image: require('../assets/catalog/kitchen/k29.jpeg')
    },
    {
      id: 'k30',
      title: 'Кухня с подсветкой рабочей зоны',
      subtitle: 'Комфортная работа в любое время суток',
      description:
        'Правильная подсветка улучшает видимость и создаёт уютный вечерний сценарий.',
      image: require('../assets/catalog/kitchen/k30.jpeg')
    },
    {
      id: 'k31',
      title: 'Городская современная кухня',
      subtitle: 'Функциональность и стиль в одном пространстве',
      description:
        'Практичное решение для динамичной жизни: всё под рукой, ничего лишнего.',
      image: require('../assets/catalog/kitchen/k31.jpeg')
    },
    {
      id: 'k32',
      title: 'Кухня с акцентной столешницей',
      subtitle: 'Фактурная рабочая поверхность',
      description:
        'Интересная столешница задаёт характер кухне и делает её запоминающейся.',
      image: require('../assets/catalog/kitchen/k32.jpeg')
    },
    {
      id: 'k33',
      title: 'Кухня для адаптации под ваш интерьер',
      subtitle: 'Идея, которую можно настроить под вас',
      description:
        'Концепция, которую можно адаптировать под размеры, цветовую гамму и стиль вашей квартиры.',
      image: require('../assets/catalog/kitchen/k33.jpeg')
    }
  ],

  // Остальные категории пока с простыми текстовыми идеями.
  bedroom: [
    {
      id: 'b1',
      title: 'Спальный гарнитур с мягким изголовьем',
      subtitle: 'Минимализм и тёплые оттенки',
      description:
        'Идея для спокойной спальни с встроенными шкафами и продуманным хранением.',
      image: null
    }
  ],
  living: [
    {
      id: 'l1',
      title: 'ТВ-зона с нишами и подсветкой',
      subtitle: 'Комод, полки и декоративный свет',
      description:
        'Идея для гостиной, где техника, книги и декор собраны в единую композицию.',
      image: null
    }
  ],
  hall: [
    {
      id: 'h1',
      title: 'Прихожая со шкафом и скамьёй',
      subtitle: 'Удобное хранение и комфортный вход в дом',
      description:
        'Система для коридора: обувь, верхняя одежда и аксессуары — у каждого своё место.',
      image: null
    }
  ],
  wardrobe: [
    {
      id: 'w1',
      title: 'Гардеробная с открытыми секциями',
      subtitle: 'Всё на виду и под рукой',
      description:
        'Идея для отдельной гардеробной комнаты или ниши с рациональным хранением одежды и обуви.',
      image: null
    }
  ],
  kids: [
    {
      id: 'c1',
      title: 'Детская с рабочим местом и хранением',
      subtitle: 'Учёба, отдых и порядок в одной комнате',
      description:
        'Идея для детской, где продуманы зоны для сна, игр и занятий ребёнка.',
      image: null
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
            {item.image ? (
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="cover"
              />
            ) : (
              <View style={styles.imagePlaceholder}>
                <Text style={styles.imagePlaceholderText}>Здесь будет фото идеи</Text>
              </View>
            )}

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
  image: {
    borderRadius: 12,
    height: 200,
    marginBottom: 10
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
