import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Madera Design</Text>
      <Text style={styles.slogan}>Партнёр в создании современного интерьера</Text>

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

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('MainTabs')}
      >
        <Text style={styles.loginButtonText}>Войти</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.createAccount}>Создать аккаунт</Text>
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  slogan: {
    color: '#CCCCCC',
    fontSize: 14,
    marginBottom: 40,
    textAlign: 'center'
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
  loginButton: {
    backgroundColor: '#D4B89B',
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20
  },
  loginButtonText: {
    color: '#2B2B2B',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  createAccount: {
    color: '#D4B89B',
    textAlign: 'center',
    fontSize: 16
  }
});
