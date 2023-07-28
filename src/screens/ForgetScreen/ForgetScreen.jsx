import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Stylesheet,
  Image,
  TextInput
} from 'react-native';
import Styles from './ForgetScreen.styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Toast from "react-native-toast-message";


import { HomeScreenHeadline, LogoHeadline, SignInHeadline } from '../../constants/splash-content';
import { AuthRoutes } from '../../constants/routes';
import { UserAuth } from '../../../context/AuthContext';

export default function ForgetScreen(props) {
  const[email, setEmail] = useState("");
  const { resetPassword } = UserAuth();
  const { component, navigation } = props;

  const handleResetPassword = async() => {
    try{
      if(email === "") {
        Toast.show({
            type: "error",
            text1: "Enter email....",
            visibilityTime: 2000
        });
        return;
    }
      await resetPassword(email);
      Toast.show({
          type: "success",
          text1: "Email has been sent...",
          visibilityTime: 2000
        });
        // navigation.navigate(AuthRoutes.SignIn);

  }
  catch(e){
      console.log(e.message);
      Toast.show({
          type: "error",
          text1: e.message,
          visibilityTime: 2000
        });
  }
  }


  return <View style={Styles.container}>
<LinearGradient
        colors={['#2C64C6', '#5B8BDF']}
        style={Styles.container1}
      >
    <View style={Styles.header}>
      <Text style={Styles.headline}>{SignInHeadline}</Text>
    </View>
    <View style={Styles.footer}>

    <Icon style={Styles.logicon}
              name="lock"
              color="#fff"
              size={50}

            />

            <Text style={Styles.foottext}>Enter your email here and{'\n'}we'll send you a link to{'\n'}change a new password</Text>
            <TextInput
            style={Styles.inputfileds}
            placeholder="Email Address"
            placeholderTextColor={"black"}
            value={email}
            onChangeText={(text) => setEmail(text)}
            />

            <TouchableOpacity style={Styles.forgotpass} onPress={handleResetPassword}><Text style={Styles.forgetpastxt}>Forgot Password</Text></TouchableOpacity>
            
    </View>
    <Toast/>
    </LinearGradient>
  </View>


};
ForgetScreen.defaultProps = {
  component: '',
};

ForgetScreen.propTypes = {};

