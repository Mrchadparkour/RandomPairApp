
import React from 'react';
import { Button, Platform, ScrollView, StyleSheet } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MyNavScreen from './MyNavScreen';
import Home from './Home';
import Drafts from './Drafts';


Home.navigationOptions = {
  drawerLabel: 'Home',
};

// const DraftsScreen = ({ navigation }) => (
//   <MyNavScreen banner={'Drafts Screen'} navigation={navigation} />
// );
Drafts.navigationOptions = {
  drawerLabel: 'Drafts',
};

const App = DrawerNavigator(
  {
    Home: {
      path: '/',
      screen: Home,
    },
    Drafts: {
      path: '/sent',
      screen: Drafts,
    },
  },
  {
    initialRouteName: 'Drafts',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

export default App;
