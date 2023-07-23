import {StyleSheet} from 'react-native';
const ForgetScreenStyles  = StyleSheet.create({
  container: {
    flex: 1
  },
  container1:{
    flex:1
  },
  header:{
    marginTop:50
  },
  headline:{
    marginLeft:'auto',
    marginRight:'auto',
    fontSize:50,
    fontWeight:800,
    color:"white"
  },
  footer:{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  foottext:{
    fontFamily:'ubuntu',
    fontSize:16,
    color:"white",
    textAlign:"center",
    marginTop:30
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
    width:'80%',
    paddingLeft:10
   },
   forgotpass:{
    width:'80%',
    backgroundColor:'#045782',
    padding:17,
    margin:10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
   },
   forgetpastxt:{
    fontSize:16,
    color:"white",
    fontWeight:700,
    textAlign:'center'

    
   },
  
});

export default ForgetScreenStyles;