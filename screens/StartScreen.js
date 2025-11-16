import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Madera Design</Text>

      <Text style={styles.title}>
        Добро пожаловать!
      </Text>

      <Text style={styles.subtitle}>
        Войдите в мир мебели, которая меняет пространство
        и впечатляет с первого взгляда!
      </Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={styles.buttonText}>Продолжить</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2B2B',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  logo: {
    color: '#D4B89B',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30
  },
  title: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  subtitle: {
    color: '#CCCCCC',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40
  },
  button: {
    backgroundColor: '#D4B89B',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10
  },
  buttonText: {
    color: '#2B2B2B',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
