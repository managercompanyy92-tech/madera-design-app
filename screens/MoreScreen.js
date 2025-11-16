import { View, Text, StyleSheet } from 'react-native';

export default function MoreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ещё</Text>
      <Text style={styles.subtitle}>
        Здесь будут разделы: О компании, Партнёрам, Акции, Контакты, Условия оплаты и многое другое.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2B2B',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#D4B89B',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center'
  },
  subtitle: {
    color: '#CCCCCC',
    fontSize: 16,
    textAlign: 'center'
  }
});
