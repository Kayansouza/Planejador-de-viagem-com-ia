import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'; // Importação do TouchableOpacity
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  return (
    <View>
      <Image 
        source={require('./../images/lousa.jpeg')}
        style={{
          width: '100%',
          height: 520,
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'Outfit-Medium', // Corrigido
            textAlign: 'center',
            marginTop: 10,
          }}
        >
          {/* Coloque o texto aqui, se necessário */}
        </Text>

        <Text style={styles.title}>Planejador de viagens AI</Text>

        <Text
          style={{
            fontFamily: 'Outfit-Medium', // Corrigido
            fontSize: 17, // Corrigido para número
            textAlign: 'center',
            color: Colors.Gray,
            marginTop: 20,
          }}
        >
          Seu guia de viagens inteligente. Explore mais, planeje menos.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('auth/sign-in')}
        >
          <Text
            style={{
              color: '#FFFFFF',
              textAlign: 'center',
              fontFamily: 'Outfit-Medium.ttf', // Corrigido
              fontSize: 17, // Corrigido para número
            }}
          >
            Entrar com a conta Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF', // Corrigido para backgroundColor
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '100%',
    padding: 25,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Outfit-Medium', // Certifique-se de que 'Outfit-Medium' está corretamente configurado
  },
  button: {
    padding: 15,
    backgroundColor: '#151718',
    borderRadius: 99,
    marginTop: '20%',
  },
});
