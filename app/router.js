import React from 'react';
import { Button, Platform, StatusBar} from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import MyNavScreen from './screens/MyNavScreen';
import Home from './screens/Home';
import Drafts from './screens/Drafts';
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = StackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up",
      headerStyle
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In",
      headerStyle
    }
  }
});

export const SignedIn = DrawerNavigator(
  {
    Home: {
      path: '/',
      screen: Home,
      navigationOptions: {
        drawerLabel: "Home",
      }
    },
    Drafts: {
      path: '/sent',
      screen: Drafts,
      navigationOptions: {
        drawerLabel: "Drafts",
      }
    },
  },
  {
    initialRouteName: 'Drafts',
    contentOptions: {
      activeTintColor: '#e91e63',
      marginTop :  Platform.OS === 'ios' ? 20 : 0,
    },
  }
);

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};
