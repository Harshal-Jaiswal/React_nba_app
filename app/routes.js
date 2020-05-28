import React, { Component } from 'react';
import {Platform} from 'react-native';

import { createSwitchNavigator, createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './components/auth';
import News from './components/news';
import Games from './components/games';
import Article from './components/news/articles';
import GameArticle from './components/games/article';
import Icon from 'react-native-vector-icons/Ionicons';


const NewsStack = createStackNavigator({
  News: News,
  Article : Article
});

const GameStack = createStackNavigator({
  Games: Games,
  Article : GameArticle
});

const AppStack = createBottomTabNavigator({
  News:{
    screen: NewsStack,
    navigationOptions: ({navigation}) => ({
            tabBarIcon: ({ focused, horizontal , tintColor}) => {
              return <Icon name="ios-basketball" size={25} color={tintColor} />
            }
          })
  },
  Games:{
    screen:GameStack,
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return <Icon name="md-tv" size={25} color={tintColor} />
      }
    })
  }
},{
  tabBarOptions:{
    activeTintColor:'#fff',
    showLabel:false,
    activeBackgroundColor:'#00194b',
    inactiveBackgroundColor:'#001338',
    style:{
      backgroundColor:'#001338'
    }
  },
  initialRouteName: "News",
  // defaultNavigationOptions:({navigation})=>{
  //   tabBarIcon:({focused, horizontal, tintColor})=>{
  //     const {routeName} = 
  //   }
  // }
});

const AuthStack = createStackNavigator({
  SignIn:SignIn
});

export const RootNavigator= ()=>{
  return createAppContainer(createSwitchNavigator({
    App: AppStack,
    Auth: AuthStack
  },{
    // initialRouteName: isAuth ? 'App':'Auth'
    initialRouteName: 'Auth'
  }))
}