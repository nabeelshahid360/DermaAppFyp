import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Stylesheet,
  Image,
  TextInput
} from 'react-native';
import Styles from './HomeScreen.styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import { HomeScreenHeadline } from '../../constants/splash-content';
import { AuthRoutes } from '../../constants/routes';
import { UserAuth } from '../../../context/AuthContext';
import { UserData } from '../../../context/UserContext';


export default function HomeScreen(props) {
  const { user, signout } = UserAuth();
  const {userDataRetrieve, userInfo, setUserInfo} = UserData();
  const { component, navigation } = props;

  const goToSignIn = async() => {
    try{
      await signout();
      setUserInfo(null);
      navigation.replace(AuthRoutes.SignIn);

    }
    catch(e){
      console.log(e.message);
    }
  }

  useEffect(() => {
    userDataRetrieve(user.uid)
    .then((data) => {
      setUserInfo(data);
    })
    .catch((e) => {
        console.log(e);
        Toast.show({
            type: "error",
            text1: e,
            visibilityTime: 2000
        });
    })
}, [])


  return <View style={Styles.container}>
<LinearGradient
        colors={['#2C64C6', '#5B8BDF']}
        style={Styles.container1}
      >
    <View style={Styles.header}>
      
        <View style={Styles.main}>
          <View style={Styles.userdetail}>
            <Icon2 style={Styles.logicon}
              name="user"
              color="#fff"
              size={20}

            />
          </View>
          <View style={Styles.logout}>
            <TouchableOpacity onPress={goToSignIn}>
              <Icon style={Styles.logicon}
                name="logout"
                color="#fff"
                size={25}

              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.headline}>
          <Text style={Styles.logintxt}>{HomeScreenHeadline}</Text>
        </View>
    
    <View style={Styles.testcases}>
       <View style={Styles.usernamediv}>
        <Text style={Styles.usernametxt}>{userInfo?.name}</Text>
       </View>
       <View style={Styles.testsec}>
        <TouchableOpacity style={Styles.casebtn}>
          <Icon
          name="photo-camera"
          color="#045782"
          size={30}
          />
          <Text style={Styles.newcasetxt}>Start new case</Text>
        </TouchableOpacity>

       </View>

       <View style={Styles.prevoiussec}>
        <TouchableOpacity style={Styles.casebtn}>
          <Icon
          name="insert-drive-file"
          color="#045782"
          size={30}
          />
          <Text style={Styles.newcasetxt}>Previous Records</Text>
        </TouchableOpacity>

       </View>
    </View>
    
    </View>
    </LinearGradient>
  </View>


};
HomeScreen.defaultProps = {
  component: '',
};

HomeScreen.propTypes = {};

