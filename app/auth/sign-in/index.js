import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Entrar() {
  const router = useRouter();
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  return (
    <View style={styles.container}>
      {/* Botão de Voltar */}
      <Ionicons 
        name="arrow-back" 
        size={24} 
        color="black" 
        onPress={() => router.back()} // Navegar para a página anterior
        style={styles.backIcon}
      />

      <Text style={styles.title}>Vamos fazer login</Text>
      <Text style={styles.subtitle}>Bem-Vindo de Volta</Text>
      <Text style={styles.subtitle}>Você Fez Falta!</Text>

      {/* Input de Email */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.input}
          placeholder='Enter Email'
          keyboardType='email-address'
          autoCapitalize='none'
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Input de Senha com Ícone */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput 
            style={styles.inputPassword}
            placeholder='Senha'
            secureTextEntry={!showPassword}
            value={senha}
            onChangeText={setSenha}
          />
          <Ionicons
            name={showPassword ? 'eye' : 'eye-off'}
            size={24}
            color='gray'
            onPress={() => setShowPassword(!showPassword)}
            style={styles.icon}
          />
        </View>
      </View>

      {/* Botão Entrar */}
      <TouchableOpacity 
        style={styles.buttonPrimary}
        onPress={() => router.push('/auth/sign-in')} // Rota corrigida
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Botão Criar Conta */}
      <TouchableOpacity 
        style={styles.buttonSecondary}
        onPress={() => router.push('/auth/sign-up')} // Rota corrigida
      >
        <Text style={styles.buttonText}>Criar a Conta</Text>
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
  backIcon: {
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Outfit-Bold',
    fontSize: 30,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'Outfit-Medium',
    fontSize: 25,
    color: '#808080',
    marginTop: 10,
    marginBottom: 5,
  },
  inputGroup: {
    marginTop: 30,
  },
  label: {
    fontFamily: 'Outfit-Medium',
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    fontFamily: 'Outfit-Regular',
    backgroundColor: '#F9F9F9',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#F9F9F9',
    paddingRight: 10,
  },
  inputPassword: {
    flex: 1,
    height: 50,
    paddingLeft: 10,
    fontFamily: 'Outfit-Regular',
  },
  icon: {
    padding: 10,
  },
  buttonPrimary: {
    padding: 20,
    backgroundColor: '#000000',
    borderRadius: 15,
    marginTop: 50,
  },
  buttonSecondary: {
    padding: 20,
    backgroundColor: '#A9A9A9',
    borderRadius: 15,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Outfit-Medium',
    fontSize: 18,
  },
});
