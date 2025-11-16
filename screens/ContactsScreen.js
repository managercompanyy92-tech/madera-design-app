import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const PHONE = '+992012900303';
const EMAIL = 'management.maderadesign@gmail.com';
const INSTAGRAM = 'https://instagram.com/modera_design_tjk';
const FACEBOOK = 'https://www.facebook.com/share/1BiHjxikKD/';

export default function ContactsScreen() {
  const openLink = (url) => {
    Linking.openURL(url).catch(() => {});
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Контакты</Text>

      <Text style={styles.paragraph}>
        Свяжитесь с нами удобным для вас способом. Мы отвечаем на вопросы о мебели, сроках, заказах
        и партнёрстве.
      </Text>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Телефон</Text>
        <TouchableOpacity onPress={() => openLink(`tel:${PHONE}`)}>
          <Text style={styles.link}>+992 012-90-03-03</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>E-mail</Text>
        <TouchableOpacity onPress={() => openLink(`mailto:${EMAIL}`)}>
          <Text style={styles.link}>{EMAIL}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>WhatsApp</Text>
        <TouchableOpacity
          onPress={() => openLink(`https://wa.me/992012900303`)}
        >
          <Text style={styles.link}>Написать в WhatsApp</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Telegram</Text>
        <TouchableOpacity
          onPress={() => openLink(`https://t.me/${PHONE}`)}
        >
          <Text style={styles.link}>Написать в Telegram</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Instagram</Text>
        <TouchableOpacity onPress={() => openLink(INSTAGRAM)}>
          <Text style={styles.link}>@modera_design_tjk</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>Facebook</Text>
        <TouchableOpacity onPress={() => openLink(FACEBOOK)}>
          <Text style={styles.link}>Страница Madera Design на Facebook</Text>
        </TouchableOpacity>
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
  paragraph: {
    color: '#CCCCCC',
    fontSize: 14,
    marginBottom: 18,
    lineHeight: 20
  },
  block: {
    marginBottom: 16
  },
  blockTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  link: {
    color: '#D4B89B',
    fontSize: 15
  }
});
