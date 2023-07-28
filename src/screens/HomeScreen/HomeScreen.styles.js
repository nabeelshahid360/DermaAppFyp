import {StyleSheet} from 'react-native';
const HomeScreenStyles  = StyleSheet.create({
  container: {
    flex: 1
  },
  container1:{
    flex:1
  },
  headline:{
    marginLeft:'auto',
    marginRight:'auto',
  },
  logintxt:{
    fontSize:30,
    marginTop:20,
    fontFamily:'ubuntu',
    fontWeight:700
  },
  main:{
    flexDirection:'row',
    marginTop:20,
    marginRight:10,
    marginLeft:10
  },
  logout:{
  width:"50%",
  alignItems:'flex-end',
  },
  userdetail:{
    width:"50%",
    flexDirection:'row'
  },
  testcases:{
    width:"90%",
    backgroundColor:"#fff",
    height:"75%",
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:20,
    borderRadius:15,
  },
  usernamediv:{
    marginLeft:"auto",
    marginRight:"auto",

  },
  usernametxt:{
    fontSize:18,
    color:"white",
    fontWeight:700,
  },
  casebtn:{
    flexDirection:"row",
    marginLeft:20,
    marginTop:20
  },
  newcasetxt:{
    color:"black",
    fontSize:20,
    paddingLeft:10
    
  },
});

export default HomeScreenStyles;