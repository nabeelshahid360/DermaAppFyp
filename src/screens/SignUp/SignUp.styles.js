import { StyleSheet } from 'react-native';
import { height, width } from '../../utils/ui-styles';

const SignUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
    
    },
    backgroundimg:{
      flex: 1,
      width:'100%',
    },
  Signupheading: {
    fontSize: 30,
    color: "black",
    fontWeight: 800,
    fontFamily: 'Ubuntu',
    textAlign: 'center',
    marginTop:15,

  },
  signupsubheading:{
    textAlign: 'center',
    color: '#595B70',
    fontSize: 14,
    marginBottom:10
  },
  signupform: {
  //  justifyContent: "center",
  //  alignItems: "center",
    width:'90%',
  },
  inputfileds:{
   margin:10,
   borderColor:'#2C64C6',
   borderWidth:1,
   borderTopRightRadius: 20,
   borderTopLeftRadius: 20,
   borderBottomRightRadius: 20,
   borderBottomLeftRadius: 20,
   backgroundColor:'#E8E8E8',
  },
  signupbtn: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    marginTop:20,
    marginLeft:'auto',
    marginRight:'auto'    
  },
  textSignup: {
    color: 'white',
    fontWeight: 'bold'
  },
  haveaccount:{
    marginLeft:'auto',
    marginRight:'auto',
    flexDirection:'row',
    marginTop:20
  },
  already:{
    fontSize:20,
    color: '#fff',
    paddingRight:10,
    fontFamily:'Ubuntu'
    
  },
  alreadylogin:{
    fontSize:20,
    color: '#fff',
    textDecorationLine:'underline',
    fontFamily:'Ubuntu'
  }
 
});

export default SignUpStyles;