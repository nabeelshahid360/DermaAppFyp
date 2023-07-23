import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Stylesheet,
  Image,
} from 'react-native';
import Styles from './SignIn.styles';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator, TextInput } from 'react-native-paper';
import { SignInHeadline } from '../../constants/splash-content';
import { AuthRoutes } from '../../constants/routes';
import { UserAuth } from '../../../context/AuthContext';
import Toast from "react-native-toast-message";

export default function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { component, navigation } = props;
  const { signIn } = UserAuth();

  const goToForgetScreen = () => {
    navigation.navigate(AuthRoutes.ForgetScreen);
  }
  const goToHomeScreen = async() => {
    try{
      setLoading(true);
      var regName = /^[a-zA-Z]+(?: [a-zA-Z]+)?$/;
        if(email === "" || password === "") {
            Toast.show({
                type: "error",
                text1: "Enter all the fields...",
                visibilityTime: 2000
            });
            return;
        }
      await signIn(email, password);
      navigation.reset({
        index: 0,
        routes: [{ name: AuthRoutes.HomeScreen }],
      });
    }
    catch(e){
      console.log(e.message);
      Toast.show({
        type: "error",
        text1: e.message,
        visibilityTime: 2000
      });
    }
    finally{
      setLoading(false);
    }
    
  }

  return <View style={Styles.container}>
    
    <View style={Styles.header}>
    <LinearGradient
      colors={['#5B8BDF', '#2C64C6']}
      style={Styles.container}
    >
      <View style={Styles.headline}>

        <Text style={Styles.logintxt}>{SignInHeadline}</Text>

      </View>
      </LinearGradient>
      </View>
      
      <View style={Styles.footer}>
        <Text style={Styles.login}>Login</Text>
        <Text style={Styles.logincon}>Login to continue</Text>
       
      <View style={Styles.loginform}>
        <TextInput
          placeholder="Email or Phone Number"
          left={<TextInput.Icon icon="mail" iconColor='black' />}
          style={Styles.inputfileds}
          underlineColor="transparent"
          textColor='black'
          activeUnderlineColor='transparent'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput style={Styles.inputfileds}
          placeholder="Password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" iconColor='black'/>}
          underlineColor="transparent"
          textColor='black'
          activeUnderlineColor='transparent' 
          value={password}
          onChangeText={(text) => setPassword(text)}   
        />
        <TouchableOpacity style={Styles.signinbtn} onPress={goToHomeScreen}>
        { loading ? <ActivityIndicator color="white" size={20}/> :
                     <Text style={Styles.textSignin}>
                     Log In
                   </Text>   
       }
        </TouchableOpacity>
        <View style={Styles.forget}>
          <TouchableOpacity  onPress={goToForgetScreen}>
            <Text style={Styles.forgettxt}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.Donthaveaccount}>
        <Text style={Styles.notalready}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate(AuthRoutes.SignUp)}>
          <Text style={Styles.notalreadylogin}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    <Toast/>
  </View>


};
SignIn.defaultProps = {
  component: '',
};

SignIn.propTypes = {};

