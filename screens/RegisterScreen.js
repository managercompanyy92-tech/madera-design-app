import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Madera Design</Text>
      <Text style={styles.title}>Создать аккаунт</Text>

      <TextInput
        style={styles.input}
        placeholder="Имя"
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        placeholder="Номер телефона"
        placeholderTextColor="#999"
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Пароль"
        placeholderTextColor="#999"
        secureTextEntry
      />

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Зарегистрироваться</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.backToLogin}>У меня уже есть аккаунт</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2B2B',
    paddingHorizontal: 25,
    justifyContent: 'center'
  },
  logo: {
    color: '#D4B89B',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30
  },
  input: {
    backgroundColor: '#3A3A3A',
    color: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#555'
  },
  registerButton: {
    backgroundColor: '#D4B89B',
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20
  },
  registerButtonText: {
    color: '#2B2B2B',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  backToLogin: {
    color: '#D4B89B',
    textAlign: 'center',
    fontSize: 16
  }
});
