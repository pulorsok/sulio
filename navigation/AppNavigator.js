import {StackNavigator} from 'react-navigation';
import React, {Component} from 'react';
import {Button} from 'react-native';
import LoginForm from './components/Login/index';
import SignupForm from './components/Signup/index';
import App from './App';

export const AppNavigator = StackNavigator({
    Login: {
        screen: LoginForm,
    },
    Signup: {
        screen: SignupForm,
    },
    App: {
        screen: App
    }
  },
  {
    animationEnabled: true,
  });