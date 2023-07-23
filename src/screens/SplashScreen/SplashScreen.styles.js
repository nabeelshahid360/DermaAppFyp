import { StyleSheet } from 'react-native';
import { logo_height } from '../../utils/ui-styles';
const SplashScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5B8BDF'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20

  },
  logo: {
    width: logo_height,
    height: logo_height
  },
  splashText: {
    fontSize: 40,
    fontFamily: 'Ubuntu',
    fontWeight: 800,
    color: "#fff",
    paddingBottom: 20
  },
  button: {
    position: 'absolute',
    right: 20,
    bottom: 30
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold'
  },
  fftext: {
    fontSize: 16,
    fontFamily: 'Ubuntu',
    fontWeight: 500,
    color: 'white',
    marginTop: -30,
    textAlign: 'center'

  },
  whatderma: {
    fontSize: 25,
    fontFamily: 'Ubuntu',
    fontWeight: 800,
    color: 'black'
  },
  discriptionderma: {
    fontSize: 14,
    fontWeight: 500,
    color: 'black'
  },
  impderma: {
    fontFamily: 'Ubuntu',
    fontWeight: 800,
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginTop: 10
  }
})

export default SplashScreenStyles;