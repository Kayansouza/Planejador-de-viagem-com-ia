import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router'; // Importação correta do useRouter
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/FireBaseConfigs';

export default function SignUp() {
  const router = useRouter(); // Uso correto do useRouter

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const onCreateAccount = () => {
    if (email === '' || password === '' || fullName === '') {
      console.log('Por favor, preencha todos os campos');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Usuário criado com sucesso
        const user = userCredential.user;
        console.log('Usuário criado:', user);
        router.push('/auth/sign-in'); // Redirecionar para a página de login após cadastro
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Erro:', errorMessage, errorCode);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      {/* Input de Email */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Email'
          keyboardType='email-address'
          autoCapitalize='none'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      {/* Input de Nome Completo */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nome Completo</Text>
        <TextInput
          style={styles.input}
          placeholder='Nome Completo'
          autoCapitalize='words'
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
      </View>

      {/* Input de Senha */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder='Senha'
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      {/* Botão para Criar Conta */}
      <TouchableOpacity 
        style={styles.buttonPrimary}
        onPress={onCreateAccount}
      >
        <Text style={styles.buttonText}>Criar a Conta</Text>
      </TouchableOpacity>

      {/* Botão para Entrar */}
      <TouchableOpacity 
        style={styles.buttonSecondary}
        onPress={() => router.push('/auth/sign-in')}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 50,
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  title: {
    fontFamily: 'Outfit-Medium',
    fontSize: 30,
    marginBottom: 20,
  },
  inputGroup: {
    marginTop: 20,
  },
  label: {
    fontFamily: 'Outfit-Medium',
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 50,
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#A9A9A9',
    fontFamily: 'Outfit-Medium',
    marginBottom: 20,
    backgroundColor: '#F9F9F9',
  },
  buttonPrimary: {
    padding: 15,
    backgroundColor: '#000000',
    borderRadius: 15,
    marginTop: 30,
  },
  buttonSecondary: {
    padding: 15,
    backgroundColor: '#A9A9A9',
    borderRadius: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Outfit-Medium',
    fontSize: 18,
  },
});
