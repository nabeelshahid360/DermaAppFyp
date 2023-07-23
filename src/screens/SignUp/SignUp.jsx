import { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { ActivityIndicator, TextInput } from 'react-native-paper';
import Styles from './SignUp.styles';
import { Text } from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Feather from 'react-native-vector-icons/Feather';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import * as Animatable from 'react-native-animatable';
import { AuthRoutes } from '../../constants/routes';
import { SignUpHeadline } from '../../constants/splash-content';
import { Assets } from '../../assets';
import { UserAuth } from "../../../context/AuthContext"
import { UserData } from '../../../context/UserContext';
import { auth } from '../../../firebase';
import Toast from "react-native-toast-message";

export default function SignUp(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [uName, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp } = UserAuth();
  const { userDataInsert } = UserData();
  const { component, navigation } = props;

  const goToSignIn = async() => {
    try {
      setLoading(true);
      var regName = /^[a-zA-Z]+(?: [a-zA-Z]+)?$/;
        if(name === "" || email === "" || password === "" || uName === "") {
            Toast.show({
                type: "error",
                text1: "Enter all the fields...",
                visibilityTime: 2000
            });
            return;
        }
        if(!regName.test(name) || !regName.test(uName)){
            Toast.show({
                type: "error",
                text1: "Name should only contain alphabets...",
                visibilityTime: 2000
            });
            return;    
        }
      await signUp(email, password);
      const userId = auth.currentUser.uid;
      const data = {
          id: userId,
          name: name,
          uName: uName,
          email: email,
      }
      await userDataInsert(data);
      setName("");
      setEmail("");
      setPassword("");
      setUname("");
      navigation.reset({
        index: 0,
        routes: [{ name: AuthRoutes.HomeScreen }],
      });          
    } 
    catch (e) {
        console.log(e.message)
        Toast.show({
            type: "error",
            text1: e.message,
            visibilityTime: 2000
          });
    }
    finally {
        setLoading(false);
    }
  }

  return <ImageBackground style={Styles.backgroundimg} source={Assets.Back}>
    <View style={Styles.container}>

      {component}
      <Text style={Styles.Signupheading}>{SignUpHeadline}</Text>
      <Text style={Styles.signupsubheading}>sign up to continue </Text>
      <View style={Styles.signupform}>
        <View style={Styles.action}>


          <TextInput  style={Styles.inputfileds}
            placeholder="Email or Phone Number"
            left={<TextInput.Icon icon="mail" iconColor='black' />}
            textColor='black'
            underlineColor="transparent"
            activeUnderlineColor='transparent'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput style={Styles.inputfileds}
            placeholder="Full Name"
            left={<TextInput.Icon icon="pencil" iconColor='black' />}
            textColor='black'
            underlineColor="transparent"
            activeUnderlineColor='transparent'
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput style={Styles.inputfileds}
            placeholder="Username"
            left={<TextInput.Icon icon="lock" iconColor='black' />}
            textColor='black'
            underlineColor="transparent"
            activeUnderlineColor='transparent'
            value={uName}
            onChangeText={(text) => setUname(text)}
          />
          <TextInput style={Styles.inputfileds}
            placeholder="Password"
            secureTextEntry
            right={<TextInput.Icon icon="eye" iconColor='black' />}
            textColor='black'
            underlineColor="transparent"
            activeUnderlineColor='transparent'
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

        </View>
        <TouchableOpacity onPress={goToSignIn}>
          <LinearGradient
            colors={['#2C64C6', '#5B8BDF']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={Styles.signupbtn}
          >
            { loading ? <ActivityIndicator color="white" size={20}/> :
                        <Text style={Styles.textSignup}>
                        SIGN UP
                      </Text>
                    }
            

          </LinearGradient>
        </TouchableOpacity>
        <View style={Styles.haveaccount}>
          <Text style={Styles.already}>
            Have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate(AuthRoutes.SignIn)}>
            <Text style={Styles.alreadylogin}>
              Login
            </Text>
          </TouchableOpacity>
        </View>



      </View>

    </View>
    <Toast/>
  </ImageBackground>
};

SignUp.defaultProps = {
  component: '',
};

SignUp.propTypes = {};

