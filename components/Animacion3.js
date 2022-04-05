import React, {useState, useEffect} from 'react';
import {StyleSheet,View, Text, Animated} from 'react-native';

export const Animacion3 = () => {
  const [animacion] = useState(new Animated.Value(14));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 40, //al valor al que llega
      duration: 500,//cantidad de tiempo en llegar
      useNativeDriver:false
    }).start(); //inicia la animacion
  }, []);

  return (
    <View>
      <Animated.Text style={[styles.texto,{fontSize:animacion}]}>Animacion 3</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});
