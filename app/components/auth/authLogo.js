import React, { Component } from 'react';
import {

  View,
  Image
} from 'react-native';
import LogoImg from '../../assets/images/nba_login_logo.png';
const AuthLogo = () =>{
  return (
  <View>
    <Image
      source={LogoImg}
      resizeMode='contain'
      style={{
        width:260, height:150
      }}  
    />
  </View>
  )
}

export default AuthLogo;
