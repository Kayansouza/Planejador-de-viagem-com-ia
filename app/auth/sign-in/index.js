import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { TextInput } from 'react-native-web';

export default function Entrae() {

  const navigator = useNavigation(); // Renomeado para 'navigator'

  useEffect(() => {
    navigator.setOptions({ // Usando 'navigator' no lugar de 'navigation'
      headerShown: false,
    });
  }, [navigator]); // Adicionando dependência para evitar loop infinito

  return (
    <View style={{ padding: 25, 
      paddingTop: 50,
      backgroundColor: '#FFFF',
      height: '100%'
    }}>
      <Text style= {{
        fontFamily:'Outift-bold.ttf',
        fontSize:30
      }}
      
      > Vamos fazer login</Text>

    <Text style= {{
        fontFamily:'Outift-Medium.ttf',
        fontSize:30,
        color: '#808080',
        marginTop: 30
      }}  
      > Bem-Vindo de Volta</Text>

     <Text style= {{
        fontFamily:'Outift-Medium.ttf',
        fontSize:30,
        color: '#808080',
        marginTop:20
      }}    
      > Você Fez Falta!</Text>
      
      <View>
        <Text>Email</Text>
       <TextInput placeholder='Enter email'></TextInput>
      </View>

    </View>
  );
}
