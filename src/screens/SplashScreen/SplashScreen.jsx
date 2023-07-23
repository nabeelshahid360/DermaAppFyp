import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Stylesheet,
  Image
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import { LogoHeadline } from '../../constants/splash-content';
import Styles from './SplashScreen.styles';
import { Assets } from '../../assets';
import { AuthRoutes } from '../../constants/routes';

export default function SplashScreen({ navigation }) {

  return (

    <View style={Styles.container}>
      <View style={Styles.header}>

        <Animatable.Image
          animation="bounceIn"
          duraton="1600"
          source={Assets.Logo}
          style={Styles.logo}
          resizeMode="stretch"
        />
        <Text style={Styles.fftext}>
          {LogoHeadline}
        </Text>

      </View>

      <Animatable.View
        style={Styles.footer}
        animation="fadeInUpBig"
      >
        <Text style={Styles.whatderma}>
          What Is Dr. Derma?
        </Text>
        <Text style={Styles.discriptionderma}>
          Dr. Derma is a guide to help you detect your common face Acne conditions.
        </Text>
        <Text style={Styles.discriptionderma}>
          Dr. Derma only diagnose face acne and face skin problems. And provide you the best tratment.
        </Text>
        <Text style={Styles.impderma}>
          If you are feeling ill or have rapidly changing symptoms, please seek medical care.
        </Text>
        <View style={Styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate(AuthRoutes.SignIn)}>
            <LinearGradient
              colors={['#2C64C6', '#5B8BDF']}
              style={Styles.signIn}
            >
              <Text style={Styles.textSign}>
                Get Started
              </Text>
              <Icon
                name="arrow-right"
                color="#fff"
                size={20}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
        

      </Animatable.View>

    </View>
  );
}


