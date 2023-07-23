import {StyleSheet} from 'react-native';
import { black } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
const SignInStyles  = StyleSheet.create({
  container: {
    flex: 1
  },
  headline:{
  marginTop:25
  },
  header: {  
    flex:1,
  },
  footer: {
    flex:2,
    // height:'70%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop:-50

  },
  logintxt:{
    fontFamily:'ubuntu',
    fontSize:50,
    color:'#fff',
    fontWeight:800,
    marginLeft:'auto',
    marginRight:'auto'
  },
  loginform:{
    marginLeft:'auto',
    marginRight:'auto',
    width:'90%',
    paddingTop: 5
  },
  login:{
  fontFamily:'ubuntu',
  fontSize:40,
  color:'#595B70',
  marginLeft:'auto',
  marginRight:'auto',
  fontWeight:700,
  padding:20
  },
  logincon:{
    fontFamily:'ubuntu',
    fontSize:12,
    color:"#595B70",
    marginLeft:'auto',
    marginRight:'auto',
    letterSpacing:1.5
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
   signinbtn: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    marginTop:20,
    marginLeft:'auto',
    marginRight:'auto',
    backgroundColor:'#2C64C6'
  },
  textSignin: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:18,
    fontWeight:800
    
  },
  Donthaveaccount:{
    marginLeft:'auto',
    marginRight:'auto',
    flexDirection:'row',
    // marginBottom:70
    marginTop:5
  },
  notalready:{
    fontSize:16,
    color: '#595B70',
    paddingRight:10,
    fontFamily:'Ubuntu'
    
  },
  notalreadylogin:{
    fontSize:16,
    color: '#595B70',
    textDecorationLine:'underline',
    fontFamily:'Ubuntu',
    fontWeight:700
  },
  forget:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
  },
  forgettxt:{
  fontSize:14,
  color:'#595B70',
  fontFamily: 'Ubuntu'
  },
});

export default SignInStyles;