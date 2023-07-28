import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Stylesheet,
  Image,
  TextInput,
  Linking,
  FlatList
} from 'react-native';
import Styles from './HomeScreen.styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Iconlog from 'react-native-vector-icons/AntDesign'
import { HomeScreenHeadline } from '../../constants/splash-content';
import { AuthRoutes } from '../../constants/routes';
import { UserAuth } from '../../../context/AuthContext';
import { UserData } from '../../../context/UserContext';
import {launchCamera} from 'react-native-image-picker';
import { GalleryItem } from '../../components/GalleryItem';


export default function HomeScreen(props) {
  const { user, signout } = UserAuth();
  const {userDataRetrieve, userInfo, setUserInfo, uploadAssets} = UserData();
  const { component, navigation } = props;
  const [images, setImages] = useState([]);
  
  const cameraOptions = {
    mediaType: 'photo',
    //....
  }

  useEffect(() => {
    userDataRetrieve(user.uid)
    .then((data) => {
      setUserInfo(data);
      const Assets = data?.assets || [];
      setImages(Assets);
      console.log(data);
    })
    .catch((e) => {
        console.log(e);
        Toast.show({
            type: "error",
            text1: e,
            visibilityTime: 2000
        });
    })
}, []);




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
  const openCamera = () => {
    launchCamera(cameraOptions, (camResponse)=>{
      const { assets } = camResponse;
     if(assets) {
      uploadAssets(userInfo, assets )
      console.log(assets);
      setImages(pre => [ ...pre, ...assets]);
     } 
    });
  }


  
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
               <View style={Styles.usernamediv}>
        <Text style={Styles.usernametxt}>{userInfo?.name}</Text>
       </View>
          </View>
          <View style={Styles.logout}>
            <TouchableOpacity onPress={goToSignIn}>
              <Iconlog style={Styles.logicon}
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
       <View style={Styles.testsec}>
        <TouchableOpacity onPress={openCamera} style={Styles.casebtn}>
          <Icon
          name="photo-camera"
          color="#045782"
          size={30}
          />
          <Text style={Styles.newcasetxt}>Start new case</Text>
        </TouchableOpacity>
       </View>
       <FlatList
        data={images}
        numColumns={2}
        renderItem={GalleryItem}
        contentContainerStyle={{flex:1, alignItems:'center', justifyContent:'space-between'}}
    />
    </View>
    
    </View>
    </LinearGradient>
  </View>
};
HomeScreen.defaultProps = {
  component: '',
};

HomeScreen.propTypes = {};

