import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet,Animated} from 'react-native';

export const Animacion6 = () => {

    const [animacion1] = useState(new Animated.Value(0));
    const [animacion2] = useState(new Animated.Value(-50));

    //sequence toma arreglos de animaciones
    //loop es un ciclo infinito en las animaciones

    useEffect(() => {
        Animated.loop(
        Animated.sequence([
            Animated.timing(animacion2,{
                toValue:-30,
                duration:0,
                useNativeDriver:false
            }),
            Animated.timing(animacion1,{
                toValue:60,
                duration:500,
                useNativeDriver:false
            }),
            Animated.timing(animacion2,{
                toValue:30,
                duration:500,
                useNativeDriver:false
            }),
            Animated.timing(animacion1,{
                toValue:0,
                duration:500,
                useNativeDriver:false
            }),
            Animated.timing(animacion2,{
                toValue:-30,
                duration:500,
                useNativeDriver:false
            }),

        ])
        ).start();
    },[])

    const stiloAnimacion = {
        transform: [{translateY: animacion1},{translateX: animacion2}]
    }

  return (
    <View style={{alignItems: 'center'}}>
        <Animated.View style={[styles.caja,stiloAnimacion]}>

        </Animated.View>

    </View>
  )
}

const styles = StyleSheet.create({
    caja: {
        width:10,
        height:10,
        backgroundColor:'cornflowerblue',

    }
})
