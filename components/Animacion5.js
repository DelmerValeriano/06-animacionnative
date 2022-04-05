import React,{useState} from 'react';
import {Text, View, StyleSheet, Pressable, Animated} from 'react-native';

export const Animacion5 = () => {
    const [animacion] = useState(new Animated.Value(1));

    const presionarBtn = () => {
        Animated.spring(animacion, {
            toValue: .8,
            useNativeDriver:false

        }).start();

    }

    const soltarBtn = () => {
        Animated.spring(animacion, {
            toValue: 1,
            friction: 5, //mas bajo mayor rebote
            tension:30, 
            useNativeDriver:false

        }).start();




    }

    const stiloAnimacion = {
        transform: [{scale: animacion}]

    }

  return (
    <View style={styles.contenedor}>
      <Pressable
        onPressIn={() => presionarBtn()}
        onPressOut={() => soltarBtn()}
      >
        <Animated.View style={[styles.btn,stiloAnimacion]}>
          <Text style={styles.texto}>Iniciar Sesión</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center',

    },
    btn: {
        backgroundColor: 'cornflowerblue',
        width: 280,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    texto: {
        color: 'white',
        fontWeight: 'bold', 
        textTransform: 'uppercase',
        fontSize: 28,


    }
});
