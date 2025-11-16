import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Личный кабинет</Text>
      <Text style={styles.subtitle}>
        Здесь будет информация о ваших заказах, статусах и партнёрской программе.
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
