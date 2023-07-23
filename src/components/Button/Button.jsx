import React from 'react';
import {View} from 'react-native';
import Styles from './Button.styles';

const Button = ({component}) => {
  return <View style={Styles.container}>{component}</View>;
};

Button.defaultProps = {
  component: '',
};

Button.propTypes = {};

export default Button;
