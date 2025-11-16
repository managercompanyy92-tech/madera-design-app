import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Логотип */}
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logoImage}
        resizeMode="contain"
      />

      {/* Фото модели */}
      <Image
        source={require('../assets/images/model.png')}
        style={styles.modelImage}
        resizeMode="cover"
      />

      {/* Текст */}
      <Text style={styles.title}>Добро пожаловать!</Text>

      <Text style={styles.subtitle}>
        Войдите в мир мебели, которая меняет пространство
        и впечатляет с первого взгляда!
      </Text>

      {/* Кнопка продолжения */}
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
  logoImage: {
    width: 160,
    height: 80,
    marginBottom: 20
  },
  modelImage: {
    width: 220,
    height: 220,
    borderRadius: 110,
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
